import { MediaImage } from "./media";

export interface ClientReference {
  id: string;
  name: string;
  logo: MediaImage;
  sector?: string;
  website?: string;
}
