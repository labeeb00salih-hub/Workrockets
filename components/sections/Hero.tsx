"use client";

import { motion } from "framer-motion";
import { AnimatedTextCycle } from "@/components/ui/animated-text-cycle";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ShinyButton } from "@/components/ui/shiny-button";
import { OrbitingLogos } from "@/components/ui/orbiting-logos";

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
    <section className="relative bg-bg">
      <DottedSurface>
        <div className="pt-36 md:pt-44 pb-10">
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

            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-4"
            >
              <span>The </span>
              <AnimatedTextCycle
                words={CYCLE_WORDS}
                interval={2200}
                className="text-orange font-medium"
              />
              <span>
                {" "}
                your team keeps putting off — we build it into a machine and run
                it for you.
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10"
            >
              No tool to learn. No dashboard to babysit. Just the work, done.
            </motion.p>

            <ShinyButton href="#contact">
              Become a design partner
            </ShinyButton>
          </div>

          {/* Orbiting tool logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="mt-20 flex justify-center"
          >
            <div className="text-center">
              <span className="text-xs font-medium tracking-widest uppercase text-blue/50 mb-6 block">
                Tools we work with
              </span>
              <OrbitingLogos />
            </div>
          </motion.div>
        </div>
      </DottedSurface>
    </section>
  );
};
