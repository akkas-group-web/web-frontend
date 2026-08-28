import { gql } from "graphql-request";

export const GET_REFERENCES_QUERY = gql`
  query GetReferences {
    references {
      nodes {
        id
        referenceFields {
          name
          sektor
          website
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
