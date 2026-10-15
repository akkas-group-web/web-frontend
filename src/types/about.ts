import type { MediaImage } from "./media";

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface AboutHeroContent {
  titleHighlight: string;
  titleRest: string;
  description: string;
  image: MediaImage;
}

export interface AboutStoryContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlightQuote: string;
  highlightAuthor: string;
  image: MediaImage;
}

export interface VisionMissionContent {
  vision: string;
  mission: string;
}

export interface AboutActivityContent {
  leftText: string;
  rightText: string;
  closingText: string;
  eyebrow: string;
  title: string;
  button: {
    title: string;
    url: string;
    target: string;
  } | null;
}

export interface AboutStatItem {
  id: string;
  value: string;
  label: string;
}

export interface AboutContent {
  hero: AboutHeroContent;
  story: AboutStoryContent;
  activity: AboutActivityContent;
  timeline: TimelineMilestone[];
  visionMission: VisionMissionContent;
  values: ValueItem[];
  stats: AboutStatItem[];
}
