import { notFound } from "next/navigation";

import { getWordpressContent } from "@/actions/getWordpressContent";
import { PRESTATIONS_CHILDREN_QUERY } from "@/actions/queries/prestationsChildrenQuery";
import Image from "next/image";

async function getPrestationsChildren() {
   const data = await getWordpressContent({
      query: PRESTATIONS_CHILDREN_QUERY,
      variables: { id: 43 },
      rootField: "page",
   });
   return [...(data?.children?.nodes || [])].sort(
      (a, b) => (a?.databaseId || 0) - (b?.databaseId || 0),
   );
}

export async function generateMetadata({ params }) {
   const { slug } = await params;
   const children = await getPrestationsChildren();
   const wordpressPrestation = children.find((child) => child.slug === slug);

   if (!wordpressPrestation) {
      return {
         title: "Prestation non trouvée",
         description: "Cette prestation n'existe pas ou n'est plus disponible.",
      };
   }

   return {
      title:
         wordpressPrestation?.seo?.title ||
         wordpressPrestation?.title ||
         "Elsass Compta - Prestations d'expertise comptable en Alsace",
      description:
         wordpressPrestation?.seo?.metaDesc ||
         wordpressPrestation?.prestations?.resume ||
         "Cabinet d'expertise comptable en Alsace. Découvrez nos prestations pour professionnels et particuliers.",
      openGraph: {
         title:
            wordpressPrestation?.seo?.title ||
            wordpressPrestation?.title ||
            "Elsass Compta - Prestations d'expertise comptable en Alsace",
         description:
            wordpressPrestation?.seo?.metaDesc ||
            wordpressPrestation?.prestations?.resume ||
            "Cabinet d'expertise comptable en Alsace. Découvrez nos prestations pour professionnels et particuliers.",
         url: `https://elsass-compta.fr/prestations/${slug}`,
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function Prestation({ params }) {
   const { slug } = await params;

   const children = await getPrestationsChildren();
   const wordpressPrestation = children.find((child) => child.slug === slug);

   if (!wordpressPrestation) return notFound();

   return (
      <>
         <section className="wrapper pt-10 md:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
               <div className="grid justify-items-center space-y-4 sm:space-y-7">
                  <h1 className="text-primary text-center font-normal text-3xl sm:text-4xl md:text-5xl">
                     {wordpressPrestation?.title}
                  </h1>
                  {wordpressPrestation?.prestations?.picto?.node?.sourceUrl ? (
                     <Image
                        src={
                           wordpressPrestation.prestations.picto.node.sourceUrl
                        }
                        alt={
                           wordpressPrestation.prestations.picto.node.altText ||
                           wordpressPrestation?.title
                        }
                        width={
                           wordpressPrestation.prestations.picto.node
                              .mediaDetails?.width
                        }
                        height={
                           wordpressPrestation.prestations.picto.node
                              .mediaDetails?.height
                        }
                        className="h-16 w-auto"
                     />
                  ) : null}
                  {wordpressPrestation?.prestations?.resume ? (
                     <div className="bg-primary-light rounded-sm p-3 text-primary w-fit">
                        {wordpressPrestation.prestations.resume}
                     </div>
                  ) : null}
               </div>
               {wordpressPrestation?.featuredImage?.node?.sourceUrl ? (
                  <Image
                     src={wordpressPrestation.featuredImage.node.sourceUrl}
                     alt={
                        wordpressPrestation.featuredImage.node.altText ||
                        wordpressPrestation?.title
                     }
                     width={
                        wordpressPrestation.featuredImage.node.mediaDetails
                           ?.width || 1200
                     }
                     height={
                        wordpressPrestation.featuredImage.node.mediaDetails
                           ?.height || 800
                     }
                     className="rounded-lg object-cover h-full aspect-video"
                  />
               ) : null}
            </div>
         </section>
         <section
            className="wrapper mt-20 mb-20 prose"
            dangerouslySetInnerHTML={{
               __html: wordpressPrestation?.content || "",
            }}
         />
      </>
   );
}
