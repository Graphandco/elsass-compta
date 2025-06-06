import Image from "next/image";
import Link from "next/link";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import HeaderNav from "./HeaderNav";

export default async function Header() {
   const prestations = (await getStrapiCollections("prestations")).sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
   );
   return (
      <header className="wrapper flex justify-between items-center py-5 border-b border-black/5 z-10">
         <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={90} height={90} />
         </Link>
         <HeaderNav prestations={prestations} />
      </header>
   );
}
