import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Prestations({ title, description, prestations }) {
   return (
      <div className="bg-primary-light mt-20 py-20">
         <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <h2 className="text-5xl text-primary font-normal">{title}</h2>
               <p className="">{description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-14">
               {prestations.map((prestation) => (
                  <Link
                     key={prestation.id}
                     href={`/prestations/${prestation.slug}`}
                     className="bg-white p-5 rounded-lg border border-transparent hover:border-primary transition-all"
                  >
                     <div className="flex items-center justify-between gap-2">
                        <Image
                           src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${prestation?.icon?.url}`}
                           alt={prestation.title}
                           width={prestation?.icon?.width}
                           height={prestation?.icon?.height}
                           className="h-10 w-auto"
                        />
                        <ArrowUpRight />
                     </div>
                     <h3 className="text-lg text-primary font-normal mt-3 mb-2">
                        {prestation.title}
                     </h3>
                     <p className="text-sm">{prestation.short_description}</p>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}
