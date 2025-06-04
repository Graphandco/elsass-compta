import Image from "next/image";
import Link from "next/link";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import HeaderNav from "./HeaderNav";

export default async function Header() {
   const prestations = await getStrapiCollections("prestations");

   return (
      <header className="wrapper flex justify-between items-center py-5 mb-10">
         <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
         </Link>
         <HeaderNav prestations={prestations} />
      </header>
   );
}
