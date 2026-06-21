"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Big bold brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <Link href="/" className="block">
            <span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] text-text/10 hover:text-text/20 transition-colors duration-300 select-none">
              WorkRockets
            </span>
          </Link>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} WorkRockets. All rights reserved.
          </p>
          <Link
            href="mailto:hello@workrockets.com"
            className="text-sm text-blue hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue/50 rounded-sm"
          >
            hello@workrockets.com
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
