"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiMinutemailer } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import FadeInOnView from "@/components/FadeInOnView";
import { CheckCircleIcon } from "lucide-react";

export default function ContactForm() {
   const [isEmailSent, setIsEmailSent] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm();

   const onSubmit = async (data) => {
      try {
         const res = await fetch("/api/send", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         if (res.ok) {
            setIsEmailSent(true);
            reset();
         } else {
            console.error("Erreur serveur");
         }
      } catch (error) {
         console.error("Erreur réseau", error);
      }
   };

   return (
      <AnimatePresence mode="wait">
         {isEmailSent ? (
            <motion.div
               key="success"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className=" bg-white text-primary self-center flex flex-col items-center justify-center p-6 rounded-lg text-center"
            >
               <div className="text-3xl font-normal">Merci !</div>
               <div>Votre message a bien été envoyé.</div>
               <CheckCircleIcon className="w-10 h-10 text-green-500 mt-5" />
            </motion.div>
         ) : (
            <motion.form
               key="form"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               onSubmit={handleSubmit(onSubmit)}
               // onSubmit={testSubmit}
               className="max-w-xl w-full bg-white p-10 rounded-lg grid items-center"
            >
               <FadeInOnView className="space-y-8">
                  <div>
                     <label htmlFor="name" className="sr-only">
                        Votre nom
                     </label>
                     <input
                        type="text"
                        id="name"
                        placeholder="Votre nom"
                        {...register("name", { required: true })}
                        className="block w-full border-b border-gray-300 py-2 focus:border-black outline-none"
                     />
                     {errors.name && (
                        <p className="text-sm text-red-500">
                           Ce champ est requis
                        </p>
                     )}
                  </div>

                  <div>
                     <label htmlFor="email" className="sr-only">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        placeholder="Votre email"
                        {...register("email", { required: true })}
                        className="block w-full border-b border-gray-300 py-2 focus:border-black outline-none"
                     />
                     {errors.email && (
                        <p className="text-sm text-red-500">
                           Ce champ est requis
                        </p>
                     )}
                  </div>

                  <div>
                     <label htmlFor="message" className="sr-only">
                        Message
                     </label>
                     <textarea
                        id="message"
                        rows="5"
                        placeholder="Votre message"
                        {...register("message", { required: true })}
                        className="block w-full border-b border-gray-300 py-2 focus:border-black outline-none"
                     ></textarea>
                     {errors.message && (
                        <p className="text-sm text-red-500">
                           Ce champ est requis
                        </p>
                     )}
                  </div>

                  <Button
                     type="submit"
                     disabled={isSubmitting}
                     icon={<SiMinutemailer />}
                     size="lg"
                  >
                     {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>
               </FadeInOnView>
            </motion.form>
         )}
      </AnimatePresence>
   );
}
