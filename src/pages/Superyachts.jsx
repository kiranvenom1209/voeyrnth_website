import React from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../components/ui';

import SEO from '../components/core/SEO';

export default function Superyachts() {
    return (
        <>
            <SEO
                title="Superyacht Systems"
                description="Fully offline, redundant control for maritime environments. Systems that remain sovereign and do not depend on connectivity."
                keywords="marine automation, yacht control, offline systems, superyacht technology, smart system for rv, expedition vehicle automation, smart boat system"
                canonical="/superyachts"
            />
            <Hero
                title="Superyachts"
                subtitle="Control that respects the sea."
                bgImage="/assets/yacht_hero_v2.webp"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    At sea, assumptions fail quickly. Systems must be sovereign.
                </p>
            </Hero>

            {/* The Maritime Constraint */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">The Maritime Constraint</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Connectivity is inconsistent. Conditions change rapidly. Failure tolerance is non-negotiable.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Yacht systems cannot rely on cloud presence, constant bandwidth, or remote dependencies.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Vœrynth at Sea */}
            <Section className="border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D]">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Vœrynth at Sea</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            Vœrynth operates:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Fully offline",
                                "With layered redundancy",
                                "With deterministic behavior under stress"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/60 text-lg font-light italic">
                            Control remains local. Decisions remain onboard.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Mid-page image: Detail */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/yacht_detail_v2.webp"
                    alt="Yacht Detail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* Integrated Domains */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Integrated Domains</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Lighting and ambiance across decks",
                                "Climate zoning with maritime awareness",
                                "Security states while docked or underway",
                                "Energy generation and load balancing",
                                "Crew-access separation from owner domains"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Everything functions as a single vessel intelligence, not siloed subsystems.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Why Owners Trust It */}
            <Section className="border-t border-white/5 bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Why Owners Trust It</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-4">
                            Because nothing essential depends on:
                        </p>
                        <div className="flex justify-center gap-6 mb-8 text-white/40 text-sm tracking-wide flex-wrap">
                            <span>External servers</span>
                            <span>Subscription services</span>
                            <span>Remote approval</span>
                        </div>
                        <p className="text-white/60 leading-loose text-lg font-light">
                            The yacht remains autonomous - as it should.
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
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            The sea rewards systems that do not ask for permission.
                        </p>
                    </m.div>
                </div>
            </section>
        </>
    );
}
