import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
   try {
      const body = await req.json();

      // 🔎 Debug : vérifie que les données sont bien reçues
      // console.log("Formulaire reçu :", body);

      const { name, email, phone, society, clientType, message, privacy } =
         body;

      const { data, error } = await resend.emails.send({
         from: "Site Elsass Compta <site-elsass-compta@graphandco.net>",
         to: ["contact@elsass-compta.fr"],
         subject:
            "Nouveau message depuis le formulaire de contact du site Elsass Compta",
         react: EmailTemplate({
            name,
            email,
            phone,
            society,
            clientType,
            message,
            privacy,
         }),
      });

      if (error) {
         console.error("Erreur Resend :", error);
         return Response.json({ error: "Erreur d'envoi." }, { status: 500 });
      }

      return Response.json({ success: true });
   } catch (err) {
      console.error("Erreur serveur :", err);
      return Response.json(
         { error: "Erreur interne du serveur" },
         { status: 500 }
      );
   }
}
