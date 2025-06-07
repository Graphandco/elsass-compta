import ContactForm from "@/components/contact/ContactForm";
import ContactText from "@/components/contact/ContactText";
import { getStrapiUnique } from "@/actions/getStrapiUnique";

export default async function Contact() {
   const contact = await getStrapiUnique({ type: "contact" });

   return (
      <div className="bg-primary text-neutral-200">
         <div className="wrapper py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
            <ContactText contact={contact} />
            <ContactForm />
         </div>
      </div>
   );
}
