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
          displayorder
        }
      }
    }

    serviceChildren(first: 500) {
      nodes {
        id
        serviceChildId {
          childLabel
          childSlug
          childDescription
          childContent
          contentTitle
          displayorder

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
export const SERVICES_PAGE_QUERY = gql`
  query ServicesPage {
    servicesPages(first: 1) {
      nodes {
        servicesPageFields {
          heroEyebrow
          heroBaslik
          heroAciklama
        }
      }
    }
  }
`;