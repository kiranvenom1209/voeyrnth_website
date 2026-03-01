import React from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../components/ui';

import SEO from '../components/core/SEO';

export default function OS() {
    const philosophy = [
        { title: "Silence is a feature", desc: "Information appears only when relevant. Absence is intentional." },
        { title: "Familiar, not futuristic", desc: "The interface feels timeless - closer to a well-designed instrument than a gadget." },
        { title: "Authority without aggression", desc: "The system never demands attention. It waits." },
        { title: "One action, one consequence", desc: "Every interaction produces a clear, predictable result." }
    ];

    const controls = [
        "Lighting scenes and environmental orchestration",
        "Climate and air quality",
        "Security states and access modes",
        "Energy visibility and system health",
        "Contextual controls for rooms, zones, and moments"
    ];

    const benefits = [
        "Anyone can operate the estate without instruction",
        "Guests never feel overwhelmed",
        "Owners never feel managed by their own system"
    ];

    return (
        <>
            <SEO
                title="Vœrynth OS - Interface"
                description="A human interface layer built for clarity and restraint. It removes friction, reduces decision fatigue, and presents control only when necessary."
                keywords="voerynth os, human interface, control panel, smart home os"
                canonical="/os"
            />
            <Hero
                title="OS"
                subtitle="Control, without cognitive noise."
                bgImage="/assets/os_hero_bg_v2.webp"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    OS is how you experience Vœrynth - not as software, but as a composed presence within your space.
                </p>
            </Hero>

            {/* What OS Is */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">What OS Is</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Vœrynth OS is the human interface layer - the point where infrastructure becomes interaction.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            It does not attempt to showcase technology. Instead, it removes friction, reduces decision fatigue, and presents control only when control is appropriate.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light">
                            The OS is intentionally restrained. It favors clarity, spacing, and calm feedback over dense dashboards or constant animation.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Design Philosophy */}
            <Section className="border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-12 text-center leading-relaxed">Design Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {philosophy.map((item, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: idx * 0.1 }}
                                className="p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-200"
                            >
                                <h3 className="text-[#C9A961] text-base mb-3 font-medium tracking-wide">{item.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* What OS Controls */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">What OS Controls</h2>
                    <ul className="space-y-4 mb-8">
                        {controls.map((item, idx) => (
                            <m.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.05 }}
                                className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light"
                            >
                                <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                <span>{item}</span>
                            </m.li>
                        ))}
                    </ul>
                    <p className="text-white/40 text-sm font-light">
                        Whether accessed via wall panels, mobile devices, or dedicated terminals, the experience remains consistent.
                    </p>
                </div>
            </Section>

            {/* Intelligence, Used Sparingly */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Intelligence, Used Sparingly</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Vœrynth OS may incorporate adaptive logic - but never theatrics.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Patterns are learned quietly. Adjustments are subtle. The system adapts without announcing itself.
                        </p>
                        <p className="text-white/40 leading-loose text-sm italic font-light">
                            There are no gimmicks, no voices shouting instructions, no “smart home theater.”
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Why It Matters */}
            <Section className="border-t border-white/5 bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Why It Matters</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            In high-value residences, complexity is the enemy of comfort. <br />
                            OS ensures:
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
                            It feels less like software - and more like the estate simply knows.
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
                            OS does not try to be intelligent.
                        </p>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            It tries to be considerate.
                        </p>
                    </m.div>
                </div>
            </section>
        </>
    );
}
