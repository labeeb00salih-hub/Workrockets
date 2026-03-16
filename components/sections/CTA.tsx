"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-32 bg-dark-3 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    Audit My GTM Systems
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    See how we can <span className="text-secondary font-bold">3x your GTM results</span> with <span className="text-white font-bold">50% less manual work</span>.
                </p>

                <div className="flex flex-col items-center">
                    <Button
                        size="lg"
                        className="rounded-full px-12 py-8 text-xl font-bold bg-secondary text-white hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl shadow-secondary/20"
                    >
                        Book Your Audit
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>

                    <div className="mt-6 flex flex-col md:flex-row items-center gap-4 text-sm font-medium text-gray-400">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Free
                        </span>
                        <span className="hidden md:block">•</span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 30 minutes
                        </span>
                        <span className="hidden md:block">•</span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Custom plan
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
