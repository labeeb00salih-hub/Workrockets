"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="relative inline-block">
            {/* Subtle orange glow behind button */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-orange/20 blur-xl scale-150"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-0 rounded-lg bg-orange/10 blur-2xl scale-[2]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              aria-hidden="true"
            />
            <Link
              href="mailto:hello@workrockets.com"
              className="relative inline-block px-8 py-3.5 text-sm font-medium rounded-lg bg-orange text-white hover:bg-orange/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer"
            >
              Become a design partner
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted">
            We&apos;ll reply within a day. No pitch deck, just a conversation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
