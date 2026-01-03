"use client";

import { motion } from "framer-motion";
import { Bot, FileText, Workflow } from "lucide-react";

const SERVICES = [
    {
        title: "Workflow Automation",
        description: "Streamline repetitive tasks and eliminate manual errors with intelligent automation.",
        icon: Workflow,
    },
    {
        title: "Content at Scale",
        description: "Automate content creation, distribution, and management to scale your operations instantly.",
        icon: FileText,
    },
    {
        title: "Project Management",
        description: "Custom automation workflows that keep your projects on track and your team aligned.",
        icon: Bot,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We build the systems that build your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="p-8 border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
