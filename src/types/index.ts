import type { ArticleItem } from "./article";
import { NewsItem } from "./news";
export * from "./contact";
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
  // label: string;
  logo: string;
}

export interface SectorItem {
  id: string;
  title: string;
  href: string;
  description?: string; // Sektörün kısa açıklaması
  // iconName?: string; // Dinamik ikon ismi
  image?: string;
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
