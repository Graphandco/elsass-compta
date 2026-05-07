import { getWordpressContent } from "@/actions/getWordpressContent";
import { HOMEPAGE_CONTENT_QUERY } from "@/actions/queries/homepageContentQuery";

import Hero from "@/components/homepage/Hero";
import Prestations from "@/components/homepage/Prestations";
import Valeurs from "@/components/homepage/Valeurs";
import VousEtes from "@/components/homepage/VousEtes";

async function getHomePageData() {
   return getWordpressContent({
      query: HOMEPAGE_CONTENT_QUERY,
      variables: { id: 2 },
      rootField: "page",
   });
}

export async function generateMetadata() {
   const home = await getHomePageData();

   return {
      title:
         home.seo?.title ||
         "Elsass Compta - Cabinet d'expertise comptable en Alsace",
      description:
         home.seo?.metaDesc ||
         "Cabinet d'expertise comptable en Alsace. Accompagnement des professionnels et des particuliers.",
      openGraph: {
         title:
            home.seo?.title ||
            "Elsass Compta - Cabinet d'expertise comptable en Alsace",
         description:
            home.seo?.metaDesc ||
            "Cabinet d'expertise comptable en Alsace. Accompagnement des professionnels et des particuliers.",
         url: "https://elsass-compta.fr",
         type: "website",
         siteName: "Elsass Compta",
      },
   };
}

export default async function Home() {
   const pageData = await getHomePageData();

   return (
      <>
         <Hero pageData={pageData.homepage} />
         <Prestations title={pageData.title} description={pageData.content} />
         <VousEtes />
         <Valeurs valeurs={pageData.homepage.valeurs} />
      </>
   );
}
