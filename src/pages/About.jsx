// React import removed
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

import SEO from '../components/SEO';

export default function About() {
    return (
        <>
            <SEO
                title="About - Philosophy & Origin"
                description="An engineering-led initiative to build long-lived control infrastructure. We do not design for novelty. We build for decades."
                canonical="/about"
            />
            <Hero
                title="About Vœrynth"
                subtitle="A systems brand built on restraint, reliability, and long-term thinking."
                bgImage="/assets/about_hero_bg.png"
            />

            {/* Who We Are */}
            <Section>
                <div className="max-w-3xl mx-auto space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Who We Are</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>
                                Vœrynth is an independent, engineering-led initiative focused on building long-lived control systems for complex environments.
                            </p>
                            <div className="border-l border-[#D4AF37]/30 pl-6 py-2 space-y-2">
                                <p>We do not operate at mass scale.</p>
                                <p>We do not design for novelty.</p>
                            </div>
                            <p>
                                We work deliberately, selectively, and with responsibility  -  treating every system as infrastructure that must remain dependable long after initial deployment.
                            </p>
                            <p>
                                Vœrynth exists to serve environments where composure matters more than features, and where technology must earn trust quietly over time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Where Vœrynth Comes From */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Where Vœrynth Comes From</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>
                                Vœrynth did not begin as a commercial product.
                            </p>
                            <p>
                                It began as a personal project  -  the careful design of a home system built to live with, not demonstrate.
                                A system that would remain reliable under stress, understandable years later, and calm in daily use.
                            </p>
                            <p>
                                As the system matured, it absorbed lessons from professional engineering practice:
                                architecture before devices, determinism before intelligence, documentation before automation.
                            </p>
                            <p>
                                What started as a private environment evolved into a framework  -  shaped by real constraints, real failure modes, and real responsibility.
                            </p>
                            <p className="text-white/70 pt-2">
                                Vœrynth exists because those lessons deserved to be preserved, formalized, and applied beyond a single home.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Why Vœrynth Exists - Darker Background */}
            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Why Vœrynth Exists</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light mb-12">
                            <p>
                                Modern automation increasingly trades reliability for novelty.
                            </p>
                            <p>
                                Systems are assembled from fragile components, dependent on constant connectivity, opaque updates, and interfaces that demand attention instead of reducing friction.
                            </p>
                            <p className="text-white/80">Vœrynth exists to reverse that trend.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">We believe intelligent systems should:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Remain functional without connectivity",
                                        "Behave predictably under stress",
                                        "Communicate only when meaningfully necessary",
                                        "Age gracefully, without requiring constant intervention"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/60 leading-relaxed text-sm font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center border-l border-white/5 pl-8">
                                <p className="text-white/40 italic font-light text-lg">
                                    &quot;This philosophy is not aspirational. It is enforced through architecture.&quot;
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* What Makes Vœrynth Different & Philosophy */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-12 leading-relaxed">What Makes Vœrynth Different</h2>
                        <div className="text-white/60 leading-loose text-lg font-light space-y-2 mb-12">
                            <p>Vœrynth is distinguished not by features, but by discipline.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Systems before interfaces</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Control architecture precedes presentation.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Local-first by design</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Core operation does not depend on external services.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Deterministic where it matters</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Predictability is prioritized over novelty.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">No decorative technology</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Every element must justify its presence through behavior.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm font-light italic mt-12 text-center max-w-2xl mx-auto border-t border-white/5 pt-8">
                            We do not add intelligence to fragile systems. We design systems that can safely support intelligence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-12 leading-relaxed text-center">Our Philosophy</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center px-4">
                            <div className="space-y-4 p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-500">
                                <h3 className="text-white/90 text-lg font-light">Silence is a feature.</h3>
                                <p className="text-white/40 text-sm leading-relaxed">Information appears only when it changes meaningfully.</p>
                            </div>
                            <div className="space-y-4 p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-500">
                                <h3 className="text-white/90 text-lg font-light">Restraint is intelligence.</h3>
                                <p className="text-white/40 text-sm leading-relaxed">Complexity is absorbed by the system, not exposed to the operator.</p>
                            </div>
                            <div className="space-y-4 p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-500">
                                <h3 className="text-white/90 text-lg font-light">Authority without aggression.</h3>
                                <p className="text-white/40 text-sm leading-relaxed">A system earns trust through calm, predictable behavior.</p>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm font-light italic mt-12 text-center">
                            These principles guide every design decision  -  from hardware layout to interface behavior.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* How We Work & Who It Is For */}
            <section className="py-24 bg-[#080808] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="grid md:grid-cols-2 gap-16"
                    >
                        <div>
                            <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">How We Work</h2>
                            <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                                <p>We design systems as long-term infrastructure, not installations.</p>
                                <p>Every engagement begins with architecture, not devices. Failure modes are considered before features. Documentation, auditability, and clarity matter more than speed.</p>
                                <p>We design for environments that must continue functioning quietly  -  even when nobody is watching.</p>
                                <p className="text-white/70 italic">This approach results in systems that are not impressive in demonstration, but reassuring in daily life.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Who Vœrynth Is Built For</h2>
                            <div className="space-y-6">
                                <ul className="space-y-4 mb-6">
                                    {[
                                        "Reliability over novelty",
                                        "Restraint over spectacle",
                                        "Systems that disappear into daily life"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-white/40 text-sm leading-loose font-light">
                                    It is appreciated by those responsible for maintaining complex environments  -  estate managers, captains, operators  -  who understand that the best systems are the ones that do not demand explanation.
                                </p>
                                <p className="text-white/30 text-xs leading-loose font-light border-t border-white/5 pt-4">
                                    Vœrynth is not designed for rapid experimentation, trend-driven technology, or environments that reward constant change.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Closing Note */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0A0A0A]" />
                <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                    >
                        <p className="text-white/60 leading-loose text-lg font-light mb-8">
                            Vœrynth is built for environments that demand reliability, privacy, and composure.
                        </p>
                        <h3 className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12">
                            It is not designed to impress at first glance.
                            <br />
                            <span className="text-[#C9A961]">It is designed to be trusted over time.</span>
                        </h3>
                        <div className="w-16 h-[1px] bg-white/10 mx-auto mb-12" />
                        <p className="text-white/40 text-sm tracking-[0.2em] uppercase">
                            Your Estate, Thoughtfully Elevated.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
