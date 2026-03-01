import React from 'react';
import { m } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SEO from '../../components/core/SEO';
import SmartLink from '../../components/core/SmartLink';

export default function DeSecurityModel() {
    const trustZones = [
        { zone: "Schnittstelle", color: "#A0AEC0", desc: "Externe Netzwerke, Fernzugriff-Endpunkte, physische Ports. Immer nicht vertrauenswürdig. Jeder Zugriff wird überprüft.", items: ["Geräte-VLANs", "WAN-Grenze", "Physische Türsteuerungen", "Fernzugriff-VPN"] },
        { zone: "Kern", color: "#D4AF37", desc: "Die KI-Richtlinienmaschine und der Orchestrierungskernel. Nur interne Akteure. Keine direkte externe Exposition.", items: ["Richtlinien-Engine", "Vœrynth Core (LLM)", "Audit-Ledger", "Zustandsregister"] },
        { zone: "Steuerung", color: "#68D391", desc: "Aktorik. Protokoll-Adapter zu physischer Hardware. Streng von der Schnittstelle getrennt.", items: ["KNX/DALI-Gateways", "NMEA 2000-Adapter", "Relais und Dimmer", "Notfall-Overrides"] },
        { zone: "Gerät", color: "#FC8181", desc: "Physische Endpunkte. Jedes Gerät ist ein potenzieller Angriffspunkt und wird entsprechend behandelt.", items: ["Sensoren und Schalter", "Leuchten und HLK", "Türen und Schlösser", "Messgeräte"] }
    ];

    const roles = [
        { role: "Eigentümer", level: "Vollständig", desc: "Unrestricted control. Can modify all policies, override any action, and grant roles. Single point of sovereignty.", actions: ["Alle Systemaktionen", "Rollenverwaltung", "Richtlinienänderungen", "Emergency Overrides"] },
        { role: "Personal", level: "Betrieb", desc: "Day-to-day operation. Cannot modify security boundaries or policies. Actions are fully audited.", actions: ["Szenensteuerung", "Geräte-Ein/Aus", "Gästemodus", "Keine Sicherheitsänderungen"] },
        { role: "Engineering", level: "Wartung", desc: "Restricted to maintenance windows. Cannot access sensitive data. Updates are integrity-checked.", actions: ["Nur Wartungsfenster", "Update-Pakete", "Topologie-Diagnose", "Audit-Einsicht"] }
    ];

    return (
        <>
            <SEO
                title="Das Sicherheitsmodell"
                description="Vertrauenszonen, rollenbasierte Steuerung und eine einzige Aktuierungsgrenze – Sicherheit durch Architektur."
                keywords="Sicherheitsmodell, Vertrauenszonen, RBAC, rollenbasierte Zugriffskontrolle, Gebäudeautomation Sicherheit"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/security_model_hero_mobile_v2.webp" />
                        <img
                            src="/assets/security_model_hero_v2.webp"
                            alt="Architektonische Sicherheit"
                            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/50 via-[#0A0A0A]/80 to-[#080808]" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <ShieldCheck className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Architektonische Sicherheit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Das Sicherheitsmodell</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Sicherheit durch Architektur — nicht durch Versprechen.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/proof/audit-log" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">AUDIT-PROTOKOLL ANSEHEN</SmartLink>
                        <SmartLink to="/de/protocols" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">PROTOKOLLE</SmartLink>
                    </div>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Eine Grenze. Ein Hauptbuch.</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Vœrynth leitet jede Aktuierungsanfrage durch eine einzige Richtlinienmaschine. Kein Protokoll aktuiert direkt. Kein Gerät bekommt ungeprüften Zugriff. Jede Aktion erzeugt einen dauerhaften Audit-Eintrag.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">Vertrauenszonen</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {trustZones.map((zone, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 border border-white/5 bg-[#0A0A0A] group hover:border-white/10 transition-all duration-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: zone.color }} />
                                    <h3 className="text-lg text-white font-light">{zone.zone}</h3>
                                </div>
                                <p className="text-sm text-white/40 leading-relaxed mb-6">{zone.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {zone.items.map((item, i) => (
                                        <span key={i} className="text-xs text-white/30 border border-white/5 px-2 py-1 rounded-sm">{item}</span>
                                    ))}
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">Rollenbasierte Zugriffskontrolle</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {roles.map((role, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 border border-white/5 bg-[#0C0C0C] hover:border-[#D4AF37]/20 transition-all duration-200">
                                <div className="mb-2">
                                    <span className="text-[#C9A961] text-xs uppercase tracking-widest">{role.level}</span>
                                </div>
                                <h3 className="text-xl text-white font-light mb-4">{role.role}</h3>
                                <p className="text-xs text-white/40 leading-relaxed mb-6">{role.desc}</p>
                                <ul className="space-y-2">
                                    {role.actions.map((action, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-white/50">
                                            <div className="w-1 h-1 flex-shrink-0 bg-[#D4AF37]/40 rounded-full" />{action}
                                        </li>
                                    ))}
                                </ul>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white mb-6">Kontrollierte Updates & Ablehnungen</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto mb-12">
                        System-Updates erfordern Wartungsfenster. Wenn eine Aktion gegen eine Richtlinie verstößt, wird sie abgelehnt — mit einem vollständigen Audit-Eintrag, der den Grund angibt. Systeme weigern sich, nicht umzulenken.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {[
                            { title: "Wir tun:", items: ["Prüfsummen-überprüfte Update-Pakete", "Updates nur in vorab genehmigten Fenstern", "Rollback auf bekannte gute Version", "Vollständige Änderungshistorie im Audit-Log"] },
                            { title: "Wir tun nicht:", items: ["Stille Updates ohne Protokolleintrag", "Umgehung von Rollengrenzen auch bei Wartung", "Telemetrie oder Heimverbindungen erzwingen", "Richtlinien ohne Eigentümergenehmigung ändern"], bad: true }
                        ].map((section, idx) => (
                            <div key={idx} className="p-8 border border-white/5 bg-[#0A0A0A]">
                                <span className={`text-xs uppercase tracking-widest font-bold mb-4 block ${section.bad ? 'text-red-500/70' : 'text-[#C9A961]'}`}>{section.title}</span>
                                <ul className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-white/50 font-light">
                                            <div className={`w-1 h-1 mt-2 rounded-full flex-shrink-0 ${section.bad ? 'bg-red-500/50' : 'bg-[#D4AF37]'}`} />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Das vollständige Sicherheitspaket?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink to="/de/proof/commissioning" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">INBETRIEBNAHME-NACHWEIS</SmartLink>
                        <SmartLink to="/de/pilot" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">PILOT ANFRAGEN</SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
}
