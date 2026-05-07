import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalContentQuery } from "@/actions/queries/globalContentQuery";

export async function generateMetadata() {
   const politique = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 112 },
      rootField: "page",
   });
   return {
      title:
         politique.seo.title ||
         `${politique.title} - Elsass Compta - Cabinet d'expertise comptable en Alsace`,
      description:
         politique.seo.metaDesc ||
         "Mentions légales d'Elsass Compta, cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
      robots: {
         index: politique.seo.robotsAllow || false,
         follow: politique.seo.robotsAllow || false,
      },
      openGraph: {
         title:
            politique.seo.title ||
            `${politique.title} - Elsass Compta - Cabinet d'expertise comptable en Alsace`,
         description:
            politique.seo.metaDesc ||
            "Mentions légales d'Elsass Compta, cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
         url: "https://elsass-compta.fr/politique-de-confidentialite",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function PolitiqueDeConfidentialite() {
   const politique = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 112 },
      rootField: "page",
   });

   return (
      <section className="wrapper pt-10 pb-20">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            {politique.title}
         </h1>

         <div
            className="prose mt-15"
            dangerouslySetInnerHTML={{
               __html: politique.content,
            }}
         />
      </section>
   );
}
