import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";
import PrestationHeader from "@/components/prestations/PrestationHeader";

export default async function Prestation({ params }) {
   const prestation = await getStrapiCollectionBySlug(
      "prestations",
      params.slug
   );

   if (!prestation) return notFound();

   return (
      <>
         <section className="wrapper pt-10 md:pt-20">
            <PrestationHeader prestation={prestation} />
         </section>
         <section
            className="wrapper mt-20 mb-20 prose"
            dangerouslySetInnerHTML={{
               __html: marked.parse(prestation.content || ""),
            }}
         />
      </>
   );
}
