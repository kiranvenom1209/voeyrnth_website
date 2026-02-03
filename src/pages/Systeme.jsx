import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

export default function Systeme() {
    const principles = [
        { title: "Architecture before automation", desc: "Nothing is automated unless it is first understood, mapped, and structured." },
        { title: "Determinism over guesswork", desc: "Every action has a defined cause, path, and outcome - no hidden states, no surprises." },
        { title: "Failure as a design input", desc: "Power loss, network interruption, component degradation - all are assumed, modeled, and gracefully handled." },
        { title: "Longevity by design", desc: "Système is built to function for decades, not product cycles." }
    ];

    const coverage = [
        "Electrical and low-voltage architecture",
        "Network topology and segmentation",
        "Control cabinet design and thermal planning",
        "Redundancy strategies and fallback modes",
        "Vendor abstraction and component independence",
        "Compliance with regional electrical and safety standards"
    ];

    const benefits = [
        "The system behaves the same on day 1 and year 10",
        "Upgrades do not destabilize existing behavior",
        "Maintenance can be performed without disruption",
        "Control never depends on a single device, service, or cloud"
    ];

    return (
        <>
            <Hero
                title="Système"
                subtitle="Infrastructure, built to last."
                bgImage="/assets/systeme_hero_bg.png"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Système is the invisible foundation beneath Vœrynth. It is where engineering discipline replaces improvisation - and where reliability is designed, not hoped for.
                </p>
            </Hero>

            {/* What Système Is */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">What Système Is</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Système is the architectural backbone of every Vœrynth deployment.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            It governs how systems are structured, how failures are absorbed, and how complexity is kept under control. Long before interfaces, automation routines, or intelligence layers come into play, Système defines how the estate thinks mechanically.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light">
                            This layer is intentionally conservative. It values predictability over novelty, clarity over cleverness, and longevity over fashion.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Principles of Système */}
            <Section className="border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-12 text-center leading-relaxed">Principles of Système</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {principles.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: idx * 0.1 }}
                                className="p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-500"
                            >
                                <h3 className="text-[#C9A961] text-base mb-3 font-medium tracking-wide">{item.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>


            {/* What Système Covers */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">What Système Covers</h2>
                    <ul className="space-y-4 mb-12">
                        {coverage.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.05 }}
                                className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light"
                            >
                                <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <p className="text-white/30 text-sm italic font-light">
                        Nothing here is visible to the end user - and that is precisely the point.
                    </p>
                </div>
            </Section>

            {/* Why It Matters */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Why It Matters</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            Luxury estates fail not because of bad interfaces, but because of bad foundations. <br />
                            Système ensures that:
                        </p>
                        <ul className="space-y-3 mb-12 text-left inline-block mx-auto">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 leading-relaxed text-sm font-light">
                                    <span className="text-[#C9A961]">•</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/60 leading-loose text-lg font-light mb-4">
                            This is infrastructure that remains calm even when everything else fails.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Closing Line */}
            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                    >
                        <p className="text-lg text-white/80 font-light tracking-wide mb-2">
                            Système is not designed to impress.
                        </p>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            It is designed so nothing ever needs to.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
