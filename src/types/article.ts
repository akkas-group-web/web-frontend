import type { MediaImage } from "./media";

export interface ArticleAuthor {
  name: string;
  role?: string;
  photo: MediaImage;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: MediaImage;
  author: ArticleAuthor;
  content: string[];
}