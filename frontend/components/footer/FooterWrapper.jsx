import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="relative bg-black text-primary-very-light pt-10 sm:pt-15 md:pt-20 pb-7 overflow-hidden">
         <Image
            src="/logo-jaune.png"
            alt="Logo"
            width={501}
            height={296}
            className="absolute -bottom-10 -right-10 opacity-10 rotate-12 pointer-events-none"
         />
         <div className="wrapper grid sm:grid-cols-2 md:grid-cols-[4fr_3fr_5fr] gap-10 sm:gap-20 relative z-10 text-center sm:text-left justify-items-center sm:justify-items-start">
            <div className="text-xl sm:text-2xl font-normal text-white">
               Votre expert-comptable de confiance au cœur de l'Alsace
               <Image
                  src="/logo-alsace.webp"
                  alt="Logo"
                  width={100}
                  height={80}
                  className="w-8 inline-block align-middle"
               />
            </div>
            {/* <Link href="/" className="mt-5">
                  <Image
                     src="/logo-blanc.png"
                     alt="Logo"
                     width={100}
                     height={100}
                     className="mx-auto sm:mx-0"
                  />
               </Link> */}
            {/* Nous contacter */}
            <div className="text-neutral-400 text-center sm:text-left">
               <div className="text-xl font-normal text-white mb-3">
                  Nous contacter
               </div>
               <div>Cité de l'Habitat Lot 40</div>
               <div>68460 Lutterbach</div>
               <a
                  href="tel:0389075600"
                  className="hover:text-secondary flex items-center gap-2 justify-center sm:justify-start"
               >
                  <Phone size={16} />  03 89 07 56 00
               </a>
               <a
                  href="mailto:contact@elsass-compta.fr"
                  className="hover:text-secondary flex items-center gap-2 justify-center sm:justify-start"
               >
                  <Mail size={16} /> contact@elsass-compta.fr
               </a>
            </div>
            {/* Horaires */}
            <div className="text-neutral-400 text-center sm:text-left sm:col-span-2 md:col-span-1">
               <div className="text-xl font-normal text-white mb-3">
                  Horaires
               </div>
               <div>
                  <div className="grid grid-cols-[70px_auto] gap-2">
                     <strong className="text-white">Lundi: </strong>
                     <div>
                        8<sup>h</sup>30-12<sup>h</sup>00 et 14
                        <sup>h</sup>00-18<sup>h</sup>00
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-[70px_auto] gap-2">
                     <strong className="text-white">Mardi: </strong>
                     <div>
                        8<sup>h</sup>30-12<sup>h</sup>00 et sur RDV l'après-midi
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-[70px_auto] gap-2">
                     <strong className="text-white">Mercredi: </strong>
                     <div>
                        8<sup>h</sup>30-12<sup>h</sup>00 et 14
                        <sup>h</sup>00-18<sup>h</sup>00
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-[70px_auto] gap-2">
                     <strong className="text-white">Jeudi: </strong>
                     <div>
                        8<sup>h</sup>30-12<sup>h</sup>00 et 14
                        <sup>h</sup>00-18<sup>h</sup>00
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-[70px_auto] gap-2">
                     <strong className="text-white">Vendredi: </strong>
                     <div>
                        8<sup>h</sup>30-12<sup>h</sup>00 et 14
                        <sup>h</sup>00-18<sup>h</sup>00
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Liens */}
         <div className=" text-neutral-400 text-sm wrapper flex justify-center sm:justify-end items-center gap-x-3 gap-y-1 flex-wrap mt-8">
            <Link
               className="block hover:text-secondary"
               href="/mentions-legales"
            >
               Mentions légales
            </Link>
            <Link
               className="block hover:text-secondary"
               href="/politique-de-confidentialite"
            >
               Politique de confidentialité
            </Link>
            <Link
               href="https://graphandco.com"
               target="blank"
               className="flex items-center gap-1 hover:text-secondary"
            >
               <Image
                  src="/logo-graphandco.svg"
                  width={20}
                  height={20}
                  alt="Graph and Co"
               />{" "}
               Réalisation Graph and Co
            </Link>
         </div>
      </footer>
   );
}
