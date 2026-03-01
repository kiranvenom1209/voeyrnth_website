import React from 'react';
import { m } from 'framer-motion';
import { Cpu, AlertTriangle } from 'lucide-react';
import SEO from '../../components/core/SEO';
import SmartLink from '../../components/core/SmartLink';

export default function DeHardware() {
    return (
        <>
            <SEO
                title="Hardware-Zertifizierung"
                description="Kuratierte Geräte, validierte Topologien und bekannte Fehlermodi – weil Zuverlässigkeit eine Entscheidung ist."
                keywords="Hardware-Zertifizierung, Automatisierungs-Hardware, KNX, Zigbee, HCL"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/hardware_hero_mobile_v2.webp" />
                        <img
                            src="/assets/hardware_hero_v2.webp"
                            alt="Hardware-Zertifizierung"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Cpu className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Validierte Infrastruktur</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Hardware-Zertifizierung</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Kuratierte Geräte, validierte Topologien und bekannte Fehlermodi — weil Zuverlässigkeit eine Entscheidung ist.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/pilot" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                        <SmartLink to="/de/protocols" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">PROTOKOLLE ANSEHEN</SmartLink>
                    </div>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Ausschließlich zertifizierte Hardware</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">Produktionsumgebungen sind keine Labore. Vœrynth wird mit einem validierten Hardware-Set in Betrieb genommen, damit das Verhalten über Updates, Austausche und Zeit hinweg stabil bleibt.</p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-light text-white mb-2">Hardware-Kompatibilitätsliste (HCL)</h2>
                        <p className="text-white/30 text-sm">Die folgenden Einträge sind Beispiele. Wir pflegen eine versionierte HCL pro Release-Linie.</p>
                    </div>
                    <div className="space-y-16">
                        <div>
                            <div className="flex items-center gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-green-500/80" /><h3 className="text-lg text-white font-medium">Klasse A — Genehmigt</h3></div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead><tr className="border-b border-white/10">
                                        <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Kategorie</th>
                                        <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Modell/Klasse</th>
                                        <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Hinweise</th>
                                        <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium w-1/4">Austausch</th>
                                    </tr></thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Kabelgebundenes Gateway", model: "KNX IP Interface", notes: "Stabile Topologie; versionsgebunden", rep: "Durch gleiche Klasse ersetzen; Bundle wiederherstellen" },
                                            { cat: "Mesh-Koordinator", model: "Zigbee-Koordinator", notes: "Zertifizierte Firmware; überwacht", rep: "Ersetzen, per Inbetriebnahme-Prozedur neu koppeln" },
                                            { cat: "Mesh-Controller", model: "Z-Wave-Controller", notes: "Zertifizierte Region; überwacht", rep: "Ersetzen, Netzwerkschlüssel wiederherstellen" },
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
                        <div>
                            <div className="flex items-center gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-yellow-500/80" /><h3 className="text-lg text-white font-medium">Klasse B — Bedingt</h3></div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead><tr className="border-b border-white/10">
                                        <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/3">Kategorie</th>
                                        <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/3">Modell/Klasse</th>
                                        <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium w-1/3">Bedingungen</th>
                                    </tr></thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Bluetooth-Gateway", model: "BLE-Bridge", cond: "Erlaubt für Komfort; nicht für sicherheitskritische Steuerung" },
                                            { cat: "Consumer-Hubs", model: "Generische Hubs", cond: "Nur als isolierte Grenzgeräte; keine Kernabhängigkeit" },
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
                        <div>
                            <div className="flex items-center gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-red-500/80" /><h3 className="text-lg text-white font-medium">Klasse C — Nicht unterstützt</h3></div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead><tr className="border-b border-white/10">
                                        <th className="py-4 pr-6 text-xs uppercase tracking-widest text-white/40 font-medium w-1/2">Kategorie</th>
                                        <th className="py-4 text-xs uppercase tracking-widest text-white/40 font-medium w-1/2">Grund</th>
                                    </tr></thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Nicht-zertifizierte Klone", reason: "Instabile Firmware / inkonsistentes Verhalten" },
                                            { cat: "Auto-update-Geräte", reason: "Herstellerupdates brechen deterministisches Verhalten" },
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

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-light text-white mb-8">Was Zertifizierung beinhaltet</h2>
                        <ul className="space-y-4 text-white/60 text-sm font-light">
                            {["Firmware-Versionseinschränkungen", "Topologie- und Platzierungsregeln", "Ausfall- und Wiederherstellungsverhalten", "Update-Kompatibilitätsprüfungen", "Austauschprozedur"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" />{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 border border-white/5 bg-[#0C0C0C] flex flex-col items-center text-center">
                        <AlertTriangle className="w-12 h-12 text-[#D4AF37]/50 mb-6" />
                        <h3 className="text-lg text-white font-light mb-2">Stabilität zuerst</h3>
                        <p className="text-xs text-white/40 leading-relaxed">Wir unterstützen nur, was wir testen, validieren und garantieren können. Wenn es im Labor versagt, kommt es nicht zu Ihnen.</p>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Systeme, die gut altern?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink to="/de/pilot" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                        <SmartLink to="/de/proof/release-policy" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">RELEASE-RICHTLINIE ANSEHEN</SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
}
