"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Hook personnalisé pour détecter la taille de l'écran
const useResponsiveAmount = (baseAmount = 0.4, responsiveAmounts = {}) => {
   const [screenSize, setScreenSize] = useState("lg");

   useEffect(() => {
      const updateScreenSize = () => {
         const width = window.innerWidth;
         if (width < 640) {
            setScreenSize("sm");
         } else if (width < 768) {
            setScreenSize("md");
         } else if (width < 1024) {
            setScreenSize("lg");
         } else {
            setScreenSize("xl");
         }
      };

      // Initialiser la taille
      updateScreenSize();

      // Écouter les changements de taille
      window.addEventListener("resize", updateScreenSize);

      return () => window.removeEventListener("resize", updateScreenSize);
   }, []);

   // Retourner la valeur appropriée selon la taille d'écran
   return responsiveAmounts[screenSize] || baseAmount;
};

const FadeInOnView = ({
   children,
   delay = 0,
   amount = 0.4,
   responsiveAmount = null, // Nouvel prop pour les valeurs responsives
   stagger = 0.15,
   once = true,
   className = "",
}) => {
   const ref = useRef(null);

   // Utiliser le hook responsif si responsiveAmount est fourni
   const dynamicAmount = useResponsiveAmount(
      amount,
      responsiveAmount || {
         sm: 0.2, // Mobile: déclenchement plus précoce
         md: 0.3, // Tablette
         lg: 0.4, // Desktop
         xl: 0.5, // Large desktop
      }
   );

   const isInView = useInView(ref, { amount: dynamicAmount, once });

   return (
      <motion.div
         ref={ref}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         variants={{
            hidden: {},
            visible: {
               transition: {
                  staggerChildren: stagger,
                  delayChildren: delay,
               },
            },
         }}
         className={className}
      >
         {/* Chaque enfant recevra l'animation fade+blur+slide */}
         {Array.isArray(children) ? (
            children.map((child, i) => (
               <motion.div
                  key={i}
                  variants={{
                     hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                     visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                           duration: 0.5,
                           ease: "easeOut",
                        },
                     },
                  }}
               >
                  {child}
               </motion.div>
            ))
         ) : (
            <motion.div
               variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: {
                     opacity: 1,
                     y: 0,
                     filter: "blur(0px)",
                     transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay,
                     },
                  },
               }}
            >
               {children}
            </motion.div>
         )}
      </motion.div>
   );
};

export default FadeInOnView;
