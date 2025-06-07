import { getStrapiUnique } from "@/actions/getStrapiUnique";
import QuiSommesNous from "@/components/cabinet/QuiSommesNous";
import NosClients from "@/components/cabinet/NosClients";

export default async function Cabinet() {
   const cabinet = await getStrapiUnique({ type: "cabinet" });
   console.log(cabinet);

   return (
      <div className="py-10 md:py-20">
         <h1 className="wrapper text-primary font-normal text-3xl sm:text-4xl md:text-5xl mb-10">
            {cabinet.title}
         </h1>
         <QuiSommesNous cabinet={cabinet} />
         <NosClients cabinet={cabinet} />
      </div>
   );
}
