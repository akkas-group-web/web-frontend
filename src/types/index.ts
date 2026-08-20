import type { ArticleItem } from "./article";
import type { MediaImage } from "./media";
import type { NewsItem } from "./news";

export * from "./contact";
export * from "./media";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIconKey;
}

export type ServiceIconKey =
  | "invest"
  | "grant"
  | "insurance"
  | "ip"
  | "quality"
  | "osgb"
  | "kvkk"
  | "carbon";

export interface BrandItem {
  id: string;
  name: string;
  description: string;
  href: string;
  logo: MediaImage;
}

export interface SectorItem {
  id: string;
  title: string;
  href: string;
  description?: string;
  image?: MediaImage;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sub?: string;
}

export interface HomeContent {
  services: ServiceItem[];
  brands: BrandItem[];
  sectors: SectorItem[];
  stats: StatItem[];
  announcements: NewsItem[];
  articles: ArticleItem[];
}