"use client";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav({ prestations }) {
   const pathname = usePathname();

   return (
      <nav className="hidden md:block">
         <ul className="flex gap-5 font-normal">
            <li>
               <Link
                  className={`hover:text-secondary ${
                     pathname === "/" && "text-secondary"
                  }`}
                  href="/"
               >
                  Accueil
               </Link>
            </li>
            <li>
               <Link
                  className={`hover:text-secondary ${
                     pathname === "cabinet" && "text-secondary"
                  }`}
                  href="/cabinet"
               >
                  Le cabinet
               </Link>
            </li>
            <Dropdown prestations={prestations} pathname={pathname} />
            <li>
               <Link
                  className={`relative hover:text-secondary ${
                     pathname === "/actualites" ||
                     pathname.startsWith("/actualites" + "/")
                        ? "text-secondary"
                        : "text-foreground"
                  }`}
                  href="/actualites"
               >
                  Actualités
               </Link>
            </li>
            <li>
               <Link
                  className={`hover:text-secondary ${
                     pathname === "/contact" && "text-secondary"
                  }`}
                  href="/contact"
               >
                  Contact
               </Link>
            </li>
         </ul>
      </nav>
   );
}
