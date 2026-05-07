import { EmailTemplate } from "@/components/email-template";
import { render } from "@react-email/render";

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

      const body = await req.json();

      const { name, email, phone, society, clientType, message, privacy } =
         body;

      const html = await render(
         EmailTemplate({
            name,
            email,
            phone,
            society,
            clientType,
            message,
            privacy,
         }),
      );

      const resendResponse = await fetch("https://api.resend.com/emails", {
         method: "POST",
         headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            from: "Site Elsass Compta <site-elsass-compta@graphandco.net>",
            to: ["contact@elsass-compta.fr"],
            subject:
               "Nouveau message depuis le formulaire de contact du site Elsass Compta",
            html,
         }),
      });

      const data = await resendResponse.json();

      if (!resendResponse.ok) {
         console.error("Erreur Resend :", data);
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
