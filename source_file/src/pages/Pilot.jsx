import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, CheckSquare, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const Pilot = () => {
    return (
        <>
            <SEO
                title="Pilot Program | Vœrynth"
                description="A production-grade installation with measured outcomes, acceptance tests, and a clean handover."
                keywords="pilot program, commissioned system, estate automation pilot, control system trial"
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
                        <PlayCircle className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Production Grade Evaluation</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Pilot Program
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        A production-grade installation with measured outcomes, acceptance tests, and a clean handover.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/contact"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/proof/commissioning"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            VIEW COMMISSIONING
                        </SmartLink>
                    </div>
                </motion.div>
            </section>

            {/* Who It Is For */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-12">Designed for commissioned environments</h2>
                    <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 text-left max-w-2xl mx-auto">
                        {[
                            "Residences and penthouses with complex lighting, climate, and access",
                            "Estates requiring role-safe operation across staff and operators",
                            "Yachts requiring telemetry integration and disciplined boundaries",
                            "Facilities where stability and auditability matter"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 mt-2.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
                                <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What is Included */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">What a pilot includes</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Interface", desc: "Role-safe UI surfaces for owner, staff, and engineering" },
                            { title: "Control Core", desc: "Hardened on-prem deployment inside the client network" },
                            { title: "Policy + Audit", desc: "Single actuation boundary with correlation IDs" },
                            { title: "Commissioning", desc: "Offline, degraded-mode, and recovery acceptance tests" },
                            { title: "Handover", desc: "Runbook excerpt, topology summary, config export bundle" }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 border border-white/5 bg-[#0A0A0A] hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-3">0{idx + 1}</div>
                                <h3 className="text-white font-medium mb-3">{card.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">Typical Timeline</h2>
                    <div className="relative border-l border-[#D4AF37]/20 ml-6 space-y-12">
                        {[
                            { step: "Discovery", time: "Week 1–2", desc: "Interface inventory + scope boundaries + protocol mapping" },
                            { step: "Commissioning Build", time: "Week 3–5", desc: "Certified hardware + validated release line" },
                            { step: "On-site Deployment", time: "Week 6–8", desc: "Installation + acceptance testing" },
                            { step: "Handover", time: "Week 8–10", desc: "Reports, runbooks, change history, and stewardship plan" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative pl-12 group">
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors" />
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                                    <h4 className="text-lg text-white font-light">{item.step}</h4>
                                    <span className="text-xs text-[#D4AF37] uppercase tracking-widest">{item.time}</span>
                                </div>
                                <p className="text-sm text-white/40">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements & Pricing */}
            <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div className="border border-white/5 p-8 bg-[#0C0C0C]">
                        <h3 className="text-xl text-white font-light mb-6">Requirements to start</h3>
                        <ul className="space-y-4">
                            {[
                                "Protocol inventory and access to existing gateways",
                                "A commissioning window for acceptance tests",
                                "Agreement on scope boundaries"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 text-sm">
                                    <CheckSquare className="w-4 h-4 text-[#D4AF37]/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border border-white/5 p-8 bg-[#0C0C0C]">
                        <h3 className="text-xl text-white font-light mb-6">Commercial Structure</h3>
                        <p className="text-white/50 leading-relaxed text-sm mb-6">
                            Pilots are scoped by environment complexity and interface count. We provide a fixed-band estimate after discovery.
                        </p>
                        <div className="text-xs uppercase tracking-widest text-[#D4AF37]">Fixed-Band Estimate</div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Request a pilot scope</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto">
                        If you want a stable, local-first system that ages well, start with a commissioned pilot.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink
                            to="/contact"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/architecture"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            VIEW ARCHITECTURE
                        </SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pilot;
