import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

export default function Automations() {
    const philosophy = [
        { title: "No automation without consent", desc: "Nothing acts autonomously unless its behavior is understood and desired." },
        { title: "Context over triggers", desc: "Automations respond to situations, not simple events." },
        { title: "Predictable behavior", desc: "If it happens once, it will happen the same way again." },
        { title: "Manual override is sacred", desc: "Human intent always takes precedence." }
    ];

    const examples = [
        "Arrival sequences that adapt to time and weather",
        "Night modes that secure the estate without intrusion",
        "Energy optimization that never compromises comfort",
        "Silent security escalation based on presence anomalies",
        "Environmental balancing across large estates or vessels"
    ];

    const benefits = [
        "Trust is built organically",
        "Behavior feels natural, not imposed",
        "The system evolves with the estate"
    ];

    return (
        <>
            <Hero
                title="Automations"
                subtitle="Orchestration, not spectacle."
                bgImage="/assets/automations_hero_bg.png"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Automation at Vœrynth is not about doing more - it is about doing less, more precisely.
                </p>
            </Hero>

            {/* What Automations Are */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">What Automations Are</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Automations translate intent into behavior across physical systems.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            They coordinate lighting, climate, security, energy, and infrastructure in response to time, presence, conditions, and context - without requiring constant input.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Every automation is purpose-built, never generic.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Automation Philosophy */}
            <Section className="border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-12 text-center leading-relaxed">Automation Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {philosophy.map((item, idx) => (
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

            {/* Examples of Automations */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Examples of Automations</h2>
                    <ul className="space-y-4 mb-8">
                        {examples.map((item, idx) => (
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
                    <p className="text-white/40 text-sm italic font-light">
                        None of these announce themselves. They simply work.
                    </p>
                </div>
            </Section>

            {/* Deployment Approach */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Deployment Approach</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Automations are deployed gradually, observed carefully, and refined over time. <br />
                            There is no “everything at once” moment.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            This ensures:
                        </p>
                        <ul className="space-y-3 mb-6 text-left inline-block">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 leading-relaxed text-sm font-light">
                                    <span className="text-[#C9A961]">•</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Section>

            {/* Why It Matters */}
            <Section className="border-t border-white/5 bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Why It Matters</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Poor automation feels like loss of control.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Vœrynth Automations feel like relief - fewer decisions, fewer interruptions, fewer concerns.
                        </p>
                        <p className="text-white/60 leading-loose text-lg font-light mb-4">
                            The system acts so you don’t have to.
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
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            The best automation is the one you forget exists.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
