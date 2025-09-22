import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";

export async function generateMetadata() {
   return {
      title: "Mentions légales | Elsass Compta",
      description: "Mentions légales d'Elsass Compta, cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
      robots: {
         index: false,
         follow: false,
      },
   };
}

export default async function MentionsLegales() {
   const mentions = await getStrapiCollectionBySlug(
      "legals",
      "mentions-legales"
   );

   return (
      <section className="wrapper pt-10 pb-20">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            {mentions.title}
         </h1>

         <div
            className="prose mt-15"
            dangerouslySetInnerHTML={{
               __html: marked.parse(mentions.content || ""),
            }}
         />
      </section>
   );
}
