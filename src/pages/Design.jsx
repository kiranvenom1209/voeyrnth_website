// React import removed
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

import SEO from '../components/SEO';

export default function Design() {
    // ... principles array
    const principles = [
        {
            title: "Silence Is a Feature",
            content: [
                "Most modern systems compete for attention. Vœrynth competes for absence.",
                "Silence is not emptiness. It is the result of correct defaults, predictable systems, and trust in architecture.",
                "Information appears only when it changes meaningfully. Alerts exist only when action is required.",
                "If nothing demands attention, the system remains quiet - by design."
            ]
        },
        {
            title: "Every Motion Has Meaning",
            content: [
                "Motion is never ornamental.",
                "Every transition, fade, or delay exists to indicate system state, hierarchy, or consequence.",
                "There are no playful animations. No decorative gestures. No false feedback.",
                "Movement exists only to communicate certainty."
            ]
        },
        {
            title: "Authority Without Aggression",
            content: [
                "Vœrynth does not shout. It does not demand interaction.",
                "Authority is expressed through calm defaults, predictable behavior, and resistance to accidental action.",
                "Commands are deliberate. Feedback is restrained. Errors are handled quietly, without drama.",
                "The system never pressures the operator - it supports them."
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Design Philosophy & Interface Doctrine"
                description="Silence is a feature. Interfaces meant to disappear. Vœrynth's design doctrine favors restraint, clarity, and authority without aggression."
                canonical="/design"
            />
            <Hero
                title="Design That Behaves"
                subtitle="Authority without aggression."
                bgImage="/assets/design_hero_bg.png"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">
                        At Vœrynth, design is not decoration.
                        It is behavior encoded into form.
                    </p>
                    <p className="mb-4">
                        Interfaces are not meant to impress.
                        They are meant to disappear - until they are needed.
                    </p>
                    <p>
                        Design, in this context, is the discipline of knowing what not to surface.
                    </p>
                </div>
            </Hero>

            {/* Core Principles */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-24">
                    {principles.map((principle, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1.2 }}
                            className="border-l border-[#D4AF37]/20 pl-8 md:pl-12 py-2 hover:border-[#D4AF37]/40 transition-all duration-700"
                        >
                            <h3 className="text-2xl font-light text-white/95 mb-8 leading-relaxed tracking-wide">{principle.title}</h3>
                            <div className="space-y-6">
                                {principle.content.map((paragraph, pIdx) => (
                                    <p key={pIdx} className="text-white/50 leading-loose text-base font-light max-w-2xl">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Designed For Long-Term Use */}
            <Section className="bg-[#0D0D0D] border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light mb-12 leading-relaxed">Designed for Long-Term Use</h2>
                        <div className="text-white/40 text-sm leading-loose font-light space-y-6">
                            <p>
                                Vœrynth is designed for environments that will exist for decades, not upgrade cycles.
                            </p>
                            <p>
                                This demands interfaces that age well, interaction models that remain understandable, and visual language that does not follow trends.
                            </p>
                            <p className="text-white/60 pt-4">
                                The system should feel appropriate today - and still appropriate ten years from now.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* What We Refuse */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light mb-12 leading-relaxed">What We Refuse</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4 text-white/50 leading-loose text-base font-light">
                                <p>We refuse to design for novelty.</p>
                                <p>We do not introduce features because they are fashionable. We do not animate to entertain. We do not gamify control.</p>
                            </div>
                            <div className="space-y-4 text-white/50 leading-loose text-base font-light">
                                <p>We do not prioritize visual excitement over operational clarity.</p>
                                <p className="text-white/70 border-l border-[#D4AF37]/30 pl-4">Design decisions are validated against behavior, not taste.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Design as Constraint */}
            <section className="py-32 bg-[#080808] border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                    >
                        <h2 className="text-2xl font-light mb-8 leading-relaxed text-white/90">Design as Constraint</h2>
                        <div className="text-white/40 leading-loose text-lg font-light space-y-8 max-w-2xl mx-auto">
                            <p>
                                In Vœrynth, design is not applied after engineering. It is a constraint applied before implementation.
                            </p>
                            <p>
                                If a function cannot be expressed calmly, it is rethought. If a workflow introduces ambiguity, it is simplified or removed.
                            </p>
                            <p className="text-[#C9A961] text-xl pt-4">
                                Design exists to protect the operator from the system - not expose them to it.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Quote */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                    >
                        <p className="text-white/40 leading-loose text-2xl font-light italic mb-12 tracking-wide font-serif">
                            &quot;A system earns trust by how little it demands.&quot;
                        </p>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mb-12" />

                        <div className="text-white/30 text-xs tracking-[0.2em] uppercase space-y-2">
                            <p>This Is a Philosophy, Not a Theme</p>
                            <p className="text-white/20 normal-case tracking-normal text-sm font-light pt-4 max-w-lg mx-auto leading-relaxed">
                                Vœrynth does not offer themes or skins. This design philosophy applies uniformly.
                                Design, in Vœrynth, is how the system behaves when nobody is watching.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
