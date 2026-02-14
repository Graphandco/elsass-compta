import { marked } from "marked";
import Image from "next/image";
import FadeInOnView from "@/components/FadeInOnView";

export default function ContactText({ contact }) {
   return (
      <FadeInOnView className="space-y-10">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl mb-10">
            Nous contacter
         </h1>
         <div
            className="text-lg prose"
            dangerouslySetInnerHTML={{
               __html: marked.parse(contact.content || ""),
            }}
         />
         <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contact.image?.url}`}
            alt="Contact"
            width={contact.image?.width}
            height={contact.image?.height}
            className="w-full h-auto rounded-lg"
         />
      </FadeInOnView>
   );
}
