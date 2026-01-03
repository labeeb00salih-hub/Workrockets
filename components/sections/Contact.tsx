"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Ready to Automate?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-md">
                        Stop wasting time on repetitive tasks. Let Work Rockets build the infrastructure your business needs to scale.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">1</span>
                            <span>Review your current workflows</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">2</span>
                            <span>Identify automation opportunities</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">3</span>
                            <span>Launch your custom solution</span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                >
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <Send className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-6 text-sm font-medium underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                    placeholder="jane@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    How can we help? (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none"
                                    placeholder="Tell us about your workflow..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
