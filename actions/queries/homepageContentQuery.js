import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const HOMEPAGE_CONTENT_QUERY = `
  query GetHomepageContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
      homepage {
        hero_description
        hero_small_description
        hero_big_image {
          node {
            id
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        hero_small_image {
          node {
            id
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        valeurs {
            description
            title
            image {
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
  }
`;
