import { getStrapiUnique } from "@/actions/getStrapiUnique";
import QuiSommesNous from "@/components/cabinet/QuiSommesNous";
import NosClients from "@/components/cabinet/NosClients";
import { marked } from "marked";

export default async function Cabinet() {
   const cabinet = await getStrapiUnique({ type: "cabinet" });
   console.log(cabinet);

   return (
      <div className="py-10 md:py-20">
         <div className="wrapper mb-10 space-y-5">
            <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
               {cabinet.title}
            </h1>
            <div
               className="mt-10 mb-20 prose"
               dangerouslySetInnerHTML={{
                  __html: marked.parse(cabinet.description || ""),
               }}
            />
         </div>
         <QuiSommesNous cabinet={cabinet} />
         <NosClients cabinet={cabinet} />
      </div>
   );
}
