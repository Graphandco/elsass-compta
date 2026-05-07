import { marked } from "marked";
import Image from "next/image";
import FadeInOnView from "@/components/FadeInOnView";

export default function ContactText({ contact }) {
   return (
      <FadeInOnView className="space-y-10">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl mb-10">
            {contact.title}
         </h1>
         <div
            className="text-lg prose"
            dangerouslySetInnerHTML={{
               __html: contact.content,
            }}
         />
         <Image
            src={contact.featuredImage.node.sourceUrl}
            alt="Contact"
            width={contact.featuredImage.node.mediaDetails.width}
            height={contact.featuredImage.node.mediaDetails.height}
            className="w-full h-auto rounded-lg"
         />
      </FadeInOnView>
   );
}
