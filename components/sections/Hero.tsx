"use client";

import { motion } from "framer-motion";
import { AnimatedTextCycle } from "@/components/ui/animated-text-cycle";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ShinyButton } from "@/components/ui/shiny-button";

const TECH_STACK = [
  { name: "Clay", src: "https://www.google.com/s2/favicons?sz=128&domain=clay.com" },
  { name: "Apollo", src: "https://www.google.com/s2/favicons?sz=128&domain=apollo.io" },
  { name: "Make", src: "https://www.google.com/s2/favicons?sz=128&domain=make.com" },
  { name: "AirOps", src: "https://www.google.com/s2/favicons?sz=128&domain=airops.com" },
  { name: "Zapier", src: "https://www.google.com/s2/favicons?sz=128&domain=zapier.com" },
  { name: "HubSpot", src: "https://www.google.com/s2/favicons?sz=128&domain=hubspot.com" },
  { name: "n8n", src: "https://www.google.com/s2/favicons?sz=128&domain=n8n.io" },
  { name: "Semrush", src: "https://www.google.com/s2/favicons?sz=128&domain=semrush.com" },
  { name: "Salesforce", src: "https://www.google.com/s2/favicons?sz=128&domain=salesforce.com" },
  { name: "HeyReach", src: "https://www.google.com/s2/favicons?sz=128&domain=heyreach.io" },
];

const heroWords = "You hand off the work. We run it. You get it back done.".split(" ");

const wordVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.06,
      ease: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number],
    },
  }),
};

const CYCLE_WORDS = [
  "SEO",
  "CRM cleanup",
  "prospecting",
  "follow-ups",
  "lead lists",
  "reporting",
];

export const Hero = () => {
  return (
    <section className="relative bg-bg min-h-screen">
      <DottedSurface>
        <div className="pt-36 md:pt-44 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.02em] leading-[1.15] text-text mb-8 flex flex-wrap">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-4"
            >
              Recurring operational work — the repetitive jobs nobody on your team has time for — built into a machine we run and hand back done. We start with SEO, then take the next job.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10"
            >
              No tool to learn. No dashboard to manage. Just the output, delivered.
            </motion.p>

            <ShinyButton href="#contact">
              Become a design partner
            </ShinyButton>
          </div>

          {/* Tech stack marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-28 overflow-hidden"
          >
            <div className="text-center mb-8">
              <span className="text-xs font-medium tracking-widest uppercase text-blue/50">
                Tools we work with
              </span>
            </div>

            <div className="flex w-full overflow-hidden mask-image-linear-to-r">
              <div className="flex gap-16 py-4 animate-scroll whitespace-nowrap min-w-full">
                {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                    <img
                      src={tech.src}
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-30 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </DottedSurface>
    </section>
  );
};
