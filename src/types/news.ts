export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  category: string;
  image: string;
  imageRatio?: "landscape" | "square";

  content: string[];
}