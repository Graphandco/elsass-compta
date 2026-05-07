import ContactForm from "@/components/contact/ContactForm";
import ContactText from "@/components/contact/ContactText";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalContentQuery } from "@/actions/queries/globalContentQuery";

export async function generateMetadata() {
   const contact = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 106 },
      rootField: "page",
   });
   return {
      title:
         contact.seo.title ||
         "Contact - Elsass Compta - Cabinet d'expertise comptable en Alsace",
      description:
         contact.seo.metaDesc ||
         "Contact - Elsass Compta - Cabinet d'expertise comptable en Alsace.",
      openGraph: {
         title:
            contact.seo.title ||
            "Contact - Elsass Compta - Cabinet d'expertise comptable en Alsace",
         description:
            contact.seo.metaDesc ||
            "Contact - Elsass Compta - Cabinet d'expertise comptable en Alsace.",
         url: "https://elsass-compta.fr/contact",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function Contact() {
   const contact = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 106 },
      rootField: "page",
   });

   return (
      <div className="bg-primary-light">
         <div className="wrapper py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
            <ContactText contact={contact} />
            <ContactForm />
         </div>
      </div>
   );
}
