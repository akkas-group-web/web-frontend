import { gql } from "graphql-request";

export const GET_ARTICLES_QUERY = gql`
  query GetArticles {
    articleItems {
      nodes {
        id
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        articleItemFields {
          kisaAciklama
          authorName
          metin
          authorPhoto {
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