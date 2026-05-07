import Image from "next/image";
import FadeInOnView from "../FadeInOnView";

export default function NosClients({ cabinet }) {
   return (
      <section className="wrapper py-10 md:py-20">
         <FadeInOnView>
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl mb-10">
               Nos clients
            </h2>
         </FadeInOnView>
         <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-20">
            <div
               className="sm:mt-10 sm:mb-20 prose"
               dangerouslySetInnerHTML={{
                  __html: cabinet.our_customers_content || "",
               }}
            />
            <Image
               src={cabinet.our_customers_image?.node?.sourceUrl}
               width={cabinet.our_customers_image?.node?.mediaDetails?.width}
               height={cabinet.our_customers_image?.node?.mediaDetails?.height}
               alt={cabinet.our_customers_image?.node?.altText}
               className="rounded-lg"
            />
         </FadeInOnView>
      </section>
   );
}
