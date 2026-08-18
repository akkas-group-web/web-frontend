import type { LucideIcon } from "lucide-react";

export interface SectorService {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface SectorContent {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  heroDescription: string;
  image: string;
  services: SectorService[];
  benefits: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}
