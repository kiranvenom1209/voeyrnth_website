import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GitBranch, RefreshCw, Layers } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const ProofReleasePolicy = () => {
    return (
        <>
            <SEO
                title="Release Policy | Vœrynth"
                description="Controlled updates, curated hardware, and rollback discipline — so production never becomes an experiment."
                keywords="release policy, software updates, rollback, hardware validation, stable deployment"
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
                        <ShieldCheck className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Protected Lifecycle</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Release Policy
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Controlled updates, curated hardware, and rollback discipline — so production never becomes an experiment.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/proof/commissioning"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            COMMISSIONING PROOF
                        </SmartLink>
                    </div>
                </motion.div>
            </section>

            {/* Principle */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">No surprise updates</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Vœrynth is delivered as commissioned infrastructure. Releases are validated against a hardware matrix and operational scenarios before they reach production environments.
                    </p>
                </div>
            </section>

            {/* Release Rings */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-light text-white mb-2">Release Rings</h2>
                        <p className="text-white/30 text-sm">Every update graduates through strict gates.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { ring: "Ring 0", name: "Development", desc: "Rapid iteration. Not production safe.", type: "danger" },
                            { ring: "Ring 1", name: "Lab Rigs", desc: "Hardware matrix validation. Regression gates.", type: "warning" },
                            { ring: "Ring 2", name: "Pilot", desc: "Real environment testing under maintenance windows.", type: "caution" },
                            { ring: "Ring 3", name: "Production", desc: "Controlled rollout to commissioned systems.", type: "success" },
                            { ring: "Ring 4", name: "General", desc: "Broad availability after stable production performance.", type: "stable" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-6 border border-white/5 bg-[#0A0A0A] flex flex-col h-full relative overflow-hidden group hover:border-white/10 transition-colors`}
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 ${item.type === 'danger' ? 'bg-red-500/50' :
                                    item.type === 'warning' ? 'bg-orange-500/50' :
                                        item.type === 'caution' ? 'bg-yellow-500/50' :
                                            item.type === 'success' ? 'bg-[#D4AF37]' : 'bg-green-500/50'
                                    }`} />
                                <span className="text-xs uppercase tracking-widest text-white/30 mb-2">{item.ring}</span>
                                <h3 className="text-lg text-white font-medium mb-3">{item.name}</h3>
                                <p className="text-xs text-white/40 leading-relaxed mt-auto">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Update Rules & Policy */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">Update Rules</h2>
                        <ul className="space-y-4">
                            {[
                                "Releases are pinned, versioned, and validated as a set.",
                                "Updates are authenticated and integrity-checked.",
                                "Updates are scheduled within maintenance windows.",
                                "Rollback is supported to the last known-good release.",
                                "Emergency security hotfixes use a separate expedited lane."
                            ].map((rule, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/60 text-sm font-light">
                                    <RefreshCw className="w-4 h-4 mt-1 text-[#D4AF37]/70 flex-shrink-0" />
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">What We Do & Do Not Change</h2>
                        <div className="space-y-8">
                            <div>
                                <span className="text-[#C9A961] text-xs uppercase tracking-widest font-bold mb-4 block">We Do:</span>
                                <ul className="space-y-2 text-sm text-white/50">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" /> Security patches with verified compatibility.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" /> Stability improvements with documented behavior changes.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" /> New integrations only when validated on certified hardware.</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-red-500/70 text-xs uppercase tracking-widest font-bold mb-4 block">We Do Not:</span>
                                <ul className="space-y-2 text-sm text-white/50">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500/50 rounded-full" /> Introduce hidden dependencies.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500/50 rounded-full" /> Ship unvalidated hardware changes into production.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500/50 rounded-full" /> Break role boundaries or audit semantics.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Prefer calm over novelty?</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto">
                        If you want an environment that stays stable over years, not weeks, start with a commissioned pilot.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/security/model"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            VIEW SECURITY MODEL
                        </SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProofReleasePolicy;
