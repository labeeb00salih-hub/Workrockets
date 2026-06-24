"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

export const WhyNotAgency = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="w-8 h-[3px] bg-blue/30 rounded-full mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-6">
            Why this isn&apos;t an agency
          </h2>
          <p className="text-base md:text-lg text-muted leading-[1.7]">
            An agency sells people&apos;s time — more work, more hires, cost climbs with headcount. We sell a machine. Built once, run continuously, improved over time. Taking on more doesn&apos;t mean more bodies. Same work, structurally different underneath — and that difference is the whole point.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
