import FadeInOnView from "@/components/FadeInOnView";
import PrestationCard from "@/components/homepage/PrestationCard";
import Outils from "@/components/prestations/Outils";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { PRESTATIONS_CONTENT_QUERY } from "@/actions/queries/prestationsContentQuery";
import { PRESTATIONS_CHILDREN_QUERY } from "@/actions/queries/prestationsChildrenQuery";

export async function generateMetadata() {
   const prestations = await getWordpressContent({
      query: PRESTATIONS_CONTENT_QUERY,
      variables: { id: 43 },
      rootField: "page",
   });
   return {
      title:
         prestations.seo.title ||
         "Elsass Compta - Cabinet d'expertise comptable en Alsace",
      description:
         prestations.seo.metaDesc ||
         "Cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
      openGraph: {
         title:
            prestations.seo.title ||
            "Elsass Compta - Cabinet d'expertise comptable en Alsace",
         description:
            prestations.seo.metaDesc ||
            "Cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
         url: "https://elsass-compta.fr/prestations",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

async function getPrestationsPageData() {
   return getWordpressContent({
      query: PRESTATIONS_CONTENT_QUERY,
      variables: { id: 43 },
      rootField: "page",
   });
}

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

export default async function Prestations() {
   const [pageData, children] = await Promise.all([
      getPrestationsPageData(),
      getPrestationsChildren(),
   ]);

   const prestations = children.map((child) => ({
      id: child.databaseId,
      slug: child.slug,
      title: child.title,
      short_description: child?.prestations?.resume || "",
      icon: {
         url: child?.prestations?.picto?.node?.sourceUrl || "",
         width: child?.prestations?.picto?.node?.mediaDetails?.width || 80,
         height: child?.prestations?.picto?.node?.mediaDetails?.height || 80,
      },
   }));

   return (
      <>
         <section className="wrapper pt-10 md:pt-20 pb-20">
            <FadeInOnView>
               <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                  {pageData.title}
               </h1>
               <div
                  className="pt-5"
                  dangerouslySetInnerHTML={{ __html: pageData.content }}
               />
            </FadeInOnView>
            <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14">
               {prestations.map((prestation) => (
                  <PrestationCard
                     key={prestation.id}
                     prestation={prestation}
                     bg="bg-primary-light"
                  />
               ))}
            </FadeInOnView>
         </section>
         <Outils outils={pageData.outils} />
      </>
   );
}
