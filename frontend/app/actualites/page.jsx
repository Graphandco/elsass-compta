import { getStrapiCollections } from "@/actions/getStrapiCollections";
import ActuCard from "@/components/ActuCard";

export default async function Actualites() {
   const actualites = (await getStrapiCollections("actualites")).sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
   );

   return (
      <div className="bg-primary-light">
         <div className="wrapper py-10">
            <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl mb-10">
               Les actualités
            </h1>
            <div className="prose">
               <span className="text-primary font-normal">
                  Découvrez ici nos dernières actualités, telles que :
               </span>
               <ul>
                  <li>Des articles sur les actualités fiscales et sociales</li>
                  <li>Des conseils pratiques pour les entrepreneurs</li>
                  <li>Des mises à jour légales et réglementaires</li>
               </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
               {actualites.map((actu) => (
                  <ActuCard key={actu.id} actu={actu} />
               ))}
            </div>
         </div>
      </div>
   );
}
