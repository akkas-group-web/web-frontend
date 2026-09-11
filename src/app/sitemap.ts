import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import {
  getBlogPosts,
  getNews,
  getSectors,
  getServicesAndCategories,
} from "@/services";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akkasgroup.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}${routes.about()}`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}${routes.contact()}`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}${routes.newsList()}`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${routes.blogList()}`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${routes.sectorsList()}`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const [news, articles, sectors, { categories, services }] = await Promise.all(
    [getNews(), getBlogPosts(), getSectors(), getServicesAndCategories()],
  );

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${BASE_URL}${routes.news(item.slug)}`,
    lastModified: item.date,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((item) => ({
    url: `${BASE_URL}${routes.article(item.slug)}`,
    lastModified: item.date,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((item) => ({
    url: `${BASE_URL}${routes.sector(item.slug)}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((item) => ({
    url: `${BASE_URL}${routes.serviceCategory(item.id)}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((item) => ({
    url: `${BASE_URL}${routes.service(item.category, item.slug)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...newsRoutes,
    ...articleRoutes,
    ...sectorRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
  ];
}
