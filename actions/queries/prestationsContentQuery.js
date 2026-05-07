import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const PRESTATIONS_CONTENT_QUERY = `
  query GetPrestationsContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}

        outils {
            tools_content
            tools_images {
                nodes {
                altText
                mediaDetails {
                    height
                    width
                }
                sourceUrl
                }
            }
        }
      
    }
  }
`;
