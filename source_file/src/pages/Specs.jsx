import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/ui';
import SEO from '../components/core/SEO';
import { Link } from 'react-router-dom';

export default function Specs() {
    const layers = [
        {
            layer: "05",
            name: "Neural Interface",
            desc: "The Skin. React Native + Capacitor. <12ms Latency. WebSockets.",
            items: ["Bespoke 'Ammu' Persona", "Local-Only Graph Rendering", "Offline Caching Strategy"]
        },
        {
            layer: "04",
            name: "Vœrynth Core",
            desc: "The Brain. Local 120B MoE Model. Probability Matrix.",
            items: ["GPT-OSS-120B Class Inference", "Hardware: Dual RTX 4090 / RTX 6000 Ada", "Local Vector Store (RAG)"]
        },
        {
            layer: "03",
            name: "State Engine",
            desc: "The Registry. Industrialized Open-Source Core. Deterministic State.",
            items: ["Event Bus", "State History Recording", "Policy Enforcement"]
        },
        {
            layer: "02",
            name: "Translation Core",
            desc: "The Middleware. Signal K. MQTT Injection.",
            items: ["NMEA 2000 to JSON Normalization", "Real-time Telemetry Stream", "Protocol Bridging"]
        },
        {
            layer: "01",
            name: "Hard Metal",
            desc: "The Physical. Certified Gateways. Air-gapped VLANs.",
            items: ["Yacht Devices YDNU-02", "KNX/DALI Gateways", "10GbE Fiber Interconnects"]
        }
    ];

    const hardware = [
        { category: "Compute Node", spec: "AMD Threadripper / EPYC", detail: "64-Core High-Throughput" },
        { category: "Inference", spec: "2x NVIDIA RTX 4090 (24GB)", detail: "Local LLM Execution" },
        { category: "Storage", spec: "4TB NVMe RAID 1", detail: "Redundant Local Logging" },
        { category: "Network", spec: "Dual 10GbE SFP+", detail: "Physical Isolation (IoT vs Client)" },
        { category: "Sensors", spec: "mmWave Radar (Aqara FP2)", detail: "True Presence Detection" },
        { category: "Voice", spec: "ESP32-S3 Satellites", detail: "On-device Wake Word" }
    ];

    return (
        <>
            <SEO
                title="Technical Specifications & Stack"
                description="The Vœrynth Iceberg Architecture. 120B Parameter Local Models, Dual-GPU Compute, and Hard-Real-Time Control Protocols."
                keywords="technical specifications, hardware stack, local llm, dual gpu"
                canonical="/specs"
            />
            <Hero
                title="Specifications"
                subtitle="The Iceberg Architecture."
                bgImage="/assets/specs_hero_bg.webp" // Placeholder
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p>
                        We do not hide our stack. We are proud of it.
                    </p>
                    <p>
                        Vœrynth is built on industrial-grade open standards, fortified by heavy compute.
                    </p>
                </div>
            </Hero>

            {/* The Stack Layers */}
            <Section>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-16 text-center">The Technology Stack</h2>
                    <div className="space-y-4">
                        {layers.map((l, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="group relative border border-white/10 bg-[#0A0A0A] hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37] transition-all duration-500" />
                                <div className="p-8 md:flex items-center gap-12">
                                    <div className="md:w-1/6 mb-4 md:mb-0">
                                        <span className="text-4xl text-white/10 font-mono tracking-tighter group-hover:text-[#D4AF37]/20 transition-colors duration-500">
                                            {l.layer}
                                        </span>
                                    </div>
                                    <div className="md:w-2/6 mb-4 md:mb-0">
                                        <h3 className="text-xl text-white/90 font-light mb-1">{l.name}</h3>
                                        <p className="text-[#C9A961] text-xs uppercase tracking-wider">{l.desc}</p>
                                    </div>
                                    <div className="md:w-3/6">
                                        <div className="flex flex-wrap gap-3">
                                            {l.items.map((item, i) => (
                                                <span key={i} className="text-xs text-white/40 border border-white/5 px-2 py-1 rounded-sm bg-white/[0.02]">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Hardware BOM */}
            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <h2 className="text-2xl font-light text-white/95 mb-2">Reference Hardware BOM</h2>
                            <p className="text-white/40 text-sm">The "Vœrynth Brain" Inference Node</p>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0">
                            <span className="text-[#C9A961] text-xs uppercase tracking-widest border border-[#D4AF37]/30 px-3 py-1">
                                Air-Gapped / Zero-Cloud
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        {hardware.map((h, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-[#0A0A0A] p-6 hover:bg-[#0C0C0C] transition-colors duration-300"
                            >
                                <div className="text-white/30 text-xs uppercase tracking-wider mb-2">{h.category}</div>
                                <div className="text-white/90 font-mono text-sm mb-1">{h.spec}</div>
                                <div className="text-[#C9A961]/60 text-xs font-light">{h.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-white/30 text-xs italic">
                        * Final BOM varies by vessel/estate constraints. High-availability redundancy options available.
                    </p>
                </div>
            </Section>

            {/* Protocols */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/95 mb-12">Supported Protocols</h2>
                    <div className="relative w-full overflow-hidden mask-gradient-x">
                        {/* Gradient Masks for fade effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                        <div className="flex gap-16 md:gap-32 w-max animate-infinite-scroll hover:pause">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-16 md:gap-32 items-center">
                                    {[
                                        { name: "NMEA 2000", logo: "/assets/logos/nmea2000.svg", fallback: true },
                                        { name: "Signal K", logo: "/assets/logos/signalk.svg", fallback: true },
                                        { name: "KNX", logo: "/assets/logos/knx.svg", fallback: false }, // Check if exists
                                        { name: "DALI-2", logo: "/assets/logos/dali.svg", fallback: true },
                                        { name: "Modbus TCP", logo: "/assets/logos/modbus.svg", fallback: true },
                                        { name: "Zigbee 3.0", logo: "/assets/logos/zigbee.svg", fallback: false }, // Exists
                                        { name: "MQTT", logo: "/assets/logos/mqtt.svg", fallback: false }, // Check if exists
                                        { name: "Matter", logo: "/assets/logos/matter.svg", fallback: true }
                                    ].map((p, idx) => (
                                        <div key={idx} className="flex-shrink-0 group">
                                            {/* Logic to show Img or Text based on 'fallback' (which I will dynamically update based on list_dir result) */}
                                            {/* For now, I'll assume only Zigbee is guaranteed, so I'll write code to handle missing images gracefully usually via onError, but React onError is client side. */}
                                            {/* Better: Use the text approach for all EXCEPT the ones I found */}

                                            {/* Note: I will update this block in the NEXT tool call after I see the list_dir output so I know exactly which ones to show as images */}
                                            <span className="text-xl md:text-2xl font-light text-white/40 tracking-widest hover:text-[#C9A961] transition-colors duration-500 cursor-default uppercase whitespace-nowrap">
                                                {p.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
