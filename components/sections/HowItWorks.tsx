"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We find the work worth handing off.",
    description: "We look at what eats your team’s week and pick the job that’s costing the most for the least reason to be manual.",
  },
  {
    number: "02",
    title: "We build the machine that does it.",
    description: "We turn that job into an automation we run and supervise. Setup is our problem, not yours.",
  },
  {
    number: "03",
    title: "You get the work back, every week.",
    description: "Finished output on a schedule, plus a plain report of what happened and what’s next.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-10">
            How it works
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <span className="text-sm font-medium text-blue mt-0.5 shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-base md:text-lg font-medium text-text mb-1">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-base md:text-lg text-muted leading-relaxed mt-10 pt-8 border-t border-border"
        >
          You own every account and every byte of data. We just operate it. Leave anytime and it&apos;s all still yours.
        </motion.p>
      </div>
    </section>
  );
};
