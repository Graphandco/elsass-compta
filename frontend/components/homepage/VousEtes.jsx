"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const PHRASES = [
   "Une TPE ou une PME locale",
   "Un entrepreneur Individuel",
   "Un professionnel de Santé",
   "Un particulier",
];

export default function VanishText() {
   return (
      <section className="bg-primary px-4 py-24 text-center md:py-36 overflow-hidden">
         <h2 className="text-3xl font-medium text-secondary sm:text-4xl md:text-5xl lg:text-6xl">
            Vous êtes
            <AnimatedText phrases={PHRASES} />
            <Button asChild variant="secondary" size="lg" className="mt-10">
               <Link href="/prestations">Découvrez nos services</Link>
            </Button>
         </h2>
      </section>
   );
}

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 2;

const AnimatedText = ({ phrases }) => {
   const [active, setActive] = useState(0);
   
   // Mémoriser la longueur pour éviter les recalculs
   const phrasesLength = useMemo(() => phrases.length, [phrases.length]);

   useEffect(() => {
      const intervalRef = setInterval(() => {
         setActive((pv) => (pv + 1) % phrasesLength);
      }, WAIT_TIME);

      return () => clearInterval(intervalRef);
   }, [phrasesLength]);

   return (
      <div className="relative mb-14 mt-2 w-full">
         {phrases.map((phrase) => {
            const isActive = phrases[active] === phrase;
            return (
               <motion.div
                  key={phrase}
                  initial={false}
                  animate={isActive ? "active" : "inactive"}
                  style={{
                     x: "-50%",
                  }}
                  variants={{
                     active: {
                        opacity: 1,
                        scale: 1,
                     },
                     inactive: {
                        opacity: 0,
                        scale: 0,
                     },
                  }}
                  className="absolute left-1/2 top-0 w-full text-white"
               >
                  {phrase}
               </motion.div>
            );
         })}
      </div>
   );
};
