import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";
import PrestationHeader from "@/components/prestations/PrestationHeader";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
   const { slug } = await params;
   const prestation = await getStrapiCollectionBySlug("prestations", slug);

   if (!prestation) {
      return {
         title: "Prestation non trouvée",
         description: "Cette prestation n'existe pas ou n'est plus disponible.",
      };
   }

   return {
      title: prestation.meta_title || prestation.title || "Prestation",
      description: prestation.meta_description || prestation.description || "",
      openGraph: {
         title: prestation.meta_title || prestation.title,
         description: prestation.meta_description || prestation.description,
         url: `https://elsass-compta.fr/prestations/${slug}`,
         type: "article",
         siteName: "Elsass Compta",
      },
   };
}

export default async function Prestation({ params }) {
   const { slug } = await params;

   const prestation = await getStrapiCollectionBySlug("prestations", slug);

   if (!prestation) return notFound();

   return (
      <>
         <section className="wrapper pt-10 md:pt-20">
            <PrestationHeader prestation={prestation} />
         </section>
         <section
            className="wrapper mt-20 mb-20 prose"
            dangerouslySetInnerHTML={{
               __html: marked.parse(prestation.content || ""),
            }}
         />
      </>
   );
}
