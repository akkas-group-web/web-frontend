import { GraphQLClient } from "graphql-request";

export const wpClient = new GraphQLClient(
  process.env.WP_GRAPHQL_ENDPOINT!,
  {
    next: { revalidate: 3600 },
  },
);

export const wpPopupClient = new GraphQLClient(
  process.env.WP_GRAPHQL_ENDPOINT!,
  {
    next: { revalidate: 60 },
  },
);