import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
   lead1,
   lead2,
   description,
   image1,
   image2,
   descriptionLast,
}) {
   return (
      <section className="wrapper mt-5">
         <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10">
            <div className="text-4xl sm:text-5xl md:text-6xl font-normal">
               <span className="text-secondary">{lead1} </span>
               <span className="text-primary">{lead2}</span>
            </div>
            <div className="">
               <p className="text-lg">{description}</p>
               <div className="flex gap-5 mt-5">
                  <Button asChild>
                     <Link href="/contact">Nous contacter</Link>
                  </Button>
                  <Button asChild variant="outline">
                     <Link href="/prestations">Voir nos prestations</Link>
                  </Button>
               </div>
            </div>
         </div>
         <div className="grid md:grid-cols-[2fr_1fr] gap-10 mt-16">
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image1?.url}`}
               alt="Hero"
               width={image1.width}
               height={image1.height}
               className="rounded-lg"
            />
            <div className="flex gap-5 md:block">
               <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image2?.url}`}
                  alt="Hero 2"
                  width={image2.width}
                  height={image2.height}
                  className="hidden sm:block rounded-lg object-cover"
               />
               <p className="mt-3 sm:mt-0 md:mt-3">{descriptionLast}</p>
            </div>
         </div>
      </section>
   );
}
