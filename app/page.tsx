import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyNotAgency } from "@/components/sections/WhyNotAgency";
import { HonestPart } from "@/components/sections/HonestPart";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="bg-bg">
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <WhyNotAgency />
      <HonestPart />
      <FinalCTA />
    </div>
  );
}
