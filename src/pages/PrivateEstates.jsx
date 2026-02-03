import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';

export default function PrivateEstates() {
    return (
        <>
            <Hero
                title="Private Estates"
                subtitle="Where scale disappears into simplicity."
                bgImage="/assets/estates_hero.png"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Large estates do not fail from lack of technology - they fail when technology refuses to behave like the estate itself.
                </p>
            </Hero>

            {/* The Estate Problem */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">The Estate Problem</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            A private estate is not a house. <br />
                            It is a living system - spread across structures, landscapes, utilities, security zones, and time.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Most automation systems treat estates as bigger apartments. <br />
                            Vœrynth does not.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Mid-page image: Full width interior */}
            <div className="w-full h-[60vh] relative overflow-hidden">
                <img
                    src="/assets/estates_detail.png"
                    alt="Estate Interior"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* What Vœrynth Brings */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">What Vœrynth Brings</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            Vœrynth creates a single coherent control fabric across:
                        </p>
                        <ul className="space-y-4 mb-4">
                            {[
                                "Main residence and guest houses",
                                "Landscape lighting and irrigation",
                                "Security perimeters and internal zones",
                                "Energy generation, storage, and consumption",
                                "Service infrastructure and technical rooms"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/40 text-sm italic font-light mt-8">
                            All without fragmenting control or multiplying interfaces.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Designed for Daily Life */}
            <Section className="border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D]">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Designed for Daily Life</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            The system understands:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Residents vs staff vs guests",
                                "Daily rhythms vs exceptional moments",
                                "Quiet autonomy vs deliberate control"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light">
                            The estate responds appropriately - without needing constant input.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Why It Feels Different */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Why It Feels Different</h2>
                        <div className="flex justify-center gap-8 mb-8 text-white/40 text-sm tracking-wide">
                            <span>No “main panel” anxiety</span>
                            <span>No feature sprawl</span>
                            <span>No fragile dependencies</span>
                        </div>
                        <p className="text-white/60 leading-loose text-lg font-light">
                            The estate feels composed. <br />
                            Even when unoccupied, it behaves with intent.
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
                            An estate should feel expansive  -
                        </p>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            not complicated.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
