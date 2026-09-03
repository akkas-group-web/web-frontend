import { gql } from "graphql-request";

export const GET_TIMELINE_ITEMS_QUERY = gql`
  query GetTimelineItems {
    timelineItems {
      nodes {
        id
        timelineItemFields {
          year
          milestoneTitle
          description
        }
      }
    }
  }
`;
