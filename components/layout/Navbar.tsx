"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    {
        label: "Services",
        href: "#",
        children: [
            { label: "Workflow Automation Services", href: "#services" },
        ],
    },
    {
        label: "Solutions",
        href: "#",
        children: [
            { label: "Content Creation", href: "#solutions/content-creation" },
            { label: "Content Refresh", href: "#solutions/content-refresh" },
            { label: "Project Management", href: "#solutions/project-management" },
        ],
    },
    { label: "Resources", href: "#resources" },
    { label: "Why Work Rockets", href: "#why-us" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-deep-shadow/90 backdrop-blur-md border-b border-ember-brown/30 py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        "text-3xl font-extrabold tracking-tighter lowercase flex items-center gap-2 transition-colors",
                        "text-white"
                    )}
                >
                    workrockets
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium transition-colors",
                                    isScrolled
                                        ? "text-pale-glow/80 hover:text-orange-glow"
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {item.label}
                                {item.children && (
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                )}
                            </Link>

                            {/* Dropdown */}
                            {item.children && (
                                <AnimatePresence>
                                    {activeDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-deep-shadow border border-ember-brown/40 rounded-lg shadow-2xl overflow-hidden py-2 backdrop-blur-md"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-pale-glow/70 hover:text-orange-glow hover:bg-ember-brown/10 transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#contact"
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isScrolled
                                ? "text-pale-glow/80 hover:text-orange-glow"
                                : "text-white/90 hover:text-white"
                        )}
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="#get-started"
                        className={cn(
                            "px-6 py-2.5 text-sm font-bold rounded-lg transition-all hover:shadow-lg uppercase tracking-wide",
                            "bg-orange-glow text-deep-shadow hover:bg-golden-orange"
                        )}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-deep-shadow border-b border-ember-brown/30 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="block text-lg font-medium text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 mt-2 flex flex-col gap-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block text-sm text-pale-glow/60"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <Link
                                    href="#contact"
                                    className="w-full text-center py-3 border border-ember-brown/40 rounded-lg font-medium text-pale-glow"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="#get-started"
                                    className="w-full text-center py-3 bg-orange-glow text-deep-shadow rounded-lg font-medium"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
