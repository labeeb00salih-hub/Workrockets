"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What exactly does GTM automation include?",
        answer: "GTM automation covers your complete go-to-market operations: automated outbound prospecting and follow-ups, SEO/AEO content creation and optimization workflows, CRM data enrichment, proposal generation, and pipeline management. Our GTM engineers build systems that handle everything from lead research to deal closing."
    },
    {
        question: "How is a GTM engineer different from a regular automation consultant?",
        answer: "GTM engineers specialize specifically in B2B technology sales and marketing systems. Unlike general automation consultants, they understand SaaS sales cycles, B2B buyer journeys, and revenue operations. They build strategic automation that drives growth, not just task automation."
    },
    {
        question: "What makes Work Rockets different from other GTM automation agencies?",
        answer: "Work Rockets specializes exclusively in B2B technology companies. Our GTM engineers understand SaaS metrics, tech sales cycles, and developer/IT buyer personas. We're not generalists - we're GTM automation specialists who only work with companies that speak our language."
    },
    {
        question: "What's the typical ROI and timeline for Work Rockets' GTM automation?",
        answer: "Most B2B tech companies see 3x more qualified meetings within 60-90 days, with 50% reduction in manual work. Content automation typically delivers 300% increase in organic traffic within 3-6 months. Full ROI is usually realized within the first quarter after Work Rockets implementation."
    },
    {
        question: "Does Work Rockets only work with large enterprise tech companies?",
        answer: "Work Rockets serves B2B tech companies from $500K ARR to $100M+ ARR. Whether you're a seed-stage SaaS startup or an enterprise software company, our GTM engineers build automation systems that scale with your growth stage and revenue goals."
    },
    {
        question: "What if our current GTM tools don't integrate well with Work Rockets' automation?",
        answer: "Work Rockets' GTM engineers are integration specialists. We've built automation across 50+ different tech stacks - from HubSpot to Salesforce, Clay to Apollo, Webflow to WordPress. If your tools have APIs, we can automate them. If they don't, we'll recommend better alternatives that integrate seamlessly."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-secondary/30"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-secondary/5 focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-dark-3 pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-dark-3 shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-dark-3 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
