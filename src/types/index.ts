import { ArticleItem } from "./article";

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

export interface AnnouncementItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  category: string;
  image: string;
  imageRatio?: "landscape" | "square"; // belirtilmezse landscape (4/3) kabul edilir
}
export interface HomeContent {
  services: ServiceItem[];
  brands: BrandItem[];
  sectors: SectorItem[];
  stats: StatItem[];
  announcements: AnnouncementItem[];
  articles: ArticleItem[];
}
