import Image from "next/image";
import Link from "next/link";

export default function Header() {
   return (
      <header className="wrapper flex justify-between items-center py-5 mb-10">
         <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
         </Link>
         <nav className="hidden md:flex gap-5">
            <Link className="text-secondary" href="/">
               Accueil
            </Link>
            <Link href="/">Contact</Link>
         </nav>
      </header>
   );
}
