import type { MediaImage } from "./media";

export interface ServiceDetail {
  id: string;
  category: string;
  categoryTitle: string;
  slug: string;
  title: string;
  description: string;
  image?: MediaImage;
  content: string[];
}