import React from 'react';
import { motion } from 'framer-motion';
import { Network, Wifi, Settings, Globe, ShieldAlert } from 'lucide-react';
import SEO from '../components/core/SEO';
import SmartLink from '../components/core/SmartLink';

const Protocols = () => {
    return (
        <>
            <SEO
                title="Supported Protocols & Interfaces | Vœrynth"
                description="Protocol support described by scope — not slogans. We support generic standards within defined operational contracts."
                keywords="knx, dali-2, modbus tcp, zigbee 3.0, z-wave, mqtt, matter, nmea 2000, signal k, automation protocols"
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
                        <Network className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Interface Matrix</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">
                        Supported Interfaces
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Protocol support described by scope — not slogans.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink
                            to="/architecture"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            VIEW ARCHITECTURE
                        </SmartLink>
                        <SmartLink
                            to="/security/model"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            SECURITY MODEL
                        </SmartLink>
                    </div>
                </motion.div>
            </section>

            {/* Principle */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">“Supported” means defined scope</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        A protocol is only “supported” if scope, directionality, and constraints are declared. Vœrynth treats interfaces as operational contracts.
                    </p>
                </div>
            </section>

            {/* Protocol Matrix */}
            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-light text-white mb-2">Protocol Support Matrix</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-[#C9A961] font-medium w-32">Interface</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-32">Mode</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-32">Access</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Typical Scope</th>
                                    <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium">Constraints</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { name: "KNX", mode: "Native", access: "Read/Write", scope: "Lighting, shading, climate signaling", const: "Commissioned via validated IP interface; topology rules apply" },
                                    { name: "DALI-2", mode: "Bridged", access: "Read/Write", scope: "Lighting groups/scenes", const: "Deployed behind certified gateway" },
                                    { name: "Modbus TCP", mode: "Native", access: "Read/Write", scope: "Plant/energy telemetry and control points", const: "Scope defined per site; safety-critical remains external" },
                                    { name: "Zigbee 3.0", mode: "Native", access: "Read/Write", scope: "Sensors, lighting, convenience devices", const: "Certified coordinator + firmware pinning" },
                                    { name: "Z-Wave", mode: "Native", access: "Read/Write", scope: "Sensors, access peripherals", const: "Region-locked controller; key management enforced" },
                                    { name: "Bluetooth", mode: "Bridged", access: "R/W (Ltd)", scope: "Convenience edge devices", const: "Not used for safety-critical; best-effort tier" },
                                    { name: "MQTT", mode: "Native", access: "Read/Write", scope: "Event transport and device bridging", const: "Scoped topics; policy gate applies to actuation" },
                                    { name: "Matter", mode: "Variant", access: "Variant", scope: "Interop layer for selected devices", const: "Scope depends on certified controllers; not assumed universal" },
                                    { name: "NMEA 2000", mode: "Bridged", access: "Read-First", scope: "Marine telemetry", const: "Actuation boundaries are explicit and commissioned" },
                                    { name: "Signal K", mode: "Native", access: "Read-First", scope: "Unified marine data model", const: "Used for situational awareness; safety-critical remains external" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                        <td className="py-6 pr-6 text-white font-medium group-hover:text-[#D4AF37] transition-colors">{row.name}</td>
                                        <td className="py-6 pr-6 text-white/60">{row.mode}</td>
                                        <td className="py-6 pr-6 text-white/60">{row.access}</td>
                                        <td className="py-6 pr-6 text-white/60">{row.scope}</td>
                                        <td className="py-6 text-white/40 leading-relaxed font-light">{row.const}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Safety Boundary Callout */}
            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-3xl mx-auto">
                    <div className="border border-[#D4AF37]/20 bg-[#0C0C0C] p-8 md:p-12 text-center rounded-sm shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <ShieldAlert className="w-8 h-8 text-[#D4AF37] mx-auto mb-6" />
                        <h2 className="text-2xl font-light text-white mb-4">Safety Boundaries</h2>
                        <p className="text-white/50 leading-loose text-sm font-light">
                            Where a subsystem is safety-critical (marine navigation, emergency systems, vendor safety loops), <span className="text-white/80">Vœrynth integrates at the boundary.</span> Commissioned scope defines what is observed, what is controlled, and what is never actuated.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Need a protocol inventory review?</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto">
                        A pilot starts with interface mapping and commissioning scope.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink
                            to="/pilot"
                            className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-500 shadow-lg shadow-[#D4AF37]/10"
                        >
                            REQUEST A PILOT
                        </SmartLink>
                        <SmartLink
                            to="/hardware"
                            className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                        >
                            HARDWARE CERTIFICATION
                        </SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Protocols;
