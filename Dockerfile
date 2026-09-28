FROM node:22-alpine AS build
ARG WP_GRAPHQL_ENDPOINT
ARG NEXT_PUBLIC_CHAT_API_URL

ENV WP_GRAPHQL_ENDPOINT=$WP_GRAPHQL_ENDPOINT
ENV NEXT_PUBLIC_CHAT_API_URL=$NEXT_PUBLIC_CHAT_API_URL

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --omit=dev


FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "start"]

