import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalContentQuery } from "@/actions/queries/globalContentQuery";

export async function generateMetadata() {
   const mentions = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 110 },
      rootField: "page",
   });
   return {
      title:
         mentions.seo.title ||
         `${mentions.title} - Elsass Compta - Cabinet d'expertise comptable en Alsace`,
      description:
         mentions.seo.metaDesc ||
         "Mentions légales d'Elsass Compta, cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
      robots: {
         index: mentions.seo.robotsAllow || false,
         follow: mentions.seo.robotsAllow || false,
      },
      openGraph: {
         title:
            mentions.seo.title ||
            `${mentions.title} - Elsass Compta - Cabinet d'expertise comptable en Alsace`,
         description:
            mentions.seo.metaDesc ||
            "Mentions légales d'Elsass Compta, cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
         url: "https://elsass-compta.fr/mentions-legales",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function MentionsLegales() {
   const mentions = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 110 },
      rootField: "page",
   });

   return (
      <section className="wrapper pt-10 pb-20">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            {mentions.title}
         </h1>

         <div
            className="prose mt-15"
            dangerouslySetInnerHTML={{
               __html: mentions.content,
            }}
         />
      </section>
   );
}
