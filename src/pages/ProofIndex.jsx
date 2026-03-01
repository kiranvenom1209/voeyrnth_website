import React from 'react';
import { m } from 'framer-motion';
import { ShieldCheck, FileSearch, RefreshCw, ArrowRight } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const ProofIndex = () => {
    return (
        <>
            <SEO
                title="Proof of Work"
                description="Commissioning discipline, release control, and auditability — shown, not claimed."
                keywords="proof, commissioning, release policy, audit log"
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/proof_index_hero_mobile_v2.webp" />
                        <img
                            src="/assets/proof_index_hero_v2.webp"
                            alt="Proof of Work"
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
                        <ShieldCheck className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Evidence Base</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Proof
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Commissioning discipline, release control, and auditability — shown, not claimed.
                    </p>
                </m.div>
            </section>

            {/* Proof Cards */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Commissioning",
                            desc: "Acceptance tests that prove the system behaves under failure.",
                            link: "/proof/commissioning",
                            icon: ShieldCheck
                        },
                        {
                            title: "Release Policy",
                            desc: "Controlled updates and rollback discipline.",
                            link: "/proof/release-policy",
                            icon: RefreshCw
                        },
                        {
                            title: "Audit Example",
                            desc: "Every actuation recorded with correlation IDs.",
                            link: "/proof/audit-log",
                            icon: FileSearch
                        }
                    ].map((card, idx) => (
                        <SmartLink key={idx} to={card.link} className="block group">
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 border border-white/5 bg-[#0C0C0C] h-full relative overflow-hidden group-hover:border-[#D4AF37]/30 transition-all duration-200"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <card.icon className="w-16 h-16 text-white" />
                                </div>
                                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{card.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed mb-8">{card.desc}</p>
                                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity">
                                    View Proof <ArrowRight className="w-3 h-3" />
                                </div>
                            </m.div>
                        </SmartLink>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProofIndex;
