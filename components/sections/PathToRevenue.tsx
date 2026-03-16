"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
    {
        step: "Step 1: GTM Operations Audit",
        headline: "Complete GTM Systems Audit",
        description: "We analyze your current go-to-market operations across outbound, content, and revenue processes to identify automation gaps and opportunities.",
        bg: "bg-dark-3 text-white",
        border: "border-secondary/30"
    },
    {
        step: "Step 2: Automation Opportunity Analysis",
        headline: "Custom Automation Blueprint",
        description: "Receive a detailed analysis of what we can automate in your outbound prospecting, content systems, and sales operations - with ROI projections for each area.",
        bg: "bg-dark-3 text-white",
        border: "border-secondary/50"
    },
    {
        step: "Step 3: Commercial Strategy Discussion",
        headline: "Discuss Investment & Timeline",
        description: "Based on your audit results, we'll discuss custom pricing, timelines, and ROI projections for your specific automation roadmap.",
        bg: "bg-dark-4 text-white",
        border: "border-secondary",
        cta: "Discuss Investment & Timeline"
    }
];

export const PathToRevenue = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Your Path to Automated Revenue Growth</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-xl border-l-4 ${item.bg} ${item.border} shadow-lg relative overflow-hidden group`}
                        >
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <div className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wider text-secondary">{item.step}</div>
                                    <h3 className="text-2xl font-bold mb-3">{item.headline}</h3>
                                    <p className="opacity-90 leading-relaxed max-w-2xl text-gray-300">{item.description}</p>
                                </div>
                                {item.cta && (
                                    <div className="shrink-0">
                                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors shadow-lg">
                                            {item.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-secondary/20 transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
