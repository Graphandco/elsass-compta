import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Construit une URL d'image Strapi de manière robuste
 * @param {string|undefined} imageUrl - L'URL de l'image depuis Strapi (peut commencer par /)
 * @returns {string|undefined} L'URL complète de l'image ou undefined si l'image n'existe pas
 */
export function getStrapiImageUrl(imageUrl) {
  if (!imageUrl) return undefined;
  
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!strapiUrl) {
    console.warn('NEXT_PUBLIC_STRAPI_URL is not defined');
    return imageUrl; // Retourne l'URL telle quelle si la variable n'est pas définie
  }
  
  // Si l'URL de l'image est déjà complète (commence par http:// ou https://), la retourner telle quelle
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Nettoyer les slashes pour éviter les doubles slashes
  const baseUrl = strapiUrl.endsWith('/') ? strapiUrl.slice(0, -1) : strapiUrl;
  const imagePath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  
  return `${baseUrl}${imagePath}`;
}
