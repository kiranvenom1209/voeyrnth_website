import React from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeSpecs() {
    const layers = [
        { layer: "05", name: "Neural Interface", desc: "Die Oberfläche. React Native + Capacitor. <12ms Latenz. WebSockets.", items: ["Bespoke 'Ammu' Persona", "Lokales Graph-Rendering", "Offline-Caching-Strategie"] },
        { layer: "04", name: "Vœrynth Core", desc: "Das Gehirn. Lokales 120B-MoE-Modell. Wahrscheinlichkeitsmatrix.", items: ["GPT-OSS-120B-Klassen-Inferenz", "Hardware: Dual RTX 4090 / RTX 6000 Ada", "Lokaler Vektorspeicher (RAG)"] },
        { layer: "03", name: "State Engine", desc: "Das Register. Industrialisierter Open-Source-Kern. Deterministischer Zustand.", items: ["Event Bus", "Zustandsverlauf-Aufzeichnung", "Richtliniendurchsetzung"] },
        { layer: "02", name: "Translation Core", desc: "Die Middleware. Signal K. MQTT-Injektion.", items: ["NMEA 2000 zu JSON Normalisierung", "Echtzeit-Telemetrie-Stream", "Protokoll-Bridging"] },
        { layer: "01", name: "Hard Metal", desc: "Das Physische. Zertifizierte Gateways. Air-gapped VLANs.", items: ["Yacht Devices YDNU-02", "KNX/DALI-Gateways", "10GbE-Glasfaser-Interconnects"] }
    ];

    const hardware = [
        { category: "Rechenknoten", spec: "AMD Threadripper / EPYC", detail: "64-Kern-Hochdurchsatz" },
        { category: "Inferenz", spec: "2x NVIDIA RTX 4090 (24GB)", detail: "Lokale LLM-Ausführung" },
        { category: "Speicher", spec: "4TB NVMe RAID 1", detail: "Redundante lokale Protokollierung" },
        { category: "Netzwerk", spec: "Dual 10GbE SFP+", detail: "Physische Isolation (IoT vs. Client)" },
        { category: "Sensoren", spec: "mmWave-Radar (Aqara FP2)", detail: "Echte Anwesenheitserkennung" },
        { category: "Sprache", spec: "ESP32-S3-Satelliten", detail: "On-Device Wake Word" }
    ];

    return (
        <>
            <SEO
                title="Technische Spezifikationen & Stack"
                description="Die Vœrynth-Eisberg-Architektur. 120B-Parameter-lokale Modelle, Dual-GPU-Computing und Hard-Echtzeit-Steuerprotokolle."
                keywords="technische Spezifikationen, Hardware-Stack, lokales LLM, Dual-GPU"
                canonical="/de/specs"
            />
            <Hero title="Spezifikationen" subtitle="Die Eisberg-Architektur." bgImage="/assets/specs_hero_bg_v2.webp">
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p>Wir verstecken unseren Stack nicht. Wir sind stolz darauf.</p>
                    <p>Vœrynth basiert auf industriellen Open Standards, verstärkt durch leistungsstarkes Computing.</p>
                </div>
            </Hero>

            <Section>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-light text-white/95 mb-16 text-center">Der Technologie-Stack</h2>
                    <div className="space-y-4">
                        {layers.map((l, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: idx * 0.1 }} className="group relative border border-white/10 bg-[#0A0A0A] hover:border-[#D4AF37]/30 transition-all duration-200 overflow-hidden">
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37] transition-all duration-200" />
                                <div className="p-8 md:flex items-center gap-12">
                                    <div className="md:w-1/6 mb-4 md:mb-0">
                                        <span className="text-4xl text-white/10 font-mono tracking-tighter group-hover:text-[#D4AF37]/20 transition-colors duration-200">{l.layer}</span>
                                    </div>
                                    <div className="md:w-2/6 mb-4 md:mb-0">
                                        <h3 className="text-xl text-white/90 font-light mb-1">{l.name}</h3>
                                        <p className="text-[#C9A961] text-xs uppercase tracking-wider">{l.desc}</p>
                                    </div>
                                    <div className="md:w-3/6">
                                        <div className="flex flex-wrap gap-3">
                                            {l.items.map((item, i) => (
                                                <span key={i} className="text-xs text-white/40 border border-white/5 px-2 py-1 rounded-sm bg-white/[0.02]">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <h2 className="text-2xl font-light text-white/95 mb-2">Referenz-Hardware-BOM</h2>
                            <p className="text-white/40 text-sm">Der „Vœrynth Brain" Inferenzknoten</p>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0">
                            <span className="text-[#C9A961] text-xs uppercase tracking-widest border border-[#D4AF37]/30 px-3 py-1">Air-Gapped / Zero-Cloud</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        {hardware.map((h, idx) => (
                            <m.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="bg-[#0A0A0A] p-6 hover:bg-[#0C0C0C] transition-colors duration-300">
                                <div className="text-white/30 text-xs uppercase tracking-wider mb-2">{h.category}</div>
                                <div className="text-white/90 font-mono text-sm mb-1">{h.spec}</div>
                                <div className="text-[#C9A961]/60 text-xs font-light">{h.detail}</div>
                            </m.div>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-white/30 text-xs italic">* Endgültige BOM variiert je nach Schiffs-/Anwesensrandbedingungen. Hochverfügbarkeits-Redundanzoptionen verfügbar.</p>
                </div>
            </Section>
        </>
    );
}
