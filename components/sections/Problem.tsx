"use client";

import { motion } from "framer-motion";

export const Problem = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-6">
            The problem
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Every growing B2B company hits the same wall: there&apos;s more repeatable work than people to do it. So it either eats your team&apos;s week or it doesn&apos;t get done. Hiring is slow and expensive. Tools just hand you more to operate. You don&apos;t need another login — you need the work off your plate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
