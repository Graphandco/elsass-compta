import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";

export default async function Prestation({ params }) {
   const prestation = await getStrapiCollectionBySlug(
      "prestations",
      params.slug
   );

   if (!prestation) return notFound();

   console.log(prestation);

   return (
      <section className="wrapper">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            {prestation.title}
         </h1>
      </section>
   );
}
