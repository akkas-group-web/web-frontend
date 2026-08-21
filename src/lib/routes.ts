export const routes = {
  news: (slug: string) => `/haberler/${slug}`,
  article: (slug: string) => `/blog/${slug}`,
  sector: (slug: string) => `/sektorler/${slug}`,
  brand: (slug: string) => `/grup-sirketlerimiz/${slug}`,
  service: (category: string, slug: string) =>
    `/hizmetlerimiz/${category}/${slug}`,
  serviceCategory: (categoryId: string) => `/hizmetlerimiz/${categoryId}`,

  // Sabit (parametresiz) route'lar da buraya eklenebilir:
  newsList: () => "/haberler",
  blogList: () => "/blog",
  sectorsList: () => "/sektorler",
  contact: () => "/iletisim",
  about: () => "/hakkimizda",
} as const;
