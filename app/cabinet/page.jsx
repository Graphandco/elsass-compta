import { getWordpressContent } from "@/actions/getWordpressContent";
import { CABINET_CONTENT_QUERY } from "@/actions/queries/cabinetContentQuery";
import QuiSommesNous from "@/components/cabinet/QuiSommesNous";
import NosClients from "@/components/cabinet/NosClients";
import CabinetHeader from "@/components/cabinet/CabinetHeader";

export async function generateMetadata() {
   const cabinet = await getWordpressContent({
      query: CABINET_CONTENT_QUERY,
      variables: { id: 33 },
      rootField: "page",
   });
   return {
      title:
         cabinet.seo.title ||
         "Elsass Compta - Cabinet d'expertise comptable en Alsace",
      description:
         cabinet.seo.metaDesc ||
         "Cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
      openGraph: {
         title:
            cabinet.seo.title ||
            "Elsass Compta - Cabinet d'expertise comptable en Alsace",
         description:
            cabinet.seo.metaDesc ||
            "Cabinet d'expertise comptable en Alsace. Informations légales et réglementaires.",
         url: "https://elsass-compta.fr/cabinet",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

async function getCabinetPageData() {
   return getWordpressContent({
      query: CABINET_CONTENT_QUERY,
      variables: { id: 33 },
      rootField: "page",
   });
}

export default async function Cabinet() {
   const pageData = await getCabinetPageData();

   return (
      <div className="py-10 md:py-20">
         <CabinetHeader cabinet={pageData} />
         <QuiSommesNous cabinet={pageData.cabinet} />
         <NosClients cabinet={pageData.cabinet} />
      </div>
   );
}
