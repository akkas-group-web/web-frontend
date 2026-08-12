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
  titleHighlight: string; // "Biz" — renkli kutu içinde vurgulanan kelime
  titleRest: string; // "Kimiz?" — düz metin devamı
  description: string;
  imageSrc: string;
}

export interface AboutStoryContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlightQuote: string;
  highlightAuthor: string;
  imageSrc: string;
}

export interface VisionMissionContent {
  vision: string;
  mission: string;
}

export interface AboutStatItem {
  id: string;
  value: string;
  label: string;
}

export interface AboutContent {
  hero: AboutHeroContent;
  story: AboutStoryContent;
  timeline: TimelineMilestone[];
  visionMission: VisionMissionContent;
  values: ValueItem[];
  stats: AboutStatItem[];
}
