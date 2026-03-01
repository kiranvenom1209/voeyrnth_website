import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building2, Ship, Factory, Shield, Zap } from 'lucide-react';
import { Hero, Section, Card } from '../components/ui';

import SEO from '../components/core/SEO';

export default function Solutions() {
    // ... existing layer constants ...
    const solutions = [
        {
            title: "Private Estates",
            description: "Unified control for complex properties.",
            hoverText: "Multi-structure, long-lifecycle environments with zero tolerance for chaos.",
            icon: Home,
            bgImage: "/assets/sol_card_estate.webp",
            link: "/private-estates"
        },
        // ... (rest of solutions array, keeping it collapsed for brevity if tool supports, otherwise I will just replace the top)
        {
            title: "Penthouses",
            description: "Minimal interface. Maximum orchestration.",
            hoverText: "Dense urban residences where restraint and reliability are paramount.",
            icon: Building2,
            bgImage: "/assets/sol_card_penthouse.webp",
            link: "/penthouses"
        },
        {
            title: "Superyachts",
            description: "Offline capability. Layered safety.",
            hoverText: "Mobile, autonomous systems designed to function beyond connectivity.",
            icon: Ship,
            bgImage: "/assets/sol_card_yacht.webp",
            link: "/superyachts"
        },
        {
            title: "Industrial Suites",
            description: "Operator-grade monitoring without noise.",
            hoverText: "Operator-grade environments requiring auditability and predictability.",
            icon: Factory,
            bgImage: "/assets/sol_card_industrial.webp",
            link: "/industrial-suites"
        },
        {
            title: "Security & Surveillance",
            description: "Presence intelligence with audit trails.",
            hoverText: "Presence awareness designed to observe without intrusion.",
            icon: Shield,
            bgImage: "/assets/sol_card_security.webp",
            link: "/security"
        },
        {
            title: "Energy Orchestration",
            description: "Autonomous load balancing and efficiency.",
            hoverText: "Load, storage, and distribution treated as a single system.",
            icon: Zap,
            bgImage: "/assets/platform_hero_bg.webp",
            link: "/energy"
        }
    ];

    return (
        <>
            <SEO
                title="Environment-Specific Control Solutions"
                description="From private estates to superyachts. Vœrynth applies a consistent rigid architecture to diverse operational domains."
                keywords="private estate systems, superyacht automation, bunker control, high-availability architecture, home automation solutions, integrated building systems"
                canonical="/solutions"
            />
            <Hero
                title="Solutions"
                subtitle="Vœrynth adapts to the domain. The discipline stays constant."
                bgImage="/assets/solutions_hero_bg.webp"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">
                        Each environment presents its own constraints - scale, mobility, security, regulation.
                    </p>
                    <p>
                        Vœrynth does not change its discipline to suit them. It adapts its architecture.
                    </p>
                </div>
            </Hero>


            <Section>
                {/* How to Read This */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Domains, Not Products</h2>
                        <div className="text-white/40 text-sm leading-loose font-light space-y-4">
                            <p>
                                Vœrynth is not sold as a collection of features.
                                It is deployed as an architectural discipline applied to different domains.
                            </p>
                            <p>
                                The solutions below represent environments where failure, noise, and dependency are unacceptable - and where calm control matters more than novelty.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <Link to={solution.link} key={idx} className="block h-full group">
                            <Card
                                title={solution.title}
                                description={solution.description}
                                hoverText={solution.hoverText}
                                icon={solution.icon}
                                delay={idx * 0.1}
                                bgImage={solution.bgImage}
                            />
                        </Link>
                    ))}
                </div>
            </Section>

            {/* One System. Many Domains. */}
            <Section className="bg-[#0D0D0D] border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl font-light mb-8 leading-relaxed">One System. Many Domains.</h2>
                        <div className="text-white/40 text-sm leading-loose font-light space-y-4 mb-12">
                            <p>
                                While each environment looks different, the underlying discipline remains unchanged.
                            </p>
                            <p>
                                The same principles - deterministic control, local-first operation, failure containment - govern every deployment.
                            </p>
                            <p className="border-l border-[#D4AF37]/30 pl-4 py-2 italic text-white/60">
                                Vœrynth does not reinvent itself for each domain.
                                It reveals different facets of the same architecture.
                            </p>
                        </div>

                        <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
                            <Link
                                to="/platform"
                                className="px-8 py-3 border border-white/10 text-white/60 text-xs tracking-widest uppercase hover:bg-white/[0.03] hover:border-white/30 transition-all duration-500"
                            >
                                Explore the Platform
                            </Link>
                            <Link
                                to="/process"
                                className="px-8 py-3 border border-white/10 text-white/60 text-xs tracking-widest uppercase hover:bg-white/[0.03] hover:border-white/30 transition-all duration-500"
                            >
                                Understand the Process
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 bg-[#D4AF37] text-black text-xs tracking-widest uppercase font-medium hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                            >
                                Request a Private Discussion
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Who This Is For */}
            <section className="py-24 border-t border-white/5 bg-[#080808]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                        className="grid md:grid-cols-2 gap-8 items-stretch"
                    >
                        {/* Designed For Card */}
                        <div className="p-10 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-700 flex flex-col h-full">
                            <div className="flex-1">
                                <h4 className="text-[#C9A961] text-xs tracking-[0.2em] uppercase mb-8 text-center">Designed For</h4>
                                <ul className="space-y-4 text-white/70 font-light text-sm leading-loose">
                                    {[
                                        "Owners of complex environments",
                                        "Architects and integrators",
                                        "Operators who value predictability"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Not Designed For Card */}
                        <div className="p-10 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-700 flex flex-col h-full">
                            <div className="flex-1">
                                <h4 className="text-white/30 text-xs tracking-[0.2em] uppercase mb-8 text-center">Not Designed For</h4>
                                <ul className="space-y-4 text-white/70 font-light text-sm leading-loose">
                                    {[
                                        "Rapid DIY installations",
                                        "Feature-driven experimentation",
                                        "Always-online dependency"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                            <span className="opacity-80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
