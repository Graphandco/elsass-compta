import { marked } from "marked";
import Image from "next/image";
import FadeInOnView from "../FadeInOnView";

export default function QuiSommesNous({ cabinet }) {
   return (
      <section className="bg-primary-light">
         <div className="wrapper py-10">
            <FadeInOnView>
               <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl mb-10">
                  {cabinet.qui_sommes_nous_title}
               </h2>
            </FadeInOnView>
            <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                     cabinet.qui_sommes_nous_image.url
                  }`}
                  width={cabinet.qui_sommes_nous_image.width}
                  height={cabinet.qui_sommes_nous_image.height}
                  alt="Qui sommes-nous ?"
                  className="rounded-lg"
               />
               <div
                  className="mt-10 mb-20 prose"
                  dangerouslySetInnerHTML={{
                     __html: marked.parse(
                        cabinet.qui_sommes_nous_content || ""
                     ),
                  }}
               />
            </FadeInOnView>
         </div>
      </section>
   );
}
