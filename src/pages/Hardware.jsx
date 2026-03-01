import React from 'react';
import { m } from 'framer-motion';
import { Cpu, Server, Radio, Bluetooth, AlertTriangle } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const Hardware = () => {
    return (
        <>
            <SEO
                title="Hardware Certification | Vœrynth"
                description="Curated devices, validated topologies, and known failure modes — because reliability is a choice."
                keywords="hardware certification, automation hardware, hcl, hardware compatibility list, knx, zigbee, z-wave"
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/hardware_hero_mobile_v2.webp" />
                        <img
                            src="/assets/hardware_hero_v2.webp"
                            alt="Hardware Infrastructure"
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
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Validated Infrastructure</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Hardware Certification
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Curated devices, validated topologies, and known failure modes — because reliability is a choice.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/protocols"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm"
                        >
                            VIEW PROTOCOLS
                        </SmartLink>
                    </div>
                </m.div>
            </section>

            {/* Philosophy */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Certified hardware only</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Production environments are not laboratories. Vœrynth is commissioned with a validated hardware set so behavior stays stable across updates, replacements, and time.
                    </p>
                </div>
            </section>

            {/* HCL Tables */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-light text-white mb-2">Hardware Compatibility List (HCL)</h2>
                        <p className="text-white/30 text-sm">Entries below are examples. We maintain a versioned HCL per release line.</p>
                    </div>

                    <div className="space-y-16">
                        {/* Table A - Approved */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                                <h3 className="text-lg text-white font-medium">Class A — Approved</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Category</th>
                                            <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Model/Class</th>
                                            <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Notes</th>
                                            <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Replacement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Wired Gateway", model: "KNX IP Interface", notes: "Stable topology; version-pinned", rep: "Replace with same class; restore config bundle" },
                                            { cat: "Mesh Coordinator", model: "Zigbee Coordinator", notes: "Certified firmware; monitored health", rep: "Replace, re-pair via commissioning procedure" },
                                            { cat: "Mesh Controller", model: "Z-Wave Controller", notes: "Certified region; monitored health", rep: "Replace, restore network keys; validate node health" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                <td className="py-6 pr-6 text-[#C9A961] font-medium">{row.cat}</td>
                                                <td className="py-6 pr-6 text-white/80">{row.model}</td>
                                                <td className="py-6 pr-6 text-white/50">{row.notes}</td>
                                                <td className="py-6 text-white/50">{row.rep}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table B - Conditional */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                <h3 className="text-lg text-white font-medium">Class B — Conditional</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/3">Category</th>
                                            <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/3">Model/Class</th>
                                            <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium w-1/3">Conditions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Bluetooth Gateway", model: "BLE Bridge", cond: "Allowed for convenience; not for safety-critical control" },
                                            { cat: "Consumer Hubs", model: "Generic Home Hubs", cond: "Only as isolated boundary devices; no core dependency" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                <td className="py-6 pr-6 text-white/80">{row.cat}</td>
                                                <td className="py-6 pr-6 text-white/60">{row.model}</td>
                                                <td className="py-6 text-white/50">{row.cond}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table C - Not Supported */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                                <h3 className="text-lg text-white font-medium">Class C — Not Supported</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/2">Category</th>
                                            <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium w-1/2">Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Uncertified Clones", reason: "Unstable firmware / inconsistent behavior" },
                                            { cat: "Auto-updating Devices", reason: "Vendor updates break deterministic behavior" },
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                <td className="py-6 pr-6 text-white/60">{row.cat}</td>
                                                <td className="py-6 text-red-400/60">{row.reason}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Details */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-light text-white mb-8">What certification includes</h2>
                        <ul className="space-y-4 text-white/60 text-sm font-light">
                            {[
                                "Firmware version constraints",
                                "Topology and placement rules",
                                "Failure and recovery behavior",
                                "Update compatibility checks",
                                "Replacement procedure"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 border border-white/5 bg-[#0C0C0C] flex flex-col items-center text-center">
                        <AlertTriangle className="w-12 h-12 text-[#D4AF37]/50 mb-6" />
                        <h3 className="text-lg text-white font-light mb-2">Stability First</h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                            We only support what we can test, validate, and guarantee. If it breaks in a lab, it doesn't go to your site.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Prefer systems that age well?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/proof/release-policy"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm"
                        >
                            VIEW RELEASE POLICY
                        </SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hardware;
