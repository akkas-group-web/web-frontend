export const APPLICATIONS_QUERY = /* GraphQL */ `
  query GetApplications {
    uygulamalar {
      nodes {
        id
        title
        uygulamaBilgileri {
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