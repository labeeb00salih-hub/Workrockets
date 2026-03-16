import { Hero } from "@/components/sections/Hero";
import { CoreServicePillars } from "@/components/sections/CoreServicePillars";
import { PathToRevenue } from "@/components/sections/PathToRevenue";
import { RealityCheck } from "@/components/sections/RealityCheck";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="bg-deep-shadow">
      <Hero />
      <CoreServicePillars />
      <PathToRevenue />
      <RealityCheck />
      <CTA />
      <FAQ />
    </div>
  );
}
