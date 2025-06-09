import { getStrapiUnique } from "@/actions/getStrapiUnique";
import { getStrapiCollections } from "@/actions/getStrapiCollections";

import Hero from "@/components/homepage/Hero";
import Prestations from "@/components/homepage/Prestations";
import Valeurs from "@/components/homepage/Valeurs";
import VousEtes from "@/components/homepage/VousEtes";

export async function generateMetadata() {
   const home = await getStrapiUnique({ type: "homepage" });
   return {
      title: home.meta_title || "Accueil",
      description: (home.meta_description || "")
         .replace(/[#*]/g, "")
         .slice(0, 160),
   };
}

export default async function Home() {
   const home = await getStrapiUnique({ type: "homepage" });
   const {
      hero_lead1,
      hero_lead2,
      hero_lead_description,
      hero_image1,
      hero_image2,
      hero_lead_description_last,
      home_presta_title,
      home_presta_description,
   } = home;

   const valeurs = await getStrapiCollections("valeurs");

   return (
      <div>
         <Hero
            lead1={hero_lead1}
            lead2={hero_lead2}
            description={hero_lead_description}
            image1={hero_image1}
            image2={hero_image2}
            descriptionLast={hero_lead_description_last}
         />
         <Prestations
            title={home_presta_title}
            description={home_presta_description}
         />
         <VousEtes />
         <Valeurs valeurs={valeurs} />
      </div>
   );
}
