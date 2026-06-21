"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-text"
        >
          WorkRockets
        </Link>

        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 bg-orange text-white hover:bg-orange/90 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer"
          >
            Become a design partner
          </Link>
        </div>

        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-text cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue/50 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4">
              <Link
                href="#contact"
                className="block w-full text-center py-3 bg-orange text-white rounded-lg font-medium text-sm focus:outline-none focus:ring-2 focus:ring-orange/50"
                onClick={() => setIsOpen(false)}
              >
                Become a design partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
