"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="mailto:hello@workrockets.com"
            className="inline-block px-8 py-3.5 text-sm font-medium rounded-lg bg-orange text-white hover:bg-orange/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer"
          >
            Become a design partner
          </Link>
          <p className="mt-4 text-sm text-muted">
            We&apos;ll reply within a day. No pitch deck, just a conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
