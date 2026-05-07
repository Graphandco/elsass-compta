import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const CABINET_CONTENT_QUERY = `
  query GetCabinetContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
        cabinet {
            our_customers_content
            who_we_are_content
            our_customers_image {
                node {
                altText
                mediaDetails {
                    height
                    width
                }
                sourceUrl
                }
            }
            who_we_are_image {
                node {
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
