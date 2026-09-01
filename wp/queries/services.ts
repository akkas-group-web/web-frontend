import { gql } from "graphql-request";

export const GET_SERVICES_QUERY = gql`
  query GetServices {
    serviceCategories {
      nodes {
        id
        title
        serviceCategoryFields {
          categorySlug
          description
          icon
          featured
        }
      }
    }
    serviceChildren {
      nodes {
        id
        serviceChildId {
          childLabel
          childSlug
          childDescription
          childContent
          contentTitle
          contentImage {
            node {
              sourceUrl
              altText
            }
          }
          relatedCategory {
            nodes {
              ... on ServiceCategory {
                id
              }
            }
          }
        }
      }
    }
  }
`;
