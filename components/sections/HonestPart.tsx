"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

export const HonestPart = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="w-8 h-[3px] bg-blue/30 rounded-full mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-6">
            The honest part
          </h2>
          <div className="space-y-5 text-base md:text-lg text-muted leading-[1.7]">
            <p>
              We&apos;re early, and we&apos;d rather say it than fake it. We&apos;re taking on our first one or two design partners now. You work directly with the founders. You get honest weekly reporting — including the weeks something didn&apos;t work. And you won&apos;t find one invented case study on this page, because we won&apos;t post numbers we haven&apos;t earned.
            </p>
            <p>
              We promise what we control: the work gets built, runs, and ships. We won&apos;t promise what we don&apos;t: that it fixes your funnel by itself. We&apos;ll always tell you which is which.
            </p>
            <p className="text-blue font-medium">
              If that&apos;s a partner worth building with, let&apos;s talk.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
