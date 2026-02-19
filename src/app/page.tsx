import { Hero } from "@/components/sections/hero";
import { ServicePillars } from "@/components/sections/service-pillars";
import { HowWereDifferent } from "@/components/sections/how-were-different";
import { Industries } from "@/components/sections/industries";
import { HowWeWork } from "@/components/sections/how-we-work";
import { CTA } from "@/components/sections/cta";

export default function Page() {
  return (
    <>
      <Hero />
      <ServicePillars />
      <HowWereDifferent />
      <Industries />
      <HowWeWork />
      <CTA />
    </>
  );
}
