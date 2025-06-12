import { marked } from "marked";
import Image from "next/image";
import FadeInOnView from "../FadeInOnView";

export default function NosClients({ cabinet }) {
   return (
      <section className="wrapper py-10 md:py-20">
         <FadeInOnView>
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl mb-10">
               {cabinet.clients_title}
            </h2>
         </FadeInOnView>
         <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-20">
            <div
               className="sm:mt-10 sm:mb-20 prose"
               dangerouslySetInnerHTML={{
                  __html: marked.parse(cabinet.clients_content || ""),
               }}
            />
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  cabinet.clients_image.url
               }`}
               width={cabinet.clients_image.width}
               height={cabinet.clients_image.height}
               alt="Nos clients"
               className="rounded-lg"
            />
         </FadeInOnView>
      </section>
   );
}
