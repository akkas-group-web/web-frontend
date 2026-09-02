export const BRANDS_QUERY = /* GraphQL */ `
  query GetBrands {
    brands(first: 20) {
      nodes {
        id
        title
        brandFields {
          description
          href {
            url
            title
            target
          }
          logo {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;
