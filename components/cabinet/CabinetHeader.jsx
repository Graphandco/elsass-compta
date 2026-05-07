import FadeInOnView from "../FadeInOnView";

export default function CabinetHeader({ cabinet }) {
   console.log(cabinet);
   return (
      <FadeInOnView className="wrapper mb-10 space-y-5">
         <h1 className="text-primary font-normal text-3xl sm:text-4xl md:text-5xl">
            {cabinet.title}
         </h1>
         <div
            className="mt-10 mb-20 prose"
            dangerouslySetInnerHTML={{
               __html: cabinet.content || "",
            }}
         />
      </FadeInOnView>
   );
}
