import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/ui';

import SEO from '../components/core/SEO';

export default function IndustrialSuites() {
    return (
        <>
            <SEO
                title="Industrial Suites Control"
                description="Clear, reliable control for industrial environments. Vœrynth filters signal from noise, ensuring operators see what matters when it matters."
                keywords="industrial automation, commercial control systems, enterprise iot, building management system, commercial automation"
                canonical="/industrial-suites"
            />
            <Hero
                title="Industrial Suites"
                subtitle="Clarity, where complexity is unavoidable."
                bgImage="/assets/industrial_hero.webp"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Industrial environments demand seriousness - not spectacle.
                </p>
            </Hero>

            {/* The Industrial Challenge */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">The Industrial Challenge</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Factories, labs, and technical facilities generate massive volumes of data and constant operational signals with high consequences for failure.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Most systems either overwhelm or oversimplify.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Mid-page image: Detail */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/industrial_detail.webp"
                    alt="Industrial Detail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* Vœrynth’s Role */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Vœrynth’s Role</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-4">
                            Vœrynth filters signal from noise. Operators see:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "What matters",
                                "When it matters",
                                "In a form that supports action"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/60 text-lg font-light italic">
                            Not dashboards for dashboards’ sake.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Designed for Responsibility */}
            <Section className="bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Designed for Responsibility</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Clear state awareness",
                                "Logged actions and traceability",
                                "Role-based access",
                                "Calm visual language"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light">
                            The system supports judgment - it does not replace it.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mt-8 border-t border-white/5 pt-8">
                            <strong>Why It Works:</strong> Because it treats operators as professionals, not users.
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
                            When decisions carry weight,
                        </p>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            clarity becomes a safety feature.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
