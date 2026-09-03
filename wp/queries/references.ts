import { gql } from "graphql-request";

export const GET_REFERENCES_QUERY = gql`
  query GetReferences($after: String) {
    references(first: 100, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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