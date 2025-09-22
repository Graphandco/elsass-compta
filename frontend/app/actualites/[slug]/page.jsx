import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import Image from "next/image";
import { marked } from "marked";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
   const { slug } = await params;
   const actualite = await getStrapiCollectionBySlug("actualites", slug);

   if (!actualite) {
      return {
         title: "Actualité non trouvée",
         description: "Cette actualité n'existe pas ou n'est plus disponible.",
      };
   }

   // Utiliser les métadonnées personnalisées ou fallback sur le contenu
   const metaTitle =
      actualite.meta_title || `${actualite.title} | Elsass Compta`;
   const metaDescription =
      actualite.meta_description ||
      (actualite.content
         ? actualite.content.replace(/[#*]/g, "").substring(0, 160)
         : "Découvrez cette actualité d'Elsass Compta.");

   return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
         title: metaTitle,
         description: metaDescription,
         url: `https://elsass-compta.fr/actualites/${slug}`,
         type: "article",
         siteName: "Elsass Compta",
         ...(actualite.image && {
            images: [
               {
                  url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${actualite.image.url}`,
                  width: actualite.image.width,
                  height: actualite.image.height,
                  alt: actualite.title,
               },
            ],
         }),
      },
   };
}

export default async function Actualite({ params }) {
   const actualite = await getStrapiCollectionBySlug("actualites", params.slug);

   if (!actualite) return notFound();

   console.log(actualite);

   return (
      <>
         <section className="wrapper pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
               <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                  {actualite.title}
               </h1>
               <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${actualite.image?.url}`}
                  alt={actualite.title}
                  width={actualite?.image?.width}
                  height={actualite?.image?.height}
                  className="aspect-video object-cover rounded-lg w-80"
               />
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
