"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ShinyButton } from "@/components/ui/shiny-button";

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <ShinyButton href="mailto:workrocketsai@gmail.com" className="px-8">
            Become a design partner
          </ShinyButton>
          <p className="mt-5 text-sm text-muted">
            We&apos;ll reply within a day. No pitch deck, just a conversation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
