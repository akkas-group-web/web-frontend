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
          servicesEyebrow
          servicesTitleLine1
          servicesTitleLine2
          servicesDescription
          showBenefitsSection
          benefitsEyebrow
          benefitsTitleLine1
          benefitsTitleLine2
          benefitsDescription
          showCtaSection
          ctaEyebrow
          ctaTitle
          ctaDescription
          relatedServices {
            nodes {
              ... on ServiceCategory {
                id
                title
                serviceCategoryFields {
                  categorySlug
                  description
                  icon
                }
              }
            }
          }
        }
      }
    }
  }
`;
