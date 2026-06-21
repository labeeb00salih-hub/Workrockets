"use client";

import { AnimatedSection, StaggerList, StaggerItem } from "@/components/ui/animated-section";

const steps = [
  {
    number: "01",
    title: "We find the work worth handing off.",
    description: "We look at what eats your team's week and pick the job that's costing the most for the least reason to be manual.",
  },
  {
    number: "02",
    title: "We build the machine that does it.",
    description: "We turn that job into an automation we run and supervise. Setup is our problem, not yours.",
  },
  {
    number: "03",
    title: "You get the work back, every week.",
    description: "Finished output on a schedule, plus a plain report of what happened and what's next.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="w-8 h-[3px] bg-blue/30 rounded-full mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-12">
            How it works
          </h2>
        </AnimatedSection>

        <StaggerList className="space-y-10">
          {steps.map((step) => (
            <StaggerItem key={step.number} className="flex gap-6 group">
              <span className="text-2xl md:text-3xl font-semibold text-blue/40 group-hover:text-blue transition-colors duration-200 mt-0.5 shrink-0 tabular-nums">
                {step.number}
              </span>
              <div>
                <h3 className="text-base md:text-lg font-medium text-text mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        <AnimatedSection delay={0.2} className="mt-12 pt-10 border-t border-border">
          <p className="text-base md:text-lg text-muted leading-[1.7]">
            You own every account and every byte of data. We just operate it. Leave anytime and it&apos;s all still yours.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
