import type { MediaImage } from "./media";

export interface ArticleAuthor {
  name: string;
  role?: string;
  /** Editör tarafından yüklenen fotoğraf; herhangi bir en-boy oranında olabilir. */
  photo: MediaImage;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  /** ISO 8601 tarih string'i, ör. "2025-03-14T00:00:00.000Z" */
  date: string;
  href: string;
  /** Makale kapak görseli; kart tasarımı dikdörtgen (video oranı) varsayar. */
  image: MediaImage;
  author: ArticleAuthor;
}