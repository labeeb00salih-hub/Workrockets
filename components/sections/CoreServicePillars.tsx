"use client";
import { motion } from "framer-motion";
import { ArrowDown, Database, FileText, Send } from "lucide-react";

const pillars = [
    {
        title: "Outbound Automation",
        description: "End-to-end prospecting systems that turn cold outreach into warm conversations and booked meetings.",
        steps: [
            { label: "Lead Discovery Agent", text: "Dynamic Discovery & Enrichment" },
            { label: "Multi-Channel Node", text: "Coordinated Outreach Campaigns" },
            { label: "LMM Personalizer", text: "Contextual Content Personalization" },
            { label: "Intent Adaptive Logic", text: "Behavioral-Based Sequencing" },
            { label: "Output", text: "Qualified Meetings Booked" }
        ],
        icon: <Send className="w-6 h-6 text-orange-glow" />,
        color: "bg-ember-brown/5 border-ember-brown/20",
        stepColor: "bg-orange-glow"
    },
    {
        title: "Inbound & Content Systems",
        description: "SEO/AEO optimization and content workflows that drive discoverability and convert search traffic into leads.",
        steps: [
            { label: "Semantic Researcher", text: "Gap Discovery & Keyword Mapping" },
            { label: "Agentic Planner", text: "AI-Generated Content Strategy" },
            { label: "Generative Engine", text: "Multi-Model Content Production" },
            { label: "AEO Optimizer", text: "AI Discovery & Search Readiness" },
            { label: "Refresh Protocol", text: "Automated Content Maintenance" },
            { label: "Growth Result", text: "Maximum AI & Search Visibility" }
        ],
        icon: <FileText className="w-6 h-6 text-orange-glow" />,
        color: "bg-ember-brown/5 border-ember-brown/20",
        stepColor: "bg-orange-glow"
    },
    {
        title: "Sales Operations",
        description: "CRM automation, proposal generation, and pipeline management systems that accelerate deal velocity.",
        steps: [
            { label: "Integrator Agent", text: "Unified CRM & Data Sync" },
            { label: "Enrichment Protocol", text: "Advanced Multi-Source Enrichment Logic" },
            { label: "Routing Engine", text: "Automated Scoring & Distribution" },
            { label: "Asset Generator", text: "Dynamic Proposal Production" },
            { label: "Reporting Bot", text: "Predictive Lifecycle Analytics" },
            { label: "Revenue Peak", text: "Accelerated Deal Velocity" }
        ],
        icon: <Database className="w-6 h-6 text-orange-glow" />,
        color: "bg-ember-brown/5 border-ember-brown/20",
        stepColor: "bg-orange-glow"
    }
];

export const CoreServicePillars = () => {
    const phaseDuration = 1.2;
    const maxSteps = 6;
    const pauseDuration = 2.0;
    const entryDuration = 0.3;
    const totalCycle = entryDuration + (maxSteps * phaseDuration) + pauseDuration;

    return (
        <section className="py-24 bg-deep-shadow relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Core Service Pillars</h2>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg text-white font-medium bg-ember-brown/10 p-6 rounded-2xl border-2 border-orange-glow shadow-[0_0_20px_rgba(242,140,29,0.3)] backdrop-blur-md mb-2">
                            Transforming manual operations into autonomous revenue systems with AI agentic workflows.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover="hovered"
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative rounded-3xl border ${pillar.color} p-8 backdrop-blur-sm shadow-2xl transition-all hover:border-orange-glow/30 hover:bg-ember-brown/10 z-10 hover:z-50`}
                        >
                            <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-orange-glow/10 border border-orange-glow/20 shadow-[0_0_15px_rgba(242,140,29,0.1)] transition-transform group-hover:scale-110">
                                {pillar.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-orange-glow transition-colors">{pillar.title}</h3>
                            <p className="text-pale-glow/70 mb-10 text-sm leading-relaxed">{pillar.description}</p>

                            {/* Intense Bulge Container */}
                            <motion.div
                                variants={{
                                    hovered: {
                                        scale: 1.15,
                                        y: -40,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }
                                }}
                                className="space-y-1 relative bg-deep-shadow/90 p-6 -mx-6 rounded-3xl border border-transparent group-hover:border-orange-glow/40 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-all duration-300 z-[100]"
                            >
                                {/* Top Entry Thread */}
                                <div className="flex justify-center mb-1">
                                    <div className="h-6 w-[1.5px] bg-ember-brown/20 relative overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-glow to-transparent z-10"
                                            animate={{ top: ["-100%", "100%"] }}
                                            transition={{
                                                duration: entryDuration,
                                                repeat: Infinity,
                                                repeatDelay: totalCycle - entryDuration,
                                                delay: 0,
                                                ease: "linear"
                                            }}
                                        />
                                    </div>
                                </div>

                                {pillar.steps.map((step, stepIndex) => {
                                    const stepStartTime = entryDuration + (stepIndex * phaseDuration);
                                    const glowStart = stepStartTime / totalCycle;
                                    const glowEnd = (stepStartTime + 1.0) / totalCycle;

                                    return (
                                        <div key={stepIndex}>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 + (stepIndex * 0.05) }}
                                                viewport={{ once: true }}
                                                className="group/step relative"
                                            >
                                                <div className="relative w-full p-3.5 bg-deep-shadow/80 border border-ember-brown/20 rounded-xl transition-all shadow-lg overflow-hidden">
                                                    <motion.div
                                                        animate={{
                                                            opacity: [0, 0, 1, 1],
                                                            clipPath: [
                                                                "inset(0 0 100% 0)",
                                                                "inset(0 0 100% 0)",
                                                                "inset(0 0 0% 0)",
                                                                "inset(0 0 0% 0)"
                                                            ]
                                                        }}
                                                        transition={{
                                                            duration: totalCycle,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            times: [0, glowStart, glowEnd, 1]
                                                        }}
                                                        className="absolute inset-0 border border-orange-glow/60 rounded-xl shadow-[0_0_15px_rgba(242,140,29,0.2)] bg-orange-glow/[0.04] z-0"
                                                    />

                                                    <div className="flex items-center gap-2 mb-1.5 relative z-10">
                                                        <div className="px-1.5 py-0.5 rounded bg-orange-glow/10 border border-orange-glow/20">
                                                            <span className="text-[9px] font-mono font-bold text-orange-glow uppercase tracking-wider">{step.label}</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-[13px] font-medium text-white/90 leading-tight relative z-10">
                                                        {step.text}
                                                    </p>
                                                    <div className="absolute inset-0 bg-orange-glow/[0.02] opacity-0 group-hover/step:opacity-100 transition-opacity z-20" />
                                                </div>

                                                {stepIndex < pillar.steps.length - 1 && (
                                                    <div className="flex justify-center py-1">
                                                        <div className="h-4 w-[1.5px] bg-ember-brown/20 relative overflow-hidden">
                                                            <motion.div
                                                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-glow to-transparent z-10"
                                                                animate={{ top: ["-100%", "100%"] }}
                                                                transition={{
                                                                    duration: 0.2,
                                                                    repeat: Infinity,
                                                                    repeatDelay: totalCycle - 0.2,
                                                                    delay: stepStartTime + 1.0,
                                                                    ease: "linear"
                                                                }}
                                                            />
                                                            <ArrowDown className="w-3 h-3 text-orange-glow/40 absolute -bottom-1 -left-[5.2px]" />
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
