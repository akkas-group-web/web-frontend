import { getAboutContent } from "@/services/content.service";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStorySection } from "@/components/sections/about/AboutStorySection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { VisionMissionSection } from "@/components/sections/about/VisionMissionSeciton";
import { ValuesSection } from "@/components/sections/about/ValueSection";
import { AboutStatsStrip } from "@/components/sections/about/AboutStatsStrip";

export default async function AboutPage() {
  const content = await getAboutContent();

  return (
    <>
      {/* <AboutHero content={content.hero} /> */}
      <AboutStorySection content={content.story} />
      <TimelineSection milestones={content.timeline} />
      <VisionMissionSection content={content.visionMission} />
      <ValuesSection values={content.values} />
      <AboutStatsStrip stats={content.stats} />
    </>
  );
}
