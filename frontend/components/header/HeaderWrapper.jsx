import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { getStrapiCollections } from "@/actions/getStrapiCollections";

export default async function HeaderWrapper() {
   const prestations = await getStrapiCollections("prestations");

   return (
      <header className="wrapper flex justify-between items-center py-5 mb-10">
         <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
         </Link>
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
      </header>
   );
}
