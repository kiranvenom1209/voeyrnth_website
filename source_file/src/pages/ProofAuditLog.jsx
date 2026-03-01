import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Layers, Activity, Lock, ArrowRight } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const ProofAuditLog = () => {
    return (
        <>
            <SEO
                title="Audit Log & Accountability | Vœrynth"
                description="Every actuation is recorded — who requested it, what was allowed, what happened, and why."
                keywords="audit log, accountability, control system logging, traceability, security audit"
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
                        <FileSearch className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Full Accountability</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Audit Example
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Every actuation is recorded — who requested it, what was allowed, what happened, and why.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/security/model"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            VIEW SECURITY MODEL
                        </SmartLink>
                        <SmartLink
                            to="/proof/release-policy"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            RELEASE POLICY
                        </SmartLink>
                    </div>
                </motion.div>
            </section>

            {/* Principle */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">One gate. One ledger.</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Vœrynth routes actuation through a single policy boundary. The audit ledger records the full chain with correlation IDs so changes are explainable — even years later.
                    </p>
                </div>
            </section>

            {/* What We Log */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl font-light text-white mb-8">What is recorded</h2>
                        <ul className="space-y-4">
                            {["Actor identity and role", "Requested intent", "Policy decision (allow/deny + reason)", "Action executed (or blocked)", "Result and system state delta", "Correlation ID across the chain"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 text-sm">
                                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-xs text-white/20 uppercase tracking-widest">
                            Example entries are redacted.
                        </p>
                    </div>

                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-light text-white mb-8">Sample Entries (Redacted)</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    ts: "2026-02-18T21:14:08Z", role: "Staff", intent: "Activate Guest Mode",
                                    decision: "Allowed (policy: guest_mode_staff_allowed)", action: "Mode transition executed", result: "Success", corr: "VX-7F3A-21D4",
                                    status: "success"
                                },
                                {
                                    ts: "2026-02-18T22:02:11Z", role: "Owner", intent: "Set Lighting Scene: Evening",
                                    decision: "Allowed (policy: scene_owner_allowed)", action: "Scene applied via protocol adapter", result: "Success", corr: "VX-98BC-0A11",
                                    status: "success"
                                },
                                {
                                    ts: "2026-02-18T22:07:44Z", role: "Staff", intent: "Disable Security Perimeter",
                                    decision: "Denied (policy: security_owner_only)", action: "Blocked", result: "Denied", corr: "VX-31C0-77EE",
                                    status: "denied"
                                },
                                {
                                    ts: "2026-02-18T23:30:05Z", role: "Engineering", intent: "Apply Update Package",
                                    decision: "Allowed (policy: maint_window_required) + Maintenance window verified", action: "Update staged, integrity verified", result: "Success", corr: "VX-5AA2-19C9",
                                    status: "system"
                                }
                            ].map((log, idx) => (
                                <div key={idx} className="p-4 bg-[#0F0F0F] border border-white/5 rounded-sm font-mono text-xs">
                                    <div className="flex justify-between text-white/30 mb-2 border-b border-white/5 pb-2">
                                        <span>{log.ts}</span>
                                        <span>{log.corr}</span>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Role</span>
                                            <span className="text-white/80">{log.role}</span>
                                        </div>
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Intent</span>
                                            <span className="text-white/80">"{log.intent}"</span>
                                        </div>
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Decision</span>
                                            <span className={log.status === 'denied' ? 'text-red-400' : 'text-green-400/80'}>{log.decision}</span>
                                        </div>
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Result</span>
                                            <span className="text-white/60">{log.result}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Correlations Matter */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white mb-6">Why correlation IDs matter</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        A system is only accountable if you can trace an outcome back to a decision and an actor — without guesswork.
                    </p>
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

export default ProofAuditLog;
