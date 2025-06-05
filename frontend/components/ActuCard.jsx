import Link from "next/link";

export default function ActuCard({ actu }) {
   const imageLink =
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${actu.image.url}` || imageFallback;
   return (
      <Link
         href={`actualites/${actu.slug}`}
         style={{ backgroundImage: `url(${imageLink})` }}
         className="flex items-end bg-cover bg-center aspect-[16/9] rounded-lg relative after:content-[''] after:absolute after:inset-0 bg-inherit after:bg-cover after:bg-center after:rounded-lg after:scale-100 hover:after:scale-105 after:transition-all after:duration-300 overflow-hidden"
      >
         <div className="w-full text-lg text-primary font-normal pt-4 pb-2 px-4 bg-linear-to-b from-transparent to-secondary rounded-b-lg relative z-10">
            {actu.title}
         </div>
      </Link>
   );
}
