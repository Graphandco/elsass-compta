import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import Image from "next/image";
import { marked } from "marked";

export default async function Actualite({ params }) {
   const actualite = await getStrapiCollectionBySlug("actualites", params.slug);

   if (!actualite) return notFound();

   console.log(actualite);

   return (
      <>
         <section className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="space-y-5">
                  <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                     {actualite.title}
                  </h1>
                  <div className="flex items-center gap-5">
                     <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${actualite?.image?.url}`}
                        alt={actualite.title}
                        width={actualite?.image?.width}
                        height={actualite?.image?.height}
                        className="h-16 w-auto"
                     />
                  </div>
               </div>
            </div>
         </section>
         <section
            className="wrapper mt-10 mb-20 prose"
            dangerouslySetInnerHTML={{
               __html: marked.parse(actualite.content || ""),
            }}
         />
      </>
   );
}
