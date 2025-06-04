import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import Image from "next/image";
import { marked } from "marked";

export default async function Prestation({ params }) {
   const prestation = await getStrapiCollectionBySlug(
      "prestations",
      params.slug
   );

   if (!prestation) return notFound();

   console.log(prestation);

   return (
      <>
         <section className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="space-y-5">
                  <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                     {prestation.title}
                  </h1>
                  <div className="flex items-center gap-5">
                     <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${prestation?.icon?.url}`}
                        alt={prestation.title}
                        width={prestation?.icon?.width}
                        height={prestation?.icon?.height}
                        className="h-16 w-auto"
                     />
                     <div className="bg-primary-light rounded-sm p-3 text-primary">
                        {prestation.short_description}
                     </div>
                  </div>
               </div>
            </div>
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
