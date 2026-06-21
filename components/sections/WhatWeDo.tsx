"use client";

import { motion } from "framer-motion";

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
    description: "One asset turned into ten — the repurposing work that always slips.",
  },
  {
    title: "The follow-ups that fall through",
    description: "Cold leads and overdue nudges, chased automatically so nothing leaks.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-4">
            What we actually do
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-10">
            We take one recurring job, turn it into an automation we build and run, and deliver the output every week. Real things we run:
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border-l-2 border-border pl-6 py-1"
            >
              <h3 className="text-base md:text-lg font-medium text-text mb-1">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {service.description}
              </p>
              {service.guarantee && (
                <p className="text-sm text-orange font-medium mt-2 italic">
                  {service.guarantee}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-base md:text-lg text-muted leading-relaxed mt-10"
        >
          We start with one job, prove it, then take the next. One headache at a time — not a suite you have to buy all at once.
        </motion.p>
      </div>
    </section>
  );
};
