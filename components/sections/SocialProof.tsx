"use client";

import { motion } from "framer-motion";

const METRICS = [
    { value: "500+", label: "Trusted Companies" },
    { value: "10M+", label: "Tasks Automated" },
    { value: "99%", label: "Client Satisfaction" },
];

export function SocialProof() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-6xl font-black mb-2">{metric.value}</h3>
                            <p className="text-gray-600 font-medium">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                        "Work Rockets transformed our content process. We're producing 3x the content with half the effort. It's not just automation; it's a competitive advantage."
                    </blockquote>
                    <cite className="not-italic">
                        <div className="font-bold text-lg">Sarah Chen</div>
                        <div className="text-gray-600">Head of Operations, TechFlow</div>
                    </cite>
                </div>
            </div>
        </section>
    );
}
