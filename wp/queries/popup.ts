import { gql } from "graphql-request";

export const GET_HOME_POPUP_QUERY = gql`
  query GetHomePopup {
    homePopups(first: 1) {
      nodes {
        id
        title
        popupFields {
          homePopupActive

          homePopupLink {
            url
            title
            target
          }

          homePopupNewTab

          homePopupImage {
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