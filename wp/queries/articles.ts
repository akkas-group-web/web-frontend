import { gql } from "graphql-request";

export const GET_ARTICLES_QUERY = gql`
  query GetArticles {
    articleItems(first: 100) {
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
          articleContent
          displayorder
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