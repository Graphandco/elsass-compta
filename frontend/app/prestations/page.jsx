import { getStrapiCollections } from "@/actions/getStrapiCollections";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import FadeInOnView from "@/components/FadeInOnView";
import PrestationCard from "@/components/homepage/PrestationCard";
import Outils from "@/components/prestations/Outils";

export default async function Prestations() {
   const prestations = (await getStrapiCollections("prestations")).sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
   );
   const homeFields = await getStrapiUnique({ type: "homepage" });
   const { home_presta_description } = homeFields;
   const outils = await getStrapiUnique({ type: "outil" });

   return (
      <>
         <section className="wrapper pt-10 md:pt-20 pb-20">
            <FadeInOnView>
               <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                  Nos prestations
               </h1>
               <p className="pt-5">{home_presta_description}</p>
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
         <Outils outils={outils} />
      </>
   );
}
