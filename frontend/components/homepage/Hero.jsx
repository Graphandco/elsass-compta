"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FadeInOnView from "../FadeInOnView";
import { useEffect, useState } from "react";

export default function Hero({
   lead1,
   lead2,
   description,
   image1,
   image2,
   descriptionLast,
}) {
   const [headerHeight, setHeaderHeight] = useState(0);
   useEffect(() => {
      const header = document.getElementById("header");
      if (header) {
         setHeaderHeight(header.offsetHeight);
      }
   }, []);
   return (
      <section
         className="wrapper pt-10 sm:pt-15"
         style={{
            minHeight: `calc(100vh - ${headerHeight}px)`,
         }}
      >
         <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 sm:gap-10">
            <FadeInOnView>
               <div className="text-4xl sm:text-5xl md:text-6xl font-normal">
                  <span className="text-secondary font-semibold">{lead1} </span>
                  <span className="text-primary">{lead2}</span>
               </div>
            </FadeInOnView>
            <FadeInOnView>
               <p className="text-lg">{description}</p>
               <div className="flex gap-5 mt-5">
                  <Button asChild>
                     <Link href="/contact">Nous contacter</Link>
                  </Button>
                  <Button asChild variant="outline">
                     <Link href="/prestations">Voir nos prestations</Link>
                  </Button>
               </div>
            </FadeInOnView>
         </div>
         <FadeInOnView className="grid md:grid-cols-[2fr_1fr] gap-10 mt-16">
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
         </FadeInOnView>
      </section>
   );
}
