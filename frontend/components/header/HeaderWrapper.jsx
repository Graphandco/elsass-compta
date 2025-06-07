import Image from "next/image";
import Link from "next/link";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./BurgerMenu";

export default async function Header() {
   const prestations = (await getStrapiCollections("prestations")).sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
   );
   return (
      <header className="wrapper flex justify-between items-center py-2 sm:py-4 border-b border-black/5 z-50">
         <Link href="/">
            <Image
               src="/logo.svg"
               alt="Logo"
               width={90}
               height={90}
               className="w-16 h-16 sm:w-24 sm:h-24"
            />
         </Link>
         <HeaderNav prestations={prestations} />
         <BurgerMenu />
      </header>
   );
}
