import { getStrapiCollections } from "@/actions/getStrapiCollections";
import PrestationCard from "@/components/homepage/PrestationCard";

export default async function Prestations() {
   const prestations = (await getStrapiCollections("prestations")).reverse();

   return (
      <section className="wrapper pb-20">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            Nos prestations
         </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14">
            {prestations.map((prestation) => (
               <PrestationCard
                  key={prestation.id}
                  prestation={prestation}
                  bg="bg-primary-light"
               />
            ))}
         </div>
      </section>
   );
}
