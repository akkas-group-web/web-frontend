import type { MediaImage } from "./media";

export interface SectorService {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: MediaImage;
}

export interface SectorContent {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  heroDescription: string;
  image: MediaImage;
  services: SectorService[];
  benefits: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}