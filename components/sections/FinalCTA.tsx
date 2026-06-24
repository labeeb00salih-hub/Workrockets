"use client";

import { useState, FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OrbitingLogos } from "@/components/ui/orbiting-logos";
import { supabase } from "@/lib/supabase";

export const FinalCTA = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const domain = (form.elements.namedItem("domain") as HTMLInputElement).value;

    const { error } = await supabase
      .from("signups")
      .insert([{ name, email, domain }]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("sent");
      form.reset();
    }
  }

  return (
    <section id="contact" className="relative border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="relative z-10 max-w-md">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-text mb-3">
              Become a design partner
            </h2>
            <p className="text-sm text-muted mb-8">
              We&apos;ll get back to you within 24 hours.
            </p>

            {status === "sent" ? (
              <div className="py-6 px-5 rounded-lg border border-blue/20 bg-blue/5">
                <p className="text-text font-medium">Thanks — we&apos;ll be in touch.</p>
                <p className="text-sm text-muted mt-1">Check your inbox within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                    First name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Azeem"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/30 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/30 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-text mb-1.5">
                    Company domain
                  </label>
                  <input
                    id="domain"
                    name="domain"
                    type="text"
                    required
                    placeholder="company.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-text text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/30 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-7 py-3 text-sm font-medium rounded-lg bg-orange text-white hover:bg-orange/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Get started"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-orange">Something went wrong. Try again or email us directly.</p>
                )}
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>

      {/* Half-visible orbiting logos anchored to the right */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[20rem] w-[50rem] h-[50rem]">
        <OrbitingLogos />
      </div>
    </section>
  );
};
