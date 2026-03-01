import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, UserCheck, Eye, Layers } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const SecurityModel = () => {
    return (
        <>
            <SEO
                title="Security Model | Vœrynth"
                description="Role-safe by design, local-first by default, auditable at the actuation boundary."
                keywords="security model, role-based access control, rbac, local-first security, automation security, audit logs"
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">

                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#0A0A0A]/80 to-[#080808]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Lock className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Zero Trust Architecture</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Security Model
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Role-safe by design. Local-first by default. Auditable at the boundary.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/proof/audit-log"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            VIEW AUDIT EXAMPLE
                        </SmartLink>
                        <SmartLink
                            to="/architecture"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            VIEW ARCHITECTURE
                        </SmartLink>
                    </div>
                </motion.div>
            </section>

            {/* Trust Zones */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-light text-white mb-8">Trust Zones</h2>
                        <p className="text-white/40 mb-8 leading-relaxed">
                            The environment is segmented so a compromise in one zone does not cascade into control.
                        </p>
                        <div className="space-y-6">
                            {[
                                { zone: "Interface Zone", desc: "Operator clients with role-scoped permissions" },
                                { zone: "Core Zone", desc: "Policy, state, audit, and orchestration (Protected)" },
                                { zone: "Control Zone", desc: "Gateways and protocol adapters" },
                                { zone: "Device Zone", desc: "Field buses and endpoints" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-4 border border-white/5 bg-[#0C0C0C] hover:border-[#D4AF37]/20 transition-colors">
                                    <Layers className="text-[#D4AF37] w-5 h-5 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-white font-medium text-sm mb-1">{item.zone}</h3>
                                        <p className="text-white/40 text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-xs text-white/20 uppercase tracking-widest">
                            Muted note: Cloud connectivity is not required for core control.
                        </p>
                    </div>
                    <div className="h-full min-h-[400px] border border-white/5 bg-white/[0.01] flex items-center justify-center p-8 text-center relative overflow-hidden">
                        {/* Abstract Security Graphic */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border border-[#D4AF37]/40 flex items-center justify-center relative">
                                        <div className="absolute top-0 w-1 h-2 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                                        <Shield className="text-[#D4AF37] w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">Role Boundaries</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { role: "Owner", icon: UserCheck, desc: "High-level intents and modes. No engineering controls." },
                            { role: "Staff", icon: Eye, desc: "Operational controls within commissioned scope. No privileged actions." },
                            { role: "Engineering", icon: Settings, desc: "Maintenance windows, diagnostics, updates, recovery procedures (audited)." }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 border border-white/5 bg-[#0A0A0A] text-center group hover:border-[#D4AF37]/30 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
                                    <card.icon className="w-6 h-6 text-white/50 group-hover:text-[#D4AF37]" />
                                </div>
                                <h3 className="text-lg text-white font-light mb-4">{card.role}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policy Gate Callout */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-3xl mx-auto text-center border border-[#D4AF37]/20 p-12 bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />
                    <h2 className="text-2xl font-light text-white mb-6">Single Actuation Boundary</h2>
                    <p className="text-white/50 leading-loose text-sm font-light mb-8">
                        The interface does not actuate devices directly. All actuation passes through a deterministic policy gate with an audit record.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-widest text-white/40 font-mono">
                        <span>Actor</span>
                        <span className="text-[#D4AF37]">→</span>
                        <span>Decision</span>
                        <span className="text-[#D4AF37]">→</span>
                        <span>Actuation</span>
                        <span className="text-[#D4AF37]">→</span>
                        <span>Result</span>
                    </div>
                </div>
            </section>

            {/* Updates & Hard Refusals */}
            <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">Controlled Updates</h2>
                        <ul className="space-y-4">
                            {[
                                "Authenticated, integrity-checked packages",
                                "Validated against certified hardware",
                                "Scheduled within maintenance windows",
                                "Rollback supported to last known-good"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 text-sm font-light">
                                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">What we refuse to do</h2>
                        <ul className="space-y-4">
                            {[
                                "No hidden telemetry by default",
                                "No silent bypass of role boundaries",
                                "No uncontrolled vendor auto-updates inside commissioned scope"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 text-sm font-light">
                                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Want the full assurance pack?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink
                            to="/proof/commissioning"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            COMMISSIONING
                        </SmartLink>
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
};

// Missing icon import fallback
const Settings = ({ className }) => <span className={className}>⚙️</span>;

export default SecurityModel;
