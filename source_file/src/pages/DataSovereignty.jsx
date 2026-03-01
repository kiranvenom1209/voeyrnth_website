import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, EyeOff, Key, Database, RefreshCcw, WifiOff } from 'lucide-react';
import { Hero, Section, Card } from '../components/ui';
import SEO from '../components/core/SEO';

export default function DataSovereignty() {
    const principles = [
        {
            title: "Local-First Architecture",
            description: "Your system runs on your hardware. Cloud connectivity is optional, not mandatory.",
            hoverText: "We prioritize on-premise logic. If the internet fails, your estate continues to function perfectly.",
            icon: Server
        },
        {
            title: "Client Ownership",
            description: "You own the data. You own the keys. You own the code.",
            hoverText: "No licensing leashes. Once deployed, the system belongs to you in perpetuity.",
            icon: Key
        },
        {
            title: "Zero Telemetry",
            description: "We do not track usage. We do not aggregate data.",
            hoverText: "Vœrynth has no 'home' to call. Your habits and patterns remain strictly within your walls.",
            icon: EyeOff
        },
        {
            title: "Cryptographic Integrity",
            description: "Military-grade encryption for all internal and external verification.",
            hoverText: "Every command is verified. Every node is authenticated. Trust is mathematical, not assumed.",
            icon: Lock
        },
        {
            title: "The Air-Gap Option",
            description: "Systems designed to function in complete physical isolation.",
            hoverText: "For ultra-secure environments, we can deploy fully air-gapped networks with no physical route to the public web.",
            icon: WifiOff
        },
        {
            title: "Auditable Code",
            description: "Transparency for your security team.",
            hoverText: "We provide full source code access to your security auditors for validation.",
            icon: Database
        }
    ];

    return (
        <>
            <SEO
                title="Data Sovereignty & Privacy"
                description="Our commitment to privacy, local-first architecture, and client data ownership."
                keywords="data sovereignty, local data, privacy first, no cloud"
                canonical="/data-sovereignty"
            />
            <Hero
                title="Sovereignty"
                subtitle="True luxury is privacy that cannot be revoked."
                bgImage="/assets/sovereignty_hero_bg.webp"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">
                        In an era of surveillance capitalism, privacy is the ultimate asset.
                    </p>
                    <p>
                        Vœrynth builds systems that refuse to spy. We design for ownership, isolation, and absolute control.
                    </p>
                </div>
            </Hero>

            {/* Core Principles Grid */}
            <Section>
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">The Charter of Trust</h2>
                        <p className="text-white/50 leading-loose text-base font-light">
                            We believe that a private environment should remain private. Your home, your yacht, and your office are not data mines.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((item, idx) => (
                        <Card
                            key={idx}
                            title={item.title}
                            description={item.description}
                            hoverText={item.hoverText}
                            icon={item.icon}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </Section>

            {/* The Air-Gap */}
            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4 }}
                        >
                            <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">The Air-Gap Standard</h2>
                            <div className="space-y-6 text-white/60 font-light leading-loose text-sm">
                                <p>
                                    For our most sensitive clients, we deploy "Air-Gapped" systems. These networks have no physical or logical connection to the public internet.
                                </p>
                                <p>
                                    Updates are applied manually via secure physical media. Remote access is physically impossible because the pathway does not exist.
                                </p>
                                <p className="text-[#C9A961] border-l border-[#C9A961]/30 pl-4 py-2">
                                    "You cannot hack what you cannot reach."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="relative h-full min-h-[400px] border border-white/5 bg-[#050505]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Shield size={120} strokeWidth={0.5} className="text-[#C9A961]/20" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 border border-white/10 rounded-full animate-pulse opacity-20"></div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Disclaimer */}
            <Section className="py-24">
                <div className="max-w-4xl mx-auto text-center border p-12 border-white/5 bg-white/[0.02]">
                    <h3 className="text-white/80 font-light mb-6 text-lg">A Note on Security</h3>
                    <p className="text-white/40 text-xs leading-loose font-light">
                        While we employ military-grade encryption and isolation architectures, no system is theoretically invulnerable. Security is a process, not a product. We work closely with your private security teams to ensure that our digital footprint aligns with your physical security protocols.
                    </p>
                </div>
            </Section>
        </>
    );
}
