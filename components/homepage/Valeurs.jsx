"use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInOnView from "../FadeInOnView";

export default function Valeurs({ valeurs }) {
   return (
      <section className="bg-primary-light">
         <div className="wrapper py-20">
            <FadeInOnView>
               <h2 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl relative z-10">
                  Nos valeurs
               </h2>
            </FadeInOnView>

            <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">
               {valeurs.map((valeur) => (
                  <div
                     key={valeur.id}
                     className="h-full bg-white p-3 rounded-lg shadow-md"
                  >
                     <Image
                        src={valeur?.image?.node?.sourceUrl}
                        alt={valeur.title}
                        width={valeur.image.node?.mediaDetails?.width}
                        height={valeur.image.node?.mediaDetails?.height}
                        className="rounded-lg"
                     />
                     <h3 className="text-primary font-normal text-lg md:text-xl mt-3 mb-1">
                        {valeur.title}
                     </h3>
                     <p className="text-sm">{valeur.description}</p>
                  </div>
               ))}
            </FadeInOnView>
            <FadeInOnView className="text-center mt-10">
               <Button asChild>
                  <Link href="/cabinet">Découvrez notre équipe</Link>
               </Button>
            </FadeInOnView>
         </div>
      </section>
   );
}
