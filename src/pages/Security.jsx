import React from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../components/ui';

import SEO from '../components/core/SEO';

export default function Security() {
    return (
        <>
            <SEO
                title="Security & Privacy - Beyond Cameras"
                description="Security that understands presence, not just motion. A layered, private-by-default approach to estate surveillance and protection."
                keywords="estate security, surveillance, presence detection, private security"
                canonical="/security"
            />
            <Hero
                title="Security & Surveillance"
                subtitle="Awareness without paranoia."
                bgImage="/assets/security_hero_v2.webp"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    True security is composed, not reactive.
                </p>
            </Hero>

            {/* Beyond Cameras */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Beyond Cameras</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Vœrynth security is not about watching - it is about understanding presence.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            The system distinguishes normal patterns, deviations, and escalation thresholds.
                        </p>
                        <p className="text-white/40 text-sm italic font-light">
                            Without constant alerts or false urgency.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Mid-page image: Detail */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/security_detail_v2.webp"
                    alt="Security Detail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* Layered Security Model */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Layered Security Model</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Physical access control",
                                "Presence detection",
                                "Zone-based behavior rules",
                                "Silent escalation paths",
                                "Full auditability"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Every action is traceable. Nothing is hidden.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Designed for Discretion */}
            <Section className="bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Designed for Discretion</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            No flashing warnings. No aggressive notifications. <br />
                            Security remains in the background - until it is genuinely required.
                        </p>
                        <p className="text-white/60 leading-loose text-lg font-light border-t border-white/5 pt-8">
                            <strong>Why Clients Choose It:</strong> Because it protects without altering the character of the space.
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
                        <h3 className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                            Security should reassure.
                            <br />
                            <span className="text-[#C9A961]">Not remind you that it exists.</span>
                        </h3>
                    </m.div>
                </div>
            </section>
        </>
    );
}
