import type { MediaImage } from "./media";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  image: MediaImage;
  imageRatio?: "landscape" | "square";
  content: string[];
}
