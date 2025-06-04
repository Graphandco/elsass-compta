"use client";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav({ prestations }) {
   return (
      <nav className="hidden md:block">
         <ul className="flex gap-5">
            <li>
               <Link className="text-secondary" href="/">
                  Accueil
               </Link>
            </li>
            <li>
               <Link href="/">Le cabinet</Link>
            </li>
            <Dropdown prestations={prestations} />
            <li>
               <Link href="/">Actualités</Link>
            </li>
            <li>
               <Link href="/">Contact</Link>
            </li>
         </ul>
      </nav>
   );
}
