"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";

// Hook personnalisé pour détecter la taille de l'écran
const useResponsiveAmount = (baseAmount = 0.4, responsiveAmounts = {}) => {
   const [screenSize, setScreenSize] = useState("lg");

   useEffect(() => {
      const updateScreenSize = () => {
         const width = window.innerWidth;
         let newSize = "lg";
         if (width < 640) {
            newSize = "sm";
         } else if (width < 768) {
            newSize = "md";
         } else if (width < 1024) {
            newSize = "lg";
         } else {
            newSize = "xl";
         }
         // Ne mettre à jour que si la taille a vraiment changé
         setScreenSize((prev) => (prev !== newSize ? newSize : prev));
      };

      // Initialiser la taille
      updateScreenSize();

      // Debounce le resize pour éviter trop de mises à jour
      let timeoutId;
      const handleResize = () => {
         clearTimeout(timeoutId);
         timeoutId = setTimeout(updateScreenSize, 150);
      };

      // Écouter les changements de taille
      window.addEventListener("resize", handleResize);

      return () => {
         clearTimeout(timeoutId);
         window.removeEventListener("resize", handleResize);
      };
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
