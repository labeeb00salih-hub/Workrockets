"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

export const Problem = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="w-8 h-[3px] bg-blue/30 rounded-full mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-6">
            The problem
          </h2>
          <p className="text-base md:text-lg text-muted leading-[1.7]">
            Every growing B2B company hits the same wall: there&apos;s more repeatable work than people to do it. So it either eats your team&apos;s week or it doesn&apos;t get done. Hiring is slow and expensive. Tools just hand you more to operate. <span className="text-blue font-medium">You don&apos;t need another login. You need the work gone.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
