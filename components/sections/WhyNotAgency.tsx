"use client";

import { motion } from "framer-motion";

export const WhyNotAgency = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-6">
            Why this isn&apos;t an agency
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            An agency sells people&apos;s time — more work, more hires, cost climbs with headcount. We sell a machine. Built once, run continuously, improved over time. Taking on more doesn&apos;t mean more bodies. Same work, structurally different underneath — and that difference is the whole point.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
