import Image from "next/image";
import FadeInOnView from "@/components/FadeInOnView";

export default function Outils({ outils }) {
   return (
      <section className="bg-primary-light">
         <div className="wrapper py-20">
            <FadeInOnView>
               <h2 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
                  Nos outils
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-5">
                  <div
                     className="prose"
                     dangerouslySetInnerHTML={{
                        __html: outils.tools_content || "",
                     }}
                  />
                  <div className="flex flex-col items-center gap-5 justify-between">
                     {outils?.tools_images?.nodes?.map((image, index) => (
                        <Image
                           key={image.sourceUrl || index}
                           src={image.sourceUrl}
                           alt={image.altText || "Outil"}
                           width={image.mediaDetails?.width || 200}
                           height={image.mediaDetails?.height || 80}
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
