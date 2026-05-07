import Image from "next/image";
import Link from "next/link";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { PRESTATIONS_CHILDREN_QUERY } from "@/actions/queries/prestationsChildrenQuery";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./BurgerMenu";

export default async function Header() {
   const data = await getWordpressContent({
      query: PRESTATIONS_CHILDREN_QUERY,
      variables: { id: 43 },
      rootField: "page",
   });

   const prestations = [...(data?.children?.nodes || [])]
      .sort((a, b) => (a?.databaseId || 0) - (b?.databaseId || 0))
      .map((child) => ({
         id: child.databaseId,
         slug: child.slug,
         title: child.title,
      }));

   return (
      <header
         id="header"
         className="wrapper flex justify-between items-center py-2 sm:py-4 border-b border-black/5 z-50"
      >
         <Link href="/">
            <Image
               src="/logo.svg"
               alt="Logo"
               width={90}
               height={90}
               className="w-16 h-16 sm:w-24 sm:h-24"
               priority
            />
         </Link>
         <HeaderNav prestations={prestations} />
         <BurgerMenu />
      </header>
   );
}
