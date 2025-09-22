import { getStrapiUnique } from "@/actions/getStrapiUnique";
import QuiSommesNous from "@/components/cabinet/QuiSommesNous";
import NosClients from "@/components/cabinet/NosClients";
import CabinetHeader from "@/components/cabinet/CabinetHeader";

export async function generateMetadata() {
   const cabinet = await getStrapiUnique({ type: "cabinet" });
   const cleanDescription = (cabinet.meta_description || "")
      .replace(/[#*]/g, "")
      .slice(0, 160);
   
   return {
      title: cabinet.meta_title || "Notre cabinet",
      description: cleanDescription,
      openGraph: {
         title: cabinet.meta_title || "Notre cabinet | Elsass Compta",
         description: cleanDescription,
         url: "https://elsass-compta.fr/cabinet",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function Cabinet() {
   const cabinet = await getStrapiUnique({ type: "cabinet" });

   return (
      <div className="py-10 md:py-20">
         <CabinetHeader cabinet={cabinet} />
         <QuiSommesNous cabinet={cabinet} />
         <NosClients cabinet={cabinet} />
      </div>
   );
}
