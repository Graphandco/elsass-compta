import ContactForm from "@/components/contact/ContactForm";
import ContactText from "@/components/contact/ContactText";
import { getStrapiUnique } from "@/actions/getStrapiUnique";

export async function generateMetadata() {
   const contact = await getStrapiUnique({ type: "contact" });
   const cleanDescription = (contact.meta_description || "")
      .replace(/[#*]/g, "")
      .slice(0, 160);
   
   return {
      title: contact.meta_title || "Nous contacter",
      description: cleanDescription,
      openGraph: {
         title: contact.meta_title || "Nous contacter | Elsass Compta",
         description: cleanDescription,
         url: "https://elsass-compta.fr/contact",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function Contact() {
   const contact = await getStrapiUnique({ type: "contact" });

   return (
      <div className="bg-primary-light">
         <div className="wrapper py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
            <ContactText contact={contact} />
            <ContactForm />
         </div>
      </div>
   );
}
