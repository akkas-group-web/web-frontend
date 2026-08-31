import { gql } from "graphql-request";

export const GET_SECTORS_QUERY = gql`
  query GetSectors {
    sectors {
      nodes {
        id
        sectorFields {
          sectorSlug
          shortTitle
          description
          heroDescription
          sectorImage {
            node {
              sourceUrl
              altText
            }
          }
          benefits
          stat1Value
          stat1Label
          stat2Value
          stat2Label
          stat3Value
          stat3Label
        }
      }
    }
    sectorServices {
      nodes {
        id
        sectorServiceFields {
          serviceTitle
          description
          icon
          categoryId {
  nodes {
    id
  }
}
          relatedSector {
            nodes {
              ... on Sector {
                id
              }
            }
          }
        }
      }
    }
  }
`;
