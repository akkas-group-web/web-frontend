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
}

export interface SectorItem {
  id: string;
  title: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  href: string;
  category: string;
}

export interface HomeContent {
  services: ServiceItem[];
  brands: BrandItem[];
  sectors: SectorItem[];
  stats: StatItem[];
  announcements: AnnouncementItem[];
}
