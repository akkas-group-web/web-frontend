import { ServiceIconKey } from ".";
import type { MediaImage } from "./media";

export interface SectorService {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  icon: ServiceIconKey;
}

export interface SectorContent {
  id: string;
  slug: string;
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
