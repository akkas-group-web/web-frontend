import { GraphQLClient } from "graphql-request";

export const wpClient = new GraphQLClient(
  process.env.WP_GRAPHQL_ENDPOINT!,
  {
    next: { revalidate: 3600 },
  },
);

export const wpNoCacheClient = new GraphQLClient(
  process.env.WP_GRAPHQL_ENDPOINT!,
  {
    cache: "no-store",
  },
);