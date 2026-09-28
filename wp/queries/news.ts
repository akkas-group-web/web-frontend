import { gql } from "graphql-request";

export const GET_NEWS_QUERY = gql`
  query GetNews {
    newsItems(first: 100) {
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
        newsItemFields {
          excerptText
          kategori
          haberIcerigi
          displayorder
        }
      }
    }
  }
`;
