import React from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../components/ui';

import SEO from '../components/core/SEO';

export default function Energy() {
    return (
        <>
            <SEO
                title="Energy Orchestration"
                description="Real-time energy monitoring, load balancing, and optimization for private estates and critical facilities. Independence through intelligence."
                keywords="energy management, smart grid, power resilience, sustainable automation"
                canonical="/energy"
            />
            <Hero
                title="Energy Orchestration"
                subtitle="Intelligence that respects resources."
                bgImage="/assets/energy_hero_v2.webp"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Energy is not a commodity to consume blindly. It is a system to be governed.
                </p>
            </Hero>

            {/* The Energy Reality */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">The Energy Reality</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Modern estates and facilities combine grid supply, solar generation, storage systems, and high, variable loads.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Without orchestration, efficiency becomes accidental.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Mid-page image: Detail */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/energy_detail_v2.webp"
                    alt="Energy Detail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* Vœrynth’s Approach */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Vœrynth’s Approach</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            Vœrynth:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Monitors generation and demand in real time",
                                "Balances loads intelligently",
                                "Prioritizes critical systems",
                                "Optimizes without discomfort"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light italic">
                            All locally. All predictably.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* No Gamification */}
            <Section className="bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">No Gamification</h2>
                        <div className="flex justify-center gap-8 mb-8 text-white/40 text-sm tracking-wide">
                            <span>No charts to admire</span>
                            <span>No scores to chase</span>
                        </div>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Just quiet efficiency that works continuously.
                        </p>
                        <p className="text-white/60 leading-loose text-lg font-light mt-8 border-t border-white/5 pt-8">
                            <strong>Why It Matters:</strong> Because energy independence and stability are no longer optional - they are part of responsible ownership.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Closing Line */}
            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="text-lg text-white/80 font-light tracking-wide mb-2">
                            The most elegant energy system
                        </p>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            is the one you never have to think about.
                        </p>
                    </m.div>
                </div>
            </section>
        </>
    );
}
