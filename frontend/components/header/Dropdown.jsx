"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ prestations }) {
   const [open, setOpen] = useState(false);

   console.log(prestations);

   return (
      <li
         onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}
         className="relative "
      >
         <a href="#">Prestations</a>
         <AnimatePresence>
            {open && (
               <motion.nav
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: "-50%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-1/2 top-7 text-sm rounded-sm border-black/5 p-3 shadow-sm bg-white"
               >
                  {prestations.map((presta) => (
                     <Link
                        key={presta.id}
                        href={`/prestations/${presta.slug}`}
                        className="block whitespace-nowrap my-1 text-primary hover:text-secondary"
                     >
                        {presta.title}
                     </Link>
                  ))}
               </motion.nav>
            )}
         </AnimatePresence>
      </li>
   );
}
