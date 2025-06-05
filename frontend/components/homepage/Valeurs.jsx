"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Valeurs({ valeurs }) {
   const sectionRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
   });

   const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
   const yCard = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
   const yButton = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

   return (
      <section ref={sectionRef} className="wrapper py-20">
         <motion.h2
            style={{ y: yTitle }}
            className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl relative z-10"
         >
            Nos valeurs
         </motion.h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
            {valeurs.map((valeur) => (
               <motion.div
                  key={valeur.id}
                  style={{ y: yCard }}
                  className="border bg-white border-neutral-400 p-3 rounded-lg shadow-md"
               >
                  <Image
                     src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${valeur?.image?.url}`}
                     alt={valeur.title}
                     width={valeur.image.width}
                     height={valeur.image.height}
                     className="rounded-lg"
                  />
                  <h3 className="text-primary font-normal text-xl md:text-2xl mt-3 mb-1">
                     {valeur.title}
                  </h3>
                  <p>{valeur.description}</p>
               </motion.div>
            ))}
         </div>
         <motion.div className="text-center md:mt-5" style={{ y: yButton }}>
            <Button asChild>
               <Link href="/cabinet">Découvrez notre équipe</Link>
            </Button>
         </motion.div>
      </section>
   );
}
