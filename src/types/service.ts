import type { NavChild } from "./navigation";
import type { ServiceIconKey } from "./index";
import type { MediaImage } from "./media";

export interface ServiceCategory {
  id: string;
  label: string;
  href: string;
  description: string;
  icon: ServiceIconKey;
  featured?: boolean;
  children?: NavChild[];
}

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
