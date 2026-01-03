"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
    {
        title: "Standardized Solutions",
        description: "Don't reinvent the wheel. We use proven frameworks to build your automation infrastructure.",
    },
    {
        title: "Scalable Results",
        description: "Our systems are built to handle growth. From 10 to 10,000 tasks, we scale with you.",
    },
    {
        title: "Expert Implementation",
        description: "No learning curve. Our team handles the setup, maintenance, and optimization.",
    },
];

import { WorkflowDemo } from "./WorkflowDemo";

export function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Why Work Rockets?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        We don't just build automations; we build reliability. Our standardized approach ensures your workflows are robust, maintainable, and scalable from day one.
                    </p>
                    <div className="space-y-6">
                        {BENEFITS.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-4"
                            >
                                <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">{benefit.title}</h3>
                                    <p className="text-gray-400">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="relative h-full">
                    <WorkflowDemo />
                </div>
            </div>
        </section>
    );
}
