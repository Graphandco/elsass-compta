"use server";

const GRAPHQL_BASE_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL; // ex: https://site.com/graphql
const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME) || 300;

export async function getWordpressContent({ query, variables = {}, rootField }) {
   if (!GRAPHQL_BASE_URL) {
      throw new Error(
         "La variable d'environnement NEXT_PUBLIC_WP_GRAPHQL n'est pas définie"
      );
   }

   const graphqlRes = await fetch(GRAPHQL_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: REVALIDATE_TIME },
   });

   if (!graphqlRes.ok) {
      throw new Error("Erreur lors de la requête GraphQL");
   }

   const { data, errors } = await graphqlRes.json();
   if (errors?.length) {
      throw new Error(errors[0].message || "Erreur GraphQL");
   }

   const result = rootField ? data?.[rootField] : data;
   if (!result) {
      throw new Error("Réponse GraphQL vide ou champ racine introuvable");
   }

   return result;
}
