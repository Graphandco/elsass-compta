import { marked } from "marked";
import Image from "next/image";
import FadeInOnView from "@/components/FadeInOnView";

export default function Outils({ outils }) {
   return (
      <section className="bg-primary-light">
         <div className="wrapper py-20">
            <FadeInOnView>
               <h2 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                  {outils.title}
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-5">
                  <div
                     className="prose"
                     dangerouslySetInnerHTML={{
                        __html: marked.parse(outils.content || ""),
                     }}
                  />
                  <div className="flex flex-col items-center gap-5 justify-between">
                     {outils.images.map((image) => (
                        <Image
                           key={image.id}
                           src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.url}`}
                           alt="outil"
                           width={image.width}
                           height={image.height}
                           className="h-16 w-auto"
                        />
                     ))}
                  </div>
               </div>
            </FadeInOnView>
         </div>
      </section>
   );
}
