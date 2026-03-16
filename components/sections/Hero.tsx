"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-deep-shadow"
        >
            {/* Background Image with Parallax/Pan Effect */}
            <motion.div
                style={{ scale, y }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/hero-bg-3.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-deep-shadow/20" />
            </motion.div>

            {/* Main Hero Content (Occupies full screen) */}
            <div className="container mx-auto px-4 relative z-10 text-center text-pale-glow min-h-screen flex flex-col justify-center pt-32 md:pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Top Tag */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-ember-brown/20 border border-ember-brown/30 backdrop-blur-md mb-2">
                        <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-orange-glow">
                            FOR B2B TECHNOLOGY COMPANIES
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-6xl">
                        AUTOMATE YOUR COMPLETE <br className="hidden md:block" />
                        <span className="text-orange-glow">GO-TO-MARKET</span> PROCESS
                    </h1>

                    {/* Subhead */}
                    <p className="text-base md:text-lg text-white/90 max-w-3xl font-medium leading-relaxed mt-4">
                        OUR GTM ENGINEERS DESIGN, AUTOMATE, AND OPTIMIZE THE SYSTEMS THAT DRIVE PREDICTABLE REVENUE GROWTH FOR B2B TECH COMPANIES.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button
                            size="lg"
                            className="rounded-full bg-orange-glow text-deep-shadow hover:bg-golden-orange font-bold text-base px-8 py-6 tracking-wide shadow-xl shadow-orange-glow/20 transition-all hover:scale-105"
                        >
                            AUDIT MY GTM SYSTEMS
                        </Button>
                    </div>

                    {/* Bottom Italic Text */}
                    <div className="mt-6 text-xs md:text-sm font-medium italic text-pale-glow/80 tracking-wide">
                        DISCOVER <span className="text-orange-glow not-italic font-bold">AUTOMATION OPPORTUNITIES</span> ACROSS YOUR ENTIRE GO-TO-MARKET STRATEGY
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Marquee - Positioned below the main fold */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full pb-24 overflow-hidden group"
            >
                {/* Heading */}
                <div className="text-center mb-10">
                    <span className="text-orange-glow font-bold tracking-widest uppercase text-sm md:text-base">
                        Our Tech Stack
                    </span>
                </div>

                {/* Vignette / Fade Edges */}
                <div className="absolute inset-0 z-20 pointer-events-none mask-image-linear-to-r" />

                {/* Marquee Container */}
                <div className="flex w-full overflow-hidden mask-image-linear-to-r">
                    <div className="flex gap-16 py-6 animate-scroll whitespace-nowrap min-w-full">
                        {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="relative flex-shrink-0"
                            >
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const TECH_STACK = [
    { name: "Clay", src: "https://www.google.com/s2/favicons?sz=128&domain=clay.com" },
    { name: "Apollo", src: "https://www.google.com/s2/favicons?sz=128&domain=apollo.io" },
    { name: "Make", src: "https://www.google.com/s2/favicons?sz=128&domain=make.com" },
    { name: "AirOps", src: "https://www.google.com/s2/favicons?sz=128&domain=airops.com" },
    { name: "Zapier", src: "https://www.google.com/s2/favicons?sz=128&domain=zapier.com" },
    { name: "HubSpot", src: "https://www.google.com/s2/favicons?sz=128&domain=hubspot.com" },
    { name: "n8n", src: "https://www.google.com/s2/favicons?sz=128&domain=n8n.io" },
    { name: "Semrush", src: "https://www.google.com/s2/favicons?sz=128&domain=semrush.com" },
    { name: "Salesforce", src: "https://www.google.com/s2/favicons?sz=128&domain=salesforce.com" },
    { name: "HeyReach", src: "https://www.google.com/s2/favicons?sz=128&domain=heyreach.io" },
];
