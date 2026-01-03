"use client";

import { useState } from "react";
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

    // Close mobile menu when resizing to desktop
    // (In a real app, use a resize observer or key match, but basic toggle is fine for now)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    Work Rockets
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
                                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors"
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
                                            className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden py-2"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
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
                        className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="#get-started"
                        className="px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
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
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="block text-lg font-medium text-gray-900"
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
                                                    className="block text-sm text-gray-600"
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
                                    className="w-full text-center py-3 border border-gray-200 rounded-lg font-medium"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="#get-started"
                                    className="w-full text-center py-3 bg-black text-white rounded-lg font-medium"
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
