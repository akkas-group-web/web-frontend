import { getHomeContent } from "@/services/content.service";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BrandsStrip } from "@/components/sections/BrandsStrip";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ArticlesSection } from "@/components/sections/Articlessection";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStorySection } from "@/components/sections/about/AboutStorySection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { VisionMissionSection } from "@/components/sections/about/VisionMissionSeciton";
import { ValuesSection } from "@/components/sections/about/ValueSection";
import { AboutStatsStrip } from "@/components/sections/about/AboutStatsStrip";

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <>
      <HeroSection />
      <StatsSection stats={content.stats} />
      <ServicesSection services={content.services} />
      <BrandsStrip brands={content.brands} />
      <SectorsSection sectors={content.sectors} />
      <ReferencesSection />
      <ArticlesSection articles={content.articles} />
      <AnnouncementsSection announcements={content.announcements} />
      <ContactCTA />
    </>
  );
}
