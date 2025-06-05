import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import Image from "next/image";
import { marked } from "marked";
import PrestationsHeader from "@/components/prestations/PrestationsHeader";

export default async function Prestation({ params }) {
   const prestation = await getStrapiCollectionBySlug(
      "prestations",
      params.slug
   );

   if (!prestation) return notFound();

   return (
      <>
         <section className="wrapper pt-5">
            <PrestationsHeader prestation={prestation} />
         </section>
         <section
            className="wrapper mt-10 mb-20 prose"
            dangerouslySetInnerHTML={{
               __html: marked.parse(prestation.content || ""),
            }}
         />
      </>
   );
}
