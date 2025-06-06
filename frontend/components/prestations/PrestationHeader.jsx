import Image from "next/image";

export default function PrestationHeader({ prestation }) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
         <div className="grid justify-items-center space-y-4 sm:space-y-7">
            <h1 className="text-primary text-center font-normal text-3xl sm:text-4xl md:text-5xl">
               {prestation.title}
            </h1>
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${prestation?.icon?.url}`}
               alt={prestation.title}
               width={prestation?.icon?.width}
               height={prestation?.icon?.height}
               className="h-16 w-auto"
            />
            <div className="bg-primary-light rounded-sm p-3 text-primary w-fit">
               {prestation.short_description}
            </div>
         </div>
         {prestation?.image?.url && (
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${prestation?.image?.url}`}
               alt={prestation.title}
               width={prestation?.image?.width}
               height={prestation?.image?.height}
               className="rounded-lg object-cover h-full aspect-video"
            />
         )}
      </div>
   );
}
