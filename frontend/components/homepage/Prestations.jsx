import { getStrapiCollections } from "@/actions/getStrapiCollections";
import PrestationCard from "@/components/homepage/PrestationCard";

import FadeInOnView from "@/components/FadeInOnView";

export default async function Prestations({ title, description }) {
   const prestations = (await getStrapiCollections("prestations")).sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
   );
   return (
      <div className="bg-primary-light mt-10 sm:mt-0 py-10 md:py-20">
         <div className="wrapper">
            <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-normal">
                  {title}
               </h2>
               <p className="">{description}</p>
            </FadeInOnView>
            <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14">
               {prestations.map((prestation) => (
                  <PrestationCard key={prestation.id} prestation={prestation} />
               ))}
            </FadeInOnView>
         </div>
      </div>
   );
}
