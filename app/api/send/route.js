import { EmailTemplate } from "@/components/email-template";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
   try {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
         return Response.json(
            {
               error: "Configuration serveur incomplète (RESEND_API_KEY manquante).",
            },
            { status: 500 },
         );
      }

      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const body = await req.json();

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

      return Response.json({ success: true, data });
   } catch (err) {
      console.error("Erreur serveur :", err);
      return Response.json(
         { error: "Erreur interne du serveur" },
         { status: 500 },
      );
   }
}
