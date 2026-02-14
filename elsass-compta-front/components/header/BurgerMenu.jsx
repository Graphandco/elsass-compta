"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

export default function HeaderMenu() {
   const [open, setOpen] = useState(false);
   const toggleMenu = () => setOpen(!open);

   const navLinks = [
      {
         title: "Accueil",
         href: "/",
      },
      {
         title: "Le cabinet",
         href: "/cabinet",
      },
      {
         title: "Prestations",
         href: "/prestations",
      },
      {
         title: "Actualités",
         href: "/actualites",
      },
      {
         title: "Contact",
         href: "/contact",
      },
   ];

   return (
      <div className="sm:hidden relative z-50">
         <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2 focus:outline-none text-primary"
         >
            {open ? <X size={30} /> : <RiMenu3Fill size={30} />}
         </button>

         <AnimatePresence>
            {open && (
               <motion.nav
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-primary text-white flex flex-col items-center pt-[30%] space-y-5"
               >
                  <Image
                     src="/logo-light.png"
                     width={120}
                     height={120}
                     alt="Logo Elsass Compta"
                     className="mb-10"
                  />
                  {navLinks.map((link) => (
                     <Link
                        key={link.title}
                        href={link.href}
                        onClick={toggleMenu}
                        className="text-2xl"
                     >
                        {link.title}
                     </Link>
                  ))}
                  <div className="absolute top-7 right-7" onClick={toggleMenu}>
                     <X size={28} />
                  </div>
               </motion.nav>
            )}
         </AnimatePresence>
      </div>
   );
}
