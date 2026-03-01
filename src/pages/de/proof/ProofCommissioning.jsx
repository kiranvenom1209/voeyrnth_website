import React from 'react';
import { m } from 'framer-motion';
import { CheckCircle2, FileText, Server, AlertTriangle, Database } from 'lucide-react';
import SEO from '../../../components/core/SEO';
import SmartLink from '../../../components/core/SmartLink';

export default function DeProofCommissioning() {
    return (
        <>
            <SEO
                title="Inbetriebnahme & Abnahme"
                description="Abnahmetests, die beweisen, dass sich das System auch unter Ausfällen verhält — nicht nur unter perfekten Bedingungen."
                keywords="Inbetriebnahme, Abnahmetests, Systemvalidierung, Steuerungssystem-Inbetriebnahme"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/commissioning_hero_mobile_v2.webp" />
                        <img
                            src="/assets/commissioning_hero_v2.webp"
                            alt="Inbetriebnahme"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <CheckCircle2 className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Nachweis der Validierung</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Inbetriebnahme</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Abnahmetests, die beweisen, dass sich das System auch unter Ausfällen verhält — nicht nur unter perfekten Bedingungen.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/pilot" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                        <SmartLink to="/de/proof/release-policy" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">RELEASE-RICHTLINIE</SmartLink>
                    </div>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Inbetriebnahme ist keine Installation</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Ein in Betrieb genommenes System wird als Ganzes validiert: Netzwerkgrenzen, Ausfallverhalten, manuelle Overrides und Audit-Integrität. Das Ziel ist ein vorhersehbarer Betrieb über Jahre — kein erfolgreicher Demo.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-light text-white mb-2">Abnahmetests (bereinigt)</h2>
                        <p className="text-white/30 text-sm">Beispiele für Validierungsvektoren, die bei der Inbetriebnahme verwendet werden.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Kategorie</th>
                                    <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Test</th>
                                    <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium">Bestehungskriterium</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { cat: "Offline-Betrieb", test: "WAN-Zugang entfernen", crit: "Kernsteuerung bleibt betriebsbereit; keine versteckte Abhängigkeit blockiert den Betrieb." },
                                    { cat: "Degradierter Modus", test: "Subsystem / Gateway deaktivieren", crit: "Nur betroffene Funktionen degradieren; nicht verwandte bleiben stabil." },
                                    { cat: "Wiederherstellung", test: "Subsystem wiederherstellen", crit: "Zustand wird abgeglichen; keine Phantom-Aktionen; Logs zeigen Wiederherstellungssequenz." },
                                    { cat: "Manueller Override", test: "Physische Steuerungen / Overrides verwenden", crit: "Overrides funktionieren immer; Software spiegelt echten Zustand." },
                                    { cat: "Richtliniendurchsetzung", test: "Verbotene Aktion versuchen", crit: "Aktion abgelehnt; Ablehnung mit Grund protokolliert." },
                                    { cat: "Audit-Integrität", test: "Aktionskette überprüfen", crit: "Akteur → Entscheidung → Aktion → Ergebnis mit Korrelations-ID erfasst." },
                                    { cat: "Sicherung & Wiederherstellung", test: "Aus Sicherungs-Bundle wiederherstellen", crit: "System kehrt in bekannten Zustand zurück; Invarianten intakt." },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-6 pr-6 text-[#C9A961] font-medium">{row.cat}</td>
                                        <td className="py-6 pr-6 text-white/80">{row.test}</td>
                                        <td className="py-6 text-white/50 leading-relaxed">{row.crit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-light text-white mb-12 text-center">Was der Kunde erhält</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Abnahmebericht", icon: CheckCircle2, desc: "Eine unterzeichnete Inbetriebnahme-Zusammenfassung der Tests und Ergebnisse." },
                            { title: "Referenztopologie", icon: Server, desc: "Eine bereinigte Netzwerkkarte und Vertrauenszondiagramm." },
                            { title: "Konfigurationsexport", icon: Database, desc: "Ein versioniertes Konfigurations-Bundle für Wiederherstellung und Audit." },
                            { title: "Änderungshistorie", icon: FileText, desc: "Eine saubere Aufzeichnung der Modifikationen und Release-Versionen." },
                        ].map((item, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 border border-white/5 bg-[#0C0C0C] text-center group hover:border-[#D4AF37]/30 transition-all duration-200">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-6 group-hover:bg-[#D4AF37]/10 transition-colors">
                                    <item.icon className="w-6 h-6 text-white/50 group-hover:text-[#D4AF37]" />
                                </div>
                                <h3 className="text-lg text-white font-light mb-3">{item.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#D4AF37]/20 rounded-full">
                        <AlertTriangle className="w-4 h-4 text-[#C9A961]" />
                        <span className="text-xs uppercase tracking-widest text-[#C9A961]">Warum das wichtig ist</span>
                    </div>
                    <ul className="space-y-6">
                        <li className="text-xl md:text-2xl text-white/80 font-light">Vorhersehbarer Ausfall ist sicherer als überraschender Erfolg.</li>
                        <li className="text-xl md:text-2xl text-white/80 font-light">Inbetriebnahme reduziert langfristige Wartungskosten.</li>
                        <li className="text-xl md:text-2xl text-white/80 font-light">Nachvollziehbarkeit ist nur dann ein Feature, wenn sie den realen Betrieb übersteht.</li>
                    </ul>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Das bei Ihnen sehen?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink to="/de/pilot" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                        <SmartLink to="/de/proof/audit-log" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">AUDIT-BEISPIEL ANSEHEN</SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
}
