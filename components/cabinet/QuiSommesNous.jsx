import Image from "next/image";
import FadeInOnView from "../FadeInOnView";

export default function QuiSommesNous({ cabinet }) {
   return (
      <section className="bg-primary-light">
         <div className="wrapper py-10">
            <FadeInOnView>
               <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl mb-10">
                  Qui sommes-nous ?
               </h2>
            </FadeInOnView>
            <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-20">
               <Image
                  src={cabinet.who_we_are_image?.node?.sourceUrl}
                  width={cabinet.who_we_are_image?.node?.mediaDetails?.width}
                  height={cabinet.who_we_are_image?.node?.mediaDetails?.height}
                  alt={cabinet.who_we_are_image?.node?.altText}
                  className="rounded-lg"
               />
               <div
                  className="py-10 sm:py-0 prose"
                  dangerouslySetInnerHTML={{
                     __html: cabinet.who_we_are_content || "",
                  }}
               />
            </FadeInOnView>
         </div>
      </section>
   );
}
