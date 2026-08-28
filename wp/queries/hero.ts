import { gql } from "graphql-request";

export const GET_HERO_SLIDES_QUERY = gql`
  query GetHeroSlides {
    heroSlides {
      nodes {
        id
        heroSlideFields {
          eyebrow
          title_text
          description
          link
          image {
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
