import { gql } from "graphql-request";

export const GET_UPLOADED_CONTENTS_QUERY = gql`
  query GetUploadedContents {
    ploadedContents(first: 100) {
      nodes {
        id
        title
        slug
        yuklenenlerDetaylari {
          baslik
          icerik
        }
      }
    }
  }
`;