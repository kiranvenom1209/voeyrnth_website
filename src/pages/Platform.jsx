import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

import SEO from '../components/SEO';

export default function Platform() {
    const layers = [
        {
            name: "Vœrynth Interface",
            intro: "The interface is intentionally restrained. It presents only what is necessary, when it is necessary - never raw system state.",
            description: "Operators interact with intent, not implementation.",
            color: "text-[#C9A961]",
            bgColor: "bg-[#C9A961]/5",
            borderColor: "border-[#C9A961]/20"
        },
        {
            name: "Reasoning Core",
            intro: "The reasoning core handles local context, memory, and decision evaluation. It does not guess, hallucinate, or optimize unpredictably.",
            description: "When intelligence is used, it is bounded, auditable, and subordinate to deterministic rules.",
            color: "text-white/80",
            bgColor: "bg-white/[0.03]",
            borderColor: "border-white/10"
        },
        {
            name: "State Engine",
            intro: "The state engine maintains a real-time model of the environment - devices, rules, conditions, and dependencies.",
            description: "Every automation is evaluated against explicit state, not assumptions. This allows predictable behavior even under partial failure.",
            color: "text-white/65",
            bgColor: "bg-white/[0.02]",
            borderColor: "border-white/8"
        },
        {
            name: "Translation Core",
            intro: "The translation core exists to isolate protocol volatility from the rest of the system. Field protocols evolve. Architectures should not break because of it.",
            description: "This layer ensures hardware changes do not ripple upward.",
            color: "text-white/50",
            bgColor: "bg-white/[0.015]",
            borderColor: "border-white/6"
        },
        {
            name: "Hard Metal",
            intro: "The physical layer is treated with the same seriousness as software. Power paths, relays, sensors, and safety mechanisms are designed to fail safely - not silently.",
            description: "When software fails, the environment remains stable.",
            color: "text-white/35",
            bgColor: "bg-white/[0.01]",
            borderColor: "border-white/5"
        }
    ];

    const principles = [
        {
            title: "Deterministic first",
            text: "Systems behave the same way today, tomorrow, and five years from now - regardless of network conditions or updates."
        },
        {
            title: "Local-first by default",
            text: "Core operation does not depend on external connectivity. Cloud services, when used, enhance rather than replace local control."
        },
        {
            title: "Failure containment",
            text: "Subsystems are isolated so that faults remain local instead of propagating across the environment."
        },
        {
            title: "Auditability over convenience",
            text: "Every meaningful action can be traced, reviewed, and understood - even years later."
        }
    ];

    return (
        <>
            <SEO
                title="The Platform Architecture"
                description="Vœrynth's iceberg architecture separates interface, reasoning, and state. An industrial-grade control foundation designed to isolate failure."
                canonical="/platform"
            />
            <Hero
                title="The Platform"
                subtitle="Architecture built for environments that cannot afford drama."
                bgImage="/assets/platform_hero_bg.png"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">
                        Vœrynth is not a layer added on top of a house.
                        It is an underlying control architecture designed the same way critical machines are designed - with isolation, predictability, and failure containment as first principles.
                    </p>
                    <p>
                        Every decision in the platform favors long-term stability over short-term convenience.
                    </p>
                </div>
            </Hero>

            {/* The Iceberg Architecture - Full */}
            <section className="bg-gradient-to-b from-[#080808] to-[#0A0A0A] border-y border-[#D4AF37]/10 py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-light mb-6 leading-relaxed">The Iceberg Architecture</h2>
                        <p className="text-white/40 leading-loose text-sm mb-12 max-w-2xl mx-auto">
                            Most control platforms expose everything at the surface and call it intelligence. <br />
                            Vœrynth is structured differently.
                        </p>
                        <p className="text-white/40 leading-loose text-sm mb-12 max-w-2xl mx-auto">
                            The visible interface is only a small part of the system.
                            The real work happens beneath - in layers designed to absorb complexity, isolate failure, and preserve calm at the surface.
                        </p>
                    </motion.div>

                    <div className="space-y-6 mb-16">
                        {layers.map((layer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 1.0 }}
                                className={`${layer.bgColor} ${layer.borderColor} border p-8 backdrop-blur-sm hover:border-opacity-40 transition-all duration-700`}
                            >
                                <h3 className={`${layer.color} text-xl font-medium mb-4 tracking-wide`}>{layer.name}</h3>
                                <div className="space-y-4">
                                    <p className="text-white/60 text-base leading-loose font-light">{layer.intro}</p>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{layer.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-white/50 text-base leading-loose font-light italic">
                            Failure is expected. Cascading failure is not.
                        </p>
                    </div>
                </div>
            </section>

            {/* Operating Principles */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light mb-12 text-center leading-relaxed">Operating Principles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {principles.map((principle, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.9 }}
                                className="p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/20 hover:bg-white/[0.015] transition-all duration-700"
                            >
                                <h3 className="text-white/90 text-lg font-normal mb-4">{principle.title}</h3>
                                <p className="text-white/50 text-sm leading-loose font-light">{principle.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* What Vœrynth Is Not */}
            <Section className="bg-[#0D0D0D] border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light mb-12 leading-relaxed">What Vœrynth Is Not</h2>
                        <ul className="space-y-4 mb-4 inline-block text-left">
                            {[
                                "Vœrynth is not a consumer smart-home product",
                                "It is not a cloud dashboard controlling fragile devices",
                                "It is not driven by novelty features or trends",
                                "It is not optimized for speed of deployment at the cost of reliability"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/60 leading-loose text-lg font-light mt-8">
                            It is built to behave like infrastructure - quiet, dependable, and boring in the best possible way.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Engineering Ethos */}
            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                    >
                        <h2 className="text-lg text-white/80 font-light tracking-wide mb-6">
                            Built Like a Machine, Not an App
                        </h2>
                        <div className="space-y-4 text-white/40 text-sm leading-loose font-light">
                            <p>
                                Vœrynth borrows its philosophy from industrial control systems, aviation, and mission-critical environments.
                            </p>
                            <p>
                                Interfaces may change. Hardware may evolve. The architecture remains.
                            </p>
                            <p className="text-[#C9A961] pt-4">
                                This is how systems earn trust over decades.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
