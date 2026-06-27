"use client";

import { AnimatedSection, StaggerList, StaggerItem } from "@/components/ui/animated-section";

const services = [
  {
    title: "SEO & content at scale",
    description: "Pages and articles built, published, and indexed across the searches your buyers actually make.",
    guarantee: "Guaranteed: built and live. Worked toward: traffic. Never faked: leads.",
  },
  {
    title: "Prospect lists, built and enriched",
    description: "Targeted lists pulled, cleaned, and enriched on a schedule, ready for your team to work.",
  },
  {
    title: "CRM that stays clean",
    description: "Deduped, fields filled, formatting fixed, kept current instead of rotting between quarters.",
  },
  {
    title: "Content, multiplied",
    description: "One asset turned into every format you need — the repurposing work that always slips.",
  },
  {
    title: "The follow-ups that fall through",
    description: "Cold leads and overdue nudges, chased automatically so nothing leaks.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="w-8 h-[3px] bg-blue/30 rounded-full mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-4">
            What we actually do
          </h2>
          <p className="text-base md:text-lg text-muted leading-[1.7] mb-12">
            We take one recurring job, turn it into an automation we build and run, and deliver the output every week. Real things we run:
          </p>
        </AnimatedSection>

        <StaggerList className="space-y-8">
          {services.map((service) => (
            <StaggerItem key={service.title} className="border-l-2 border-blue/25 pl-6 py-1 hover:border-blue transition-colors duration-200">
              <h3 className="text-base md:text-lg font-medium text-text mb-1.5">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {service.description}
              </p>
              {service.guarantee && (
                <p className="text-sm text-orange font-medium mt-2.5 italic">
                  {service.guarantee}
                </p>
              )}
            </StaggerItem>
          ))}
        </StaggerList>

        <AnimatedSection delay={0.2} className="mt-12">
          <p className="text-base md:text-lg text-muted leading-[1.7]">
            We start with one job, prove it, then take the next. One headache at a time — not a suite you have to buy all at once.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
