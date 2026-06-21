"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

export const Hero = () => {
  return (
    <section className="relative bg-bg pt-32 md:pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.02em] leading-[1.15] text-text mb-6">
            You hand off the work. We run it. You get it back done.
          </h1>

          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-4">
            For B2B teams drowning in the same operational work every week — the lists, the pages, the follow-ups, the CRM cleanup nobody owns. We build that work into a machine we run for you, and hand back the finished result.
          </p>

          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-8">
            No tool to learn. No dashboard to babysit. Just the work, done.
          </p>

          <Link
            href="#contact"
            className="inline-block px-6 py-3 text-sm font-medium rounded-lg bg-orange text-white hover:bg-orange/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer"
          >
            Become a design partner
          </Link>
        </motion.div>
      </div>

      {/* Tech stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-24 overflow-hidden"
      >
        <div className="text-center mb-8">
          <span className="text-xs font-medium tracking-widest uppercase text-muted">
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
                  className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
