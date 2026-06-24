"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export function ShinyButton({ children, className = "", href }: ShinyButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-orange px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange/90 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Shimmer sweep */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
      {/* Ambient shine loop */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
