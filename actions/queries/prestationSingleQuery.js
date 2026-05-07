import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const PRESTATION_SINGLE_QUERY = `
  query GetPrestationSingle($id: ID!) {
    prestation(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}

        prestations: prestationsExtraContent {
            resume
            picto {
                node {
                    sourceUrl
                    altText
                    mediaDetails {
                        height
                        width
                    }
                }
            }
        }
      
    }
  }
`;
