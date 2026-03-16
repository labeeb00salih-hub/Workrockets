"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Folder, FileText, Clock, AlertCircle, CheckCircle2, Zap, Database, Network } from "lucide-react";

export const RealityCheck = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 bg-deep-shadow overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Workrockets Transformation</h2>
                </div>

                <div
                    className="relative w-full max-w-5xl mx-auto min-h-[500px] md:min-h-[550px] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group select-none bg-[#0F0A09] transition-all duration-500 hover:shadow-[0_0_50px_rgba(242,140,29,0.15)] hover:border-orange-glow/30"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(!isHovered)}
                >
                    <AnimatePresence>
                        {/* === BEFORE SCENARIO === */}
                        {!isHovered && (
                            <motion.div 
                                key="before"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#150D0C] flex flex-col items-center justify-center p-8 z-10 w-full h-full"
                            >
                                {/* Background Chaos Noise */}
                                <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
                                    <ChaosIcon Icon={Folder} className="top-[15%] left-[20%]" delay={0} />
                                    <ChaosIcon Icon={Clock} className="top-[70%] left-[15%]" delay={1} />
                                    <ChaosIcon Icon={Users} className="top-[45%] right-[25%]" delay={1.5} />
                                    <ChaosIcon Icon={Network} className="top-[25%] right-[10%]" delay={0.5} />
                                    <ChaosIcon Icon={AlertCircle} className="bottom-[20%] right-[20%]" delay={2} />
                                    
                                    {/* Messy Background Lines */}
                                    <svg className="absolute inset-0 w-full h-full stroke-red-500/10 stroke-[1px] fill-none" preserveAspectRatio="none">
                                        <path d="M 20% 20% Q 50% 10% 80% 30% T 90% 80%" strokeDasharray="4 4" />
                                        <path d="M 10% 80% Q 40% 90% 60% 50% T 30% 10%" strokeDasharray="2 6" />
                                        <path d="M 15% 50% L 85% 50%" strokeDasharray="1 8" />
                                    </svg>
                                </div>
                                
                                <div className="relative z-10 w-full flex flex-col items-center h-full justify-center pointer-events-none">
                                    {/* Top Diagram */}
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 w-full">
                                        <ScenarioNode Icon={FileText} label="Scattered Data" state="before" />
                                        <div className="hidden md:block py-4"><ScenarioLine state="before" /></div>
                                        <ScenarioNode Icon={Users} label="Overwhelmed Teams" state="before" />
                                        <div className="hidden md:block py-4"><ScenarioLine state="before" /></div>
                                        <ScenarioNode Icon={AlertCircle} label="Missed Targets" state="before" />
                                    </div>

                                    {/* Bottom Text */}
                                    <div className="text-center flex flex-col items-center max-w-2xl px-4">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] md:text-[11px] uppercase font-black tracking-widest mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                                            Before: Fragmented Tooling
                                        </span>
                                        <h3 className="text-white/60 text-lg md:text-3xl font-bold leading-relaxed tracking-wide text-center">
                                            Sales teams lose <span className="text-red-500/70 underline decoration-red-500/30 underline-offset-8">4+ hours daily</span> navigating<br className="hidden md:block"/>disjointed data silos and manual tasks.
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* === AFTER SCENARIO === */}
                        {isHovered && (
                            <motion.div 
                                key="after"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#0F0A09] flex flex-col items-center justify-center p-8 z-20 w-full h-full pointer-events-none"
                            >
                                {/* Clean Radial Background */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,140,29,0.12)_0%,transparent_60%)]" />

                                <div className="relative z-10 w-full flex flex-col items-center h-full justify-center">
                                    {/* Top Diagram */}
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 w-full">
                                        <ScenarioNode Icon={Database} label="Unified Intent" state="after" />
                                        <div className="hidden md:block py-4"><ScenarioLine state="after" /></div>
                                        <ScenarioNode Icon={Zap} label="AI Agents" state="after" />
                                        <div className="hidden md:block py-4"><ScenarioLine state="after" /></div>
                                        <ScenarioNode Icon={CheckCircle2} label="Closed Won" state="after" />
                                    </div>

                                    {/* Bottom Text */}
                                    <div className="text-center flex flex-col items-center max-w-3xl px-4">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-glow/15 border border-orange-glow/30 text-orange-glow text-[10px] md:text-[11px] uppercase font-black tracking-widest mb-6 shadow-[0_0_20px_rgba(242,140,29,0.2)] animate-pulse">
                                            After: Workrockets Auto-GTM
                                        </span>
                                        <h3 className="text-white text-lg md:text-3xl font-bold leading-relaxed tracking-wide text-center">
                                            AI runs personalized multi-channel outreach <br className="hidden md:block"/><span className="text-orange-glow underline decoration-orange-glow/40 underline-offset-8 mt-2 inline-block">24/7 fully autonomously</span>. Predictable scale.
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Interaction Hint (Optional) */}
                    <div className="absolute bottom-6 right-6 z-30 pointer-events-none">
                        <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${isHovered ? 'text-orange-glow' : 'text-white/30'}`}>
                            <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-orange-glow animate-ping' : 'bg-white/30'}`} />
                            Hover to Streamline
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
                    <StatBox label="Manual Overhead" value="High Friction" type="chaos" isActive={!isHovered} />
                    <StatBox label="Lead Coverage" value="Limited Capacity" type="chaos" isActive={!isHovered} />
                    <StatBox label="Human + AI Synergy" value="100% Full-Cycle" type="clean" isActive={isHovered} />
                    <StatBox label="Revenue Yield" value="Predictable Scale" type="clean" isActive={isHovered} />
                </div>
            </div>
        </section>
    );
};

// ... Rest of the helper components modified for hover states

const ChaosIcon = ({ Icon, className, delay }: { Icon: any, className: string, delay: number }) => (
    <motion.div
        animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className={`absolute p-4 rounded-2xl bg-white/[0.03] border border-white/10 ${className}`}
    >
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white opacity-20" />
    </motion.div>
);

const ScenarioNode = ({ Icon, label, state }: { Icon: any, label: string, state: 'before' | 'after' }) => (
    <div className="flex flex-col items-center gap-3 w-[100px] md:w-32 flex-shrink-0">
        <div className={`p-4 md:p-6 rounded-2xl border flex items-center justify-center w-16 h-16 md:w-24 md:h-24 transition-all duration-500
            ${state === 'after' ? 'bg-[#1D1109] border-orange-glow/60 shadow-[0_0_40px_rgba(242,140,29,0.3)] scale-105' : 'bg-[#2A1816] border-red-500/20 hover:border-red-500/40'}`}>
            <Icon className={`w-8 h-8 md:w-12 md:h-12 ${state === 'after' ? 'text-orange-glow' : 'text-red-500/40'}`} />
        </div>
        <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-widest text-center whitespace-nowrap
            ${state === 'after' ? 'text-orange-glow' : 'text-red-500/50'}`}>
            {label}
        </span>
    </div>
);

const ScenarioLine = ({ state }: { state: 'before' | 'after' }) => (
    <div className={`w-8 md:w-24 h-[2px] relative flex-shrink-0 overflow-hidden
        ${state === 'after' ? 'bg-ember-brown/30' : 'bg-transparent'}`}>
        {state === 'after' ? (
            <motion.div
                className="absolute top-0 left-0 h-full w-full bg-orange-glow/80 shadow-[0_0_10px_rgba(242,140,29,0.8)]"
                animate={{ left: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        ) : (
            <div className="absolute top-0 left-[50%] -translate-x-1/2 h-full w-[120%] border-t-[2px] border-dotted border-red-500/30" />
        )}
    </div>
);

const StatBox = ({ label, value, type, isActive }: { label: string, value: string, type: 'chaos' | 'clean', isActive: boolean }) => (
    <div className={`p-4 md:p-6 rounded-3xl border text-center transition-all duration-500 
        ${type === 'chaos' ? 
            (isActive ? 'bg-white/[0.04] border-white/10 shadow-lg' : 'bg-white/[0.01] border-white/5 opacity-50') : 
            (isActive ? 'bg-orange-glow/[0.05] border-orange-glow/20 shadow-[0_0_20px_rgba(242,140,29,0.1)] scale-105' : 'bg-orange-glow/[0.01] border-orange-glow/5 opacity-40')}`}>
        <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2 md:mb-3 transition-colors duration-500 
            ${type === 'chaos' ? (isActive ? 'text-white/40' : 'text-white/10') : (isActive ? 'text-orange-glow' : 'text-orange-glow/20')}`}>
            {label}
        </p>
        <p className={`text-sm md:text-lg font-bold transition-colors duration-500 
            ${type === 'chaos' ? (isActive ? 'text-white' : 'text-white/20') : (isActive ? 'text-white' : 'text-white/40')}`}>
            {value}
        </p>
    </div>
);
