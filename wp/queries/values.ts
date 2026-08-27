import { gql } from "graphql-request";

export const GET_VALUE_ITEMS_QUERY = gql`
  query GetValueItems {
    valueItems {
      nodes {
        id
        valueItemFields {
          value_title
          description
        }
      }
    }
  }
`;
