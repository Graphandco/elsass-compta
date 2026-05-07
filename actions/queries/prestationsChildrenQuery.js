export const PRESTATIONS_CHILDREN_QUERY = `
  query GetPrestationsChildren($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      children(first: 100) {
        nodes {
          ... on WithAcfPrestationsExtraContent {
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
          ... on Page {
            __typename
            databaseId
            slug
            uri
            title
            content(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  height
                  width
                }
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
      }
    }
  }
`;
