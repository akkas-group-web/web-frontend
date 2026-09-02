import { gql } from "graphql-request";

export const GET_SERVICES_QUERY = gql`
  query GetServices {
    serviceCategories(first: 100) {
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
    serviceChildren(first: 100) {
      nodes {
        id
        serviceChildId {
          childLabel
          childSlug
          childDescription
          childContent
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
