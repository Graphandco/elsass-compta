import { getWordpressContent } from "@/actions/getWordpressContent";
import { PRESTATIONS_CHILDREN_QUERY } from "@/actions/queries/prestationsChildrenQuery";
import PrestationCard from "@/components/homepage/PrestationCard";

import FadeInOnView from "@/components/FadeInOnView";

export default async function Prestations({ title, description }) {
   const data = await getWordpressContent({
      query: PRESTATIONS_CHILDREN_QUERY,
      variables: { id: 43 },
      rootField: "page",
   });

   const prestations = [...(data?.children?.nodes || [])]
      .sort((a, b) => (a?.databaseId || 0) - (b?.databaseId || 0))
      .map((child) => ({
         id: child.databaseId,
         slug: child.slug,
         title: child.title,
         short_description: child?.prestations?.resume || "",
         icon: {
            url: child?.prestations?.picto?.node?.sourceUrl || "",
            width: child?.prestations?.picto?.node?.mediaDetails?.width || 80,
            height:
               child?.prestations?.picto?.node?.mediaDetails?.height || 80,
         },
      }));

   return (
      <section
         id="prestations"
         className="bg-primary-light mt-10 sm:mt-0 py-10 md:py-20"
      >
         <div className="wrapper">
            <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
               <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-normal">
                  {title}
               </h1>
               <p
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: description }}
               />
            </FadeInOnView>
            <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14">
               {prestations.map((prestation) => (
                  <PrestationCard key={prestation.id} prestation={prestation} />
               ))}
            </FadeInOnView>
         </div>
      </section>
   );
}
