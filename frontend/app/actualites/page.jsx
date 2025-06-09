import { getStrapiCollections } from "@/actions/getStrapiCollections";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import { marked } from "marked";
import Link from "next/link";

import ActuCard from "@/components/ActuCard";
import { Button } from "@/components/ui/button";
import FadeInOnView from "@/components/FadeInOnView";

export default async function Actualites() {
   const actualites = (await getStrapiCollections("actualites")).sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
   );
   const actusDescription = await getStrapiUnique({
      type: "actus-description",
   });

   return (
      <FadeInOnView className="bg-primary-light">
         <div className="wrapper py-10 md:py-20">
            <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl mb-10">
               Les actualités
            </h1>
            <div
               className="prose !max-w-full mb-5"
               dangerouslySetInnerHTML={{
                  __html: marked.parse(actusDescription.content || ""),
               }}
            />
            <Button asChild>
               <Link href="/contact">Nous contacter</Link>
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
               {actualites.map((actu) => (
                  <ActuCard key={actu.id} actu={actu} />
               ))}
            </div>
         </div>
      </FadeInOnView>
   );
}
