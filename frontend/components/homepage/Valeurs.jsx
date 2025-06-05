import Image from "next/image";

export default function Valeurs({ valeurs }) {
   return (
      <section className="wrapper py-20">
         <h2 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            Nos valeurs
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
            {valeurs.map((valeur) => (
               <div
                  key={valeur.id}
                  className="border border-neutral-400 p-3 rounded-lg shadow-md"
               >
                  <Image
                     src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${valeur?.image?.url}`}
                     alt={valeur.title}
                     width={valeur.image.width}
                     height={valeur.image.height}
                     className="rounded-lg"
                  />
                  <h3 className="text-primary font-normal text-xl md:text-2xl mt-3 mb-1">
                     {valeur.title}
                  </h3>
                  <p className="">{valeur.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
}
