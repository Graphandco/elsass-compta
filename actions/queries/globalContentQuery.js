export const GLOBAL_PAGE_FIELDS = `
  databaseId
  title
  content(format: RENDERED)
    featuredImage {
        node {
        altText
        mediaDetails {
            height
            width
        }
        sourceUrl
        }
    }
  seo: seo {
    title
    metaDesc
    metaRobotsNoindex
  }
`;

export function getGlobalContentQuery(type) {
   return `
    query GetContent($id: ID!) {
      ${type}(id: $id, idType: DATABASE_ID) {
        ${GLOBAL_PAGE_FIELDS}
      }
    }
  `;
}
