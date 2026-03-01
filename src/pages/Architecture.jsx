import React from 'react';
import { m } from 'framer-motion';
import { Shield, Cpu, Activity, Lock, Database } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const Architecture = () => {
    return (
        <>
            <SEO
                title="System Architecture"
                description="A commissioned control core, deployed inside the client network — governed by policy, audited by design."
                keywords="control core, local-first, estate automation architecture, secure home automation"
            />

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/architecture_hero_mobile_v2.webp" />
                        <img
                            src="/assets/architecture_hero_v2.webp"
                            alt="Architecture"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>

                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Cpu className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">System Core</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Architecture
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        A commissioned control core, deployed inside the client network — governed by policy, audited by design.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/security/model"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm"
                        >
                            VIEW SECURITY MODEL
                        </SmartLink>
                    </div>
                </m.div>
            </section>

            {/* The Compute Model */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Control Core",
                                body: "Vœrynth runs on a hardened on-prem control core deployed inside the client network. It is designed as infrastructure: stable, inspectable, and commissioned — not consumer automation."
                            },
                            {
                                title: "Not a PLC runtime",
                                body: "Vœrynth does not require a PLC runtime. Where PLCs already exist (e.g., vendor machinery or legacy subsystems), Vœrynth integrates at the boundary via standard interfaces — without replacing safety-critical logic."
                            },
                            {
                                title: "Local-first operation",
                                body: "Core control does not require internet access. The system remains operational in local-only conditions, with explicit degraded-mode behavior and recovery procedures."
                            },
                            {
                                title: "Certified deployments",
                                body: "Only validated hardware and tested release builds are commissioned into production environments. This reduces breakage, limits drift, and keeps long-lived systems maintainable."
                            }
                        ].map((card, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/20 transition-colors duration-200 group"
                            >
                                <h3 className="text-lg font-light text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{card.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{card.body}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Control Path */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-light text-white mb-6">The Control Path</h2>
                        <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
                            Every actuation follows a single, auditable path — so “clever” never bypasses “safe.”
                        </p>
                    </div>

                    <div className="relative mt-12 md:mt-24">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-[5px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0" />

                        <div className="grid md:grid-cols-5 gap-8 md:gap-4">
                            {[
                                { step: "Interface issues an intent", detail: "(owner / staff / engineering)" },
                                { step: "Policy Gate authorizes or denies", detail: "based on role, state, and invariants" },
                                { step: "Translation Layer maps intent", detail: "to protocol-safe actions (wired, mesh, and telemetry interfaces)" },
                                { step: "Devices execute", detail: "results return to state" },
                                { step: "Audit Ledger records", detail: "the full chain with correlation IDs" }
                            ].map((item, idx) => (
                                <div key={idx} className="relative pl-12 md:pl-0 md:text-center group">
                                    {/* Mobile Vertical Line */}
                                    {idx !== 4 && (
                                        <div className="md:hidden absolute left-[3px] top-6 bottom-[-2rem] w-px bg-[#D4AF37]/20" />
                                    )}

                                    {/* Dot */}
                                    <div className="absolute left-[-1px] top-2 w-2.5 h-2.5 rounded-full bg-[#080808] border border-[#D4AF37] md:static md:mx-auto md:mb-6 md:w-3 md:h-3 ring-4 ring-[#080808] group-hover:bg-[#D4AF37] transition-colors duration-200" />

                                    <h4 className="text-lg text-white font-light mb-2">{item.step}</h4>
                                    <p className="text-xs text-white/40 leading-relaxed">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xs text-white/25 uppercase tracking-widest">
                            Muted note: No direct device control from the UI. No silent bypasses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Layers */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light text-white mb-6 text-center">Core Layers</h2>
                    <p className="text-white/40 text-center mb-16 max-w-2xl mx-auto">
                        Vœrynth is layered so hardware churn and protocol differences do not ripple into operations.
                    </p>

                    <div className="space-y-4">
                        {[
                            { layer: "Layer 1 — Interface", desc: "A restrained operator interface with role-safe surfaces: owner, staff, and engineering are not the same user." },
                            { layer: "Layer 2 — Policy Gate", desc: "A deterministic authorization boundary. It decides what is allowed, when, and by whom — before any action reaches the environment." },
                            { layer: "Layer 3 — State Engine", desc: "An explicit model of the environment: modes, invariants, and transitions. Automation is based on declared state — not assumptions." },
                            { layer: "Layer 4 — Translation Layer", desc: "Protocol adapters and normalization. Devices are integrated without leaking protocol complexity into the operator experience." },
                            { layer: "Layer 5 — Hard Metal", desc: "Field hardware and gateways commissioned as a system: validated topologies, known failure modes, defined replacement procedures." }
                        ].map((item, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 border border-white/5 bg-white/[0.01] flex flex-col md:flex-row gap-4 items-start md:items-center hover:bg-white/[0.03] transition-colors"
                            >
                                <div className="text-[#C9A961] text-xs font-bold uppercase tracking-widest min-w-[150px]">
                                    {item.layer.split('—')[0]}
                                </div>
                                <div className="flex-1">
                                    <span className="text-white/80 block mb-1 font-medium">{item.layer.split('—')[1]}</span>
                                    <p className="text-sm text-white/50">{item.desc}</p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Guarantees */}
            <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-light text-white mb-8">Operational Guarantees</h2>
                        <ul className="space-y-4">
                            {[
                                "Internet is not required for core control.",
                                "All actuation is routed through a single policy boundary.",
                                "Role-based access is enforced by design.",
                                "Commissioning includes offline, degraded-mode, and recovery acceptance tests.",
                                "Updates are controlled, validated, and rollback-capable.",
                                "Hardware in production is curated and version-pinned."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/60 text-sm font-light">
                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#D4AF37]/50 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-xs text-white/20 uppercase tracking-widest">
                            Guarantees apply to the commissioned scope and validated hardware set.
                        </p>
                    </div>
                    <div className="h-full min-h-[300px] border border-white/5 bg-white/[0.01] flex items-center justify-center p-8 text-center">
                        {/* Abstract Graphic Placeholder */}
                        <div className="relative w-48 h-48 rounded-full border border-[#D4AF37]/10 flex items-center justify-center">
                            <div className="absolute inset-0 border border-t-[#D4AF37]/40 rounded-full animate-spin duration-[10s]" />
                            <Shield className="text-[#D4AF37]/20 w-16 h-16" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">Common Questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "Does Vœrynth run on PLCs?", a: "No. Vœrynth runs on a hardened on-prem control core. Where PLCs exist, Vœrynth integrates at the boundary without replacing safety-critical logic." },
                            { q: "Is this a smart-home hub?", a: "No. Vœrynth is commissioned infrastructure for complex environments. It prioritizes stability, auditability, and operational clarity over novelty." },
                            { q: "Do you need cloud services?", a: "Core control is local-first and does not require cloud connectivity. Optional external services, if used, are explicit and isolated — never a hidden dependency." },
                            { q: "What happens when something fails?", a: "The system is designed with fault domains. When a subsystem fails, affected functions degrade predictably while the rest remains stable. Recovery procedures are part of commissioning." }
                        ].map((item, idx) => (
                            <div key={idx} className="border-b border-white/5 pb-8 last:border-0">
                                <h3 className="text-lg text-white/80 font-normal mb-3">{item.q}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Steps CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Ready for a commissioned pilot?</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto">
                        If you’re evaluating a residence, estate, yacht, or facility, we can scope a pilot with measured outcomes, acceptance tests, and a clean handover package.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/security/model"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm"
                        >
                            SECURITY MODEL
                        </SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Architecture;
