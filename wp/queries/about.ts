import { gql } from "graphql-request";

export const GET_ABOUT_PAGE_QUERY = gql`
  query GetAboutPage {
    aboutPages {
      nodes {
        id
        aboutstorycontent {
          heroTitleHighlight
          heroTitleRest
          heroDescription
          heroImage {
            node {
              sourceUrl
              altText
            }
          }
          storyEyebrow
          storyTitle
          storyParagraphs
          storyHighlightQuote
          storyHighlightAuthor
          storyImage {
            node {
              sourceUrl
              altText
            }
          }
          vision
          mission
          stat1Value
          stat1Label
          stat2Value
          stat2Label
          stat3Value
          stat3Label
          stat4Value
          stat4Label
          homeSummaryEyebrow
          homeSummaryTitle
          homeSummaryDescription
          homeSummaryImage {
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
