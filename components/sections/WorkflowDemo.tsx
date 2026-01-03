"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Bot,
    FileEdit,
    FileText,
    Globe,
    Image as ImageIcon,
    Lightbulb,
    Search,
    Share2
} from "lucide-react";

// Complex Content Creation Workflow
// Flow: Idea -> Keywords -> Outline -> Draft -> AI Polish -> Image Gen -> SEO Check -> Publish
const NODES = [
    { id: "idea", icon: Lightbulb, label: "Topic Idea", x: 50, y: 100 },
    { id: "keywords", icon: Search, label: "Keywords", x: 140, y: 40 },
    { id: "outline", icon: FileText, label: "Outline", x: 140, y: 160 },
    { id: "draft", icon: FileEdit, label: "Drafting", x: 230, y: 100 },
    { id: "polish", icon: Bot, label: "AI Edit", x: 310, y: 100 },
    // Shifted side tasks to avoid vertical overlaps with labels
    { id: "image", icon: ImageIcon, label: "Assets", x: 380, y: 160 },
    { id: "seo", icon: BarChart3, label: "SEO Score", x: 380, y: 40 },
    { id: "publish", icon: Globe, label: "Publish", x: 460, y: 100 },
];

const CONNECTIONS = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    // { from: 4, to: 7 }, // Removed direct line to make it flow through sub-tasks
    { from: 5, to: 7 },
    { from: 6, to: 7 },
];

export function WorkflowDemo() {
    // Using a set to track completed nodes for a purely additive animation
    const [completedNodes, setCompletedNodes] = useState<Set<number>>(new Set());

    useEffect(() => {
        let currentStep = 0;

        const interval = setInterval(() => {
            setCompletedNodes(prev => {
                const next = new Set(prev);
                if (currentStep < NODES.length) {
                    next.add(currentStep);
                    currentStep++;
                } else {
                    next.clear();
                    currentStep = 0; // Reset
                }
                return next;
            });
        }, 800); // Faster cadence for more energy

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gray-950 rounded-2xl relative overflow-hidden p-8 border border-white/5">
            {/* Premium Grid Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }}
            />

            {/* Glow effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="relative w-full max-w-2xl aspect-[5/2] select-none">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    viewBox="0 0 500 200"
                >
                    {CONNECTIONS.map((conn, i) => {
                        const start = NODES[conn.from];
                        const end = NODES[conn.to];

                        // Dynamic bezier curves based on relative positions
                        // Mapping our arbitrary x(0-500), y(0-200) to svg coordinates
                        // We'll treat the container as a flexible viewport.
                        // Let's use exact coordinate values in the path but scale the display to fit.
                        // Actually, SVG viewBox is best approach here.

                        const p1 = `${start.x} ${start.y}`;
                        const p2 = `${end.x} ${end.y}`;

                        // Control points for smooth S-curves (horizontal flow)
                        const midX = (start.x + end.x) / 2;
                        const cp1 = `${midX} ${start.y}`;
                        const cp2 = `${midX} ${end.y}`;

                        const pathData = `M ${p1} C ${cp1}, ${cp2}, ${p2}`;

                        const isFlowing = completedNodes.has(conn.from);

                        return (
                            <g key={i}>
                                {/* Base Line */}
                                <path
                                    d={pathData}
                                    fill="none"
                                    stroke="#333"
                                    strokeWidth="2"
                                />
                                {/* Animated Flow Line */}
                                {isFlowing && (
                                    <motion.path
                                        d={pathData}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0, opacity: 0.5 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "linear" }}
                                    />
                                )}
                            </g>
                        );
                    })}
                </svg>

                {/* Nodes */}
                {NODES.map((node, index) => {
                    // Using fixed 500x200 coordinate space logic
                    const left = `${(node.x / 500) * 100}%`;
                    const top = `${(node.y / 200) * 100}%`;

                    const isCompleted = completedNodes.has(index);

                    return (
                        <motion.div
                            key={node.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10"
                            style={{ left, top }}
                        >
                            <motion.div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isCompleted
                                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                                    : "bg-black text-gray-700 border-gray-800"
                                    }`}
                                animate={isCompleted ? { scale: [1, 1.2, 1] } : {}}
                            >
                                <node.icon className="w-5 h-5" />
                            </motion.div>

                            {/* Floating Label */}
                            <div className={`
                        absolute top-full mt-2 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap transition-all duration-300
                        ${isCompleted ? "bg-white/10 text-white backdrop-blur-md" : "text-gray-600 opacity-50"}
                    `}>
                                {node.label}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Overlay Status */}
            <div className="absolute bottom-6 right-6">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    SYSTEM ACTIVE
                </div>
            </div>
        </div>
    );
}
