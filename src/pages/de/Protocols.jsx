import React from 'react';
import { m } from 'framer-motion';
import { Wifi } from 'lucide-react';
import SEO from '../../components/core/SEO';
import SmartLink from '../../components/core/SmartLink';

export default function DeProtocols() {
    const protocols = [
        { proto: "KNX/IP", mode: "Kabelgebunden", access: "Voll", scope: "Beleuchtung, HLK, Beschattung, Szenen", constraint: "Erfordert zertifizierten Bus; Topologie genehmigt" },
        { proto: "DALI-2", mode: "Kabelgebunden", access: "Voll", scope: "Leuchten, Dimmer, Notbeleuchtung, Sensoren", constraint: "Nur Klasse-A-Gateways" },
        { proto: "Modbus RTU/TCP", mode: "Kabelgebunden", access: "Eingeschränkt", scope: "HVAC, Energie, Industrie-I/O", constraint: "Schreibzugriff nur durch zugelassene Aktionen" },
        { proto: "Zigbee 3.0", mode: "Drathlos", access: "Bedingt", scope: "Sensoren, Lasten (Komfort)", constraint: "Nur zertifizierter Koordinator; nicht für Sicherheit" },
        { proto: "Z-Wave", mode: "Drahtlos", access: "Bedingt", scope: "Schlösser, Sensor-Knoten", constraint: "Zertifizierte Region; Schlüssel-Backup erforderlich" },
        { proto: "NMEA 2000", mode: "Kabelgebunden (Yacht)", access: "Voll", scope: "Navigation, Antrieb, Tank-Telemetrie", constraint: "Schiffs-Profil erforderlich; kein Schreib-Override" },
        { proto: "Signal K", mode: "Netzwerk (Yacht)", access: "Voll", scope: "Normalisierter Datenstrom für Instrumente", constraint: "Gilt als Lesen; keine Steuerungsschicht" },
        { proto: "MQTT", mode: "Netzwerk", access: "Eingeschränkt", scope: "Ereignisbus, Telemetrie-Brücke", constraint: "Intern nur; keine öffentlichen Broker" },
        { proto: "REST/WebSocket", mode: "API", access: "Autorisiert", scope: "Zustands-Polling, Event-Stream", constraint: "Rollenbasiert; Protokollierung aller Zugriffe" },
    ];

    return (
        <>
            <SEO
                title="Unterstützte Protokolle & Schnittstellen"
                description="Die vollständige Liste der unterstützten Automationsprotokolle, Zugriffsmodi und Einschränkungen."
                keywords="Automationsprotokolle, KNX, DALI, Modbus, Zigbee, NMEA 2000, Signal K"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/protocols_hero_mobile_v2.webp" />
                        <img
                            src="/assets/protocols_hero_v2.webp"
                            alt="Protokolle"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Wifi className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Integrations-Oberflächen</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Protokolle</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Klare Grenzen. Auditierte Zugriffspunkte. Kein undefiniertes Verhalten.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/hardware" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">HARDWARE-HCL ANSEHEN</SmartLink>
                        <SmartLink to="/de/security/model" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">SICHERHEITSMODELL</SmartLink>
                    </div>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Die Sicherheitsgrenze</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Jede Protokollintegration überschreitet eine Grenze. Vœrynth behandelt jede Grenze als Sicherheitsoberfläche: Zugriff ist typisiert, protokolliert und rollengebunden — kein Protokoll ist von Natur aus vertrauenswürdig.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-light text-white mb-2">Unterstützte Schnittstellen</h2>
                        <p className="text-white/30 text-sm">Zugriff = Aktuierungsebene. Eingeschränkt = nur zugelassene Aktionen. Bedingt = umgebungsabhängig.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium">Protokoll</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium">Modus</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium">Zugriff</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium">Typischer Bereich</th>
                                    <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium">Einschränkungen</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {protocols.map((row, idx) => (
                                    <m.tr key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-5 pr-6 text-[#C9A961] font-medium font-mono">{row.proto}</td>
                                        <td className="py-5 pr-6 text-white/60">{row.mode}</td>
                                        <td className="py-5 pr-6">
                                            <span className={`text-xs px-2 py-1 rounded-sm ${row.access === 'Voll' ? 'bg-green-500/10 text-green-400/70' : row.access === 'Eingeschränkt' ? 'bg-yellow-500/10 text-yellow-400/70' : row.access === 'Bedingt' ? 'bg-orange-500/10 text-orange-400/70' : 'bg-blue-500/10 text-blue-400/70'}`}>{row.access}</span>
                                        </td>
                                        <td className="py-5 pr-6 text-white/50">{row.scope}</td>
                                        <td className="py-5 text-white/40 text-xs">{row.constraint}</td>
                                    </m.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Kein undefinierter Zugriff", desc: "Jede Protokollgrenze ist explizit typisiert. Kein Protokoll hat impliziten Vollzugriff." },
                        { title: "Vollständige Protokollierung", desc: "Protokollgrenzen-Überfahrten werden protokolliert — wer, was, wann, Ergebnis." },
                        { title: "Rollenbasierte Steuerung", desc: "Das Sicherheitsmodell gilt an jeder Grenze. Protokolle respektieren Rollen." }
                    ].map((item, idx) => (
                        <m.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 border border-white/5 bg-[#0C0C0C] hover:border-[#D4AF37]/20 transition-all duration-200">
                            <h3 className="text-white font-light mb-3">{item.title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                        </m.div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-12">Technische Details für Ihr Integrationsteam?</h2>
                    <SmartLink to="/de/contact" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">TECHNIK-GESPRÄCH ANFRAGEN</SmartLink>
                </div>
            </section>
        </>
    );
}
