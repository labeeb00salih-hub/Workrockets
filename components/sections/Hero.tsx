"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ANIMATED_PHRASES = [
    "creates content at scale",
    "analyzes content decay",
    "automates content refresh",
];

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ANIMATED_PHRASES.length);
        }, 3000); // Faster cycle for snappy feel
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden bg-[#FDFBF7]">
            {/* Procedural Crumbled Paper Texture */}
            <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <svg className="w-full h-full opacity-80 mix-blend-multiply" xmlns="http://www.w3.org/2000/svg">
                    <filter id="paper-texture">
                        {/* Large folds/creases */}
                        <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise" />
                        <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
                            <feDistantLight azimuth="45" elevation="60" />
                        </feDiffuseLighting>
                        {/* This lighting creates the high-contrast peaks and valleys of crushed paper */}
                        <feSpecularLighting in="noise" surfaceScale="4" specularConstant="1" specularExponent="20" result="specular">
                            <feDistantLight azimuth="45" elevation="60" />
                        </feSpecularLighting>

                        {/* Fine grain for paper feel */}
                        <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="grain" />
                        <feBlend in="specular" in2="grain" mode="multiply" result="texture" />
                    </filter>

                    {/* Apply the filter to a rect filling the screen */}
                    <rect width="100%" height="100%" filter="url(#paper-texture)" opacity="1" fill="#e5e5e5" />
                </svg>

                {/* Overlay subtle gradient to soften the harsh SVG shadows */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 mix-blend-overlay" />
            </div>





            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] relative">
                    Work Rockets
                    {/* Grid allows the container to resize to the tallest item automatically */}
                    <span className="grid place-items-center mt-4 h-[3.5em] md:h-auto">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                className="col-start-1 row-start-1 text-gray-800"
                                initial={{ opacity: 0, y: 15, filter: "blur(8px)", rotate: -1 }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: 0 }}
                                exit={{ opacity: 0, y: -15, filter: "blur(8px)", rotate: 1 }}
                                transition={{
                                    opacity: { duration: 0.2 },
                                    default: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                                }}
                            >
                                {ANIMATED_PHRASES[index]}
                            </motion.span>
                        </AnimatePresence>
                        {/* Invisible spacers for layout stability */}
                        <span className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none invisible" aria-hidden="true">
                            creates content at scale
                        </span>
                        <span className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none invisible" aria-hidden="true">
                            automates content refresh
                        </span>
                        <span className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none invisible" aria-hidden="true">
                            analyzes content decay
                        </span>
                    </span>
                </h1>

                <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-600 mt-8 md:mt-12">
                    Scale content production without scaling headcount.
                    Turn repetitive tasks into automated workflows.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <Link
                        href="#get-started"
                        className="group px-8 py-4 bg-black text-white text-lg font-semibold rounded-xl hover:bg-gray-800 hover:shadow-xl transition-all flex items-center gap-2"
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-white text-gray-900 border border-gray-200 text-lg font-medium rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
