import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrestationCard({ prestation, bg = "bg-white" }) {
   return (
      <Link
         key={prestation.id}
         href={`/prestations/${prestation.slug}`}
         className={`${bg} block h-full p-5 rounded-lg border border-transparent hover:border-primary transition-all shadow-md group`}
      >
         <div className="flex items-center justify-between gap-2">
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${prestation?.icon?.url}`}
               alt={prestation.title}
               width={prestation?.icon?.width}
               height={prestation?.icon?.height}
               className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
         </div>
         <h3 className="text-lg text-primary font-normal leading-tight mt-3 mb-2 group-hover:scale-105 origin-left transition-transform duration-300">
            {prestation.title}
         </h3>
         <p className="text-sm">{prestation.short_description}</p>
      </Link>
   );
}
