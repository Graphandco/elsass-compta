import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";

export default async function PolitiqueDeConfidentialite() {
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
