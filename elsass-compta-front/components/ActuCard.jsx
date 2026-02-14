import Link from "next/link";

export default function ActuCard({ actu }) {
   const imageLink = actu?.image?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${actu?.image?.url}`
      : "/logo-noir.jpg";
   return (
      <Link
         href={`actualites/${actu.slug}`}
         style={{ backgroundImage: `url(${imageLink})` }}
         className="flex items-end bg-primary bg-cover bg-center aspect-[16/9] rounded-lg relative after:content-[''] after:absolute after:inset-0 after-bg-inherit after:bg-cover after:bg-center after:rounded-lg after:scale-100 hover:after:scale-105 after:transition-all after:duration-300 overflow-hidden"
      >
         <div className="w-full font-normal py-2 px-4 bg-white rounded-b-lg relative z-[1] leading-tight">
            {actu.title}
         </div>
      </Link>
   );
}
