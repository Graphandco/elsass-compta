import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-black text-primary-very-light py-10">
         <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            <div className="">
               <div className="text-xl font-normal text-white mb-3">
                  Votre expert-comptable de confiance au cœur de l’Alsace.
               </div>
               <Link href="/" className="mt-5">
                  <Image
                     src="/logo-blanc.png"
                     alt="Logo"
                     width={100}
                     height={100}
                     className=""
                  />
               </Link>
            </div>
            {/* Nous contacter */}
            <div className="text-neutral-400">
               <div className="text-xl font-normal text-white mb-3">
                  Nous contacter
               </div>
               <div>Cité de l’Habitat Lot 40</div>
               <div>68460 Lutterbach</div>
               <a
                  href="tel:0618774811"
                  className="hover:text-secondary flex items-center gap-2"
               >
                  <Phone size={16} /> 06 18 77 48 11
               </a>
               <a
                  href="mailto:contact@elsass-compta.fr"
                  className="hover:text-secondary flex items-center gap-2"
               >
                  <Mail size={16} /> contact@elsass-compta.fr
               </a>
            </div>
            {/* Liens */}
            <div className=" text-neutral-400">
               <div className="text-xl font-normal text-white mb-3">Liens</div>
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
                  className="flex items-center gap-2 hover:text-secondary"
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
         </div>
      </footer>
   );
}
