import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero({
   lead1,
   lead2,
   description,
   image1,
   image2,
   descriptionLast,
}) {
   return (
      <div className="wrapper">
         <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10">
            <div className="text-6xl ">
               <span className="text-secondary">{lead1} </span>
               <span className="text-primary">{lead2}</span>
            </div>
            <div className="">
               <p className="text-lg">{description}</p>
               <div className="flex gap-5 mt-5">
                  <Button>Nous contacter</Button>
                  <Button variant="outline">Voir nos prestations</Button>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-[2fr_1fr] gap-10 mt-16">
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image1?.url}`}
               alt="Hero"
               width={image1.width}
               height={image1.height}
               className="rounded-lg"
            />
            <div>
               <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image2?.url}`}
                  alt="Hero 2"
                  width={image2.width}
                  height={image2.height}
                  className="rounded-lg object-cover"
               />
               <p className="mt-3">{descriptionLast}</p>
            </div>
         </div>
      </div>
   );
}
