import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-primary text-primary-very-light py-10">
         <div className="wrapper-small grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
            <div className="">
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
            <Link href="/" className="hidden md:block ">
               <Image
                  src="/logo-blanc.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="self-center justify-self-center"
               />
            </Link>
            <div className="sm:justify-self-end sm:self-start grid mt-5 sm:mt-0">
               <div className="text-xl font-normal text-white mb-3">Liens</div>
               <Link href="/mentions-legales">Mentions légales</Link>
               <Link href="/politique-confidentialite">
                  Politique de confidentialité
               </Link>
               <Link href="https://graphandco.com" target="blank">
                  Réalisation Graph and Co
               </Link>
            </div>
         </div>
      </footer>
   );
}
