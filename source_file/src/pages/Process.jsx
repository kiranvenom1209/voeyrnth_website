import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/ui';
import SEO from '../components/core/SEO';
import { Link } from 'react-router-dom';

export default function Process() {
    const phases = [
        {
            id: "01",
            title: "Discovery & Constraints",
            subtitle: "Understanding the Physical Reality",
            description: "We do not guess. We audit. Before a single line of code is written, we map the physical and digital reality of the environment.",
            details: [
                { label: "Protocol Inventory", value: "NMEA 2000, Signal K, KNX, DALI, Modbus, Zigbee" },
                { label: "Network Topology", value: "IoT VLAN Segregation, Air-gap Strategy" },
                { label: "Threat Modeling", value: "Privacy boundaries, Remote access policy definition" }
            ]
        },
        {
            id: "02",
            title: "Design & Build",
            subtitle: "Architecture Before Automation",
            description: "We design the system's 'Stupidity Filter'—the logic that prevents the house from annoying its inhabitants. This is engineering, not configuration.",
            details: [
                { label: "Electrical Design", value: "Gateway placement, PoE budgets, Redundancy planning" },
                { label: "Logic Matrix", value: "Probability-based decision trees vs. brute-force rules" },
                { label: "Persona Definition", value: "Defining the 'Voice' and temperament of the system" }
            ]
        },
        {
            id: "03",
            title: "Commissioning",
            subtitle: "Validation Under Stress",
            description: "A system is only as good as its behavior in failure. We simulate power loss, network partitions, and sensor failures to ensure composure.",
            details: [
                { label: "Deterministic Validation", value: "I/O checks for every relay, dimmer, and sensor" },
                { label: "Calibration", value: "Tuning the 'Stupidity Filter' against real household patterns" },
                { label: "Chaos Testing", value: "Forced failure modes to verify recovery protocols" }
            ]
        },
        {
            id: "04",
            title: "The Handover",
            subtitle: "Transfer of Sovereignty",
            description: "The defining moment of a Vœrynth project. We do not retain access. You own the code, the keys, and the hardware.",
            details: [
                { label: "Git-Tracked History", value: "Full commit log of every configuration change" },
                { label: "Physical Key Transfer", value: "Encryption keys handed over on hardware tokens" },
                { label: "Staff Training", value: "Exception-based workflow training for operators" }
            ]
        }
    ];

    return (
        <>
            <SEO
                title="The Implementation Process"
                description="Our 4-phase engineering methodology: Discovery, Design, Commissioning, and Handover. We build sovereign systems that you own completely."
                keywords="engineering methodology, commissioning, system handover"
                canonical="/process"
            />
            <Hero
                title="The Process"
                subtitle="Survey. Commission. Handover."
                bgImage="/assets/process_hero_bg.webp" // Placeholder - will need asset or fallback
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Luxury clients buy outcomes. We deliver with an engineering playbook, not improvisation.
                </p>
            </Hero>

            <Section>
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-[2rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0 hidden md:block" />

                    <div className="space-y-32">
                        {phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                className="relative md:pl-24"
                            >
                                {/* Dot Indicator */}
                                <div className="absolute left-[1.75rem] top-2 w-3 h-3 bg-[#0A0A0A] border border-[#D4AF37] rounded-full hidden md:block z-10 box-content p-[1px]">
                                    <div className="w-full h-full bg-[#D4AF37]/50 rounded-full" />
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-1/4">
                                        <span className="text-[#C9A961] text-6xl font-light opacity-20 tracking-tighter">
                                            {phase.id}
                                        </span>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h2 className="text-2xl font-light text-white/95 mb-2">{phase.title}</h2>
                                        <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-6 opacity-80">{phase.subtitle}</p>
                                        <p className="text-white/50 leading-loose text-base font-light mb-8 border-l-2 border-white/5 pl-6">
                                            {phase.description}
                                        </p>

                                        <div className="grid grid-cols-1 gap-4">
                                            {phase.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-b border-white/5 pb-4 last:border-0">
                                                    <span className="text-white/30 text-xs uppercase tracking-wider w-40 shrink-0">{detail.label}</span>
                                                    <span className="text-white/70 text-sm font-light">{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="border-t border-white/5 bg-[#080808]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/95 mb-8">Ready to begin Phase 01?</h2>
                    <p className="text-white/40 leading-loose text-sm font-light mb-12">
                        The first step is a physical audit of your environment's protocols and constraints.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#D4AF37] text-black px-8 py-4 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-700 font-medium shadow-lg shadow-[#D4AF37]/10"
                    >
                        INITIATE DISCOVERY
                    </Link>
                </div>
            </Section>
        </>
    );
}
