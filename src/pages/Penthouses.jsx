import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

export default function Penthouses() {
    return (
        <>
            <Hero
                title="Penthouses"
                subtitle="Precision living, above the noise."
                bgImage="/assets/penthouse_hero.png"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Height demands restraint. What works at ground level does not belong in the sky.
                </p>
            </Hero>

            {/* The Penthouse Reality */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">The Penthouse Reality</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Penthouses amplify everything: light, sound, privacy concerns, expectations.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Control systems must therefore fade, not compete.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Vœrynth’s Approach */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Vœrynth’s Approach</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            For penthouses, Vœrynth prioritizes:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Fewer visible controls",
                                "Context-aware scenes",
                                "Near-silent operation"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/60 text-lg font-light italic">
                            The interface becomes an accent, not a presence.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Mid-page image: Detail */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/penthouse_detail.png"
                    alt="Penthouse Detail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>


            {/* Spatial Intelligence */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Spatial Intelligence</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Vœrynth understands:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Daylight patterns through glass façades",
                                "Wind and thermal gain at elevation",
                                "Acoustic sensitivity in open plans"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Lighting, climate, and shading respond accordingly - without instruction.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Living With It */}
            <Section className="border-t border-white/5 bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Living With It</h2>
                        <p className="text-white/60 leading-loose text-lg font-light mb-4">
                            Guests do not ask how things work. <br />
                            Residents do not think about systems.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light">
                            The penthouse behaves as if it were always meant to function this way.
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
                            The higher you live,
                        </p>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            the less you should need to intervene.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
