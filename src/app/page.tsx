import { PageShell } from "@/components/layout/page-shell";
import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { ProgrammeIndex } from "@/components/home/programme-index";
import { PopularRoutes } from "@/components/home/popular-routes";
import { JourneySteps } from "@/components/sections/journey-steps";
import { UniversitiesMarquee } from "@/components/sections/universities-marquee";
import { StudentStories } from "@/components/sections/student-stories";
import { ResultPosts } from "@/components/sections/result-posts";
import { ConsultSection } from "@/components/sections/consult-section";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StatsStrip />
      <ProgrammeIndex />
      <PopularRoutes />
      <JourneySteps />
      <UniversitiesMarquee />
      <StudentStories />
      <ResultPosts />
      <ConsultSection />
    </PageShell>
  );
}
