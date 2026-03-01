import React from 'react';
import { m } from 'framer-motion';
import { FileSearch, ArrowRight } from 'lucide-react';
import SEO from '../../../components/core/SEO';
import SmartLink from '../../../components/core/SmartLink';

export default function DeProofAuditLog() {
    const logs = [
        { ts: "2026-02-18T21:14:08Z", role: "Personal", intent: "Gästemodus aktivieren", decision: "Erlaubt (Richtlinie: guest_mode_staff_allowed)", action: "Modusübergang ausgeführt", result: "Erfolg", corr: "VX-7F3A-21D4", status: "success" },
        { ts: "2026-02-18T22:02:11Z", role: "Eigentümer", intent: "Beleuchtungsszene einstellen: Abend", decision: "Erlaubt (Richtlinie: scene_owner_allowed)", action: "Szene über Protokoll-Adapter angewendet", result: "Erfolg", corr: "VX-98BC-0A11", status: "success" },
        { ts: "2026-02-18T22:07:44Z", role: "Personal", intent: "Sicherheitsperimeter deaktivieren", decision: "Abgelehnt (Richtlinie: security_owner_only)", action: "Blockiert", result: "Abgelehnt", corr: "VX-31C0-77EE", status: "denied" },
        { ts: "2026-02-18T23:30:05Z", role: "Engineering", intent: "Update-Paket einspielen", decision: "Erlaubt (Richtlinie: maint_window_required) + Wartungsfenster verifiziert", action: "Update staged, Integrität verifiziert", result: "Erfolg", corr: "VX-5AA2-19C9", status: "system" }
    ];

    return (
        <>
            <SEO
                title="Audit-Protokoll & Nachvollziehbarkeit"
                description="Jede Aktion wird aufgezeichnet — wer sie angefordert hat, was erlaubt war, was passierte und warum."
                keywords="Audit-Protokoll, Nachvollziehbarkeit, Steuerungssystem-Logging, Rückverfolgbarkeit, Sicherheitsaudit"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/audit_log_hero_mobile_v2.webp" />
                        <img
                            src="/assets/audit_log_hero_v2.webp"
                            alt="Audit-Beispiel"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <FileSearch className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Vollständige Nachvollziehbarkeit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Audit-Beispiel</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Jede Aktion wird aufgezeichnet — wer sie angefordert hat, was erlaubt war, was passierte und warum.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/security/model" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">SICHERHEITSMODELL ANSEHEN</SmartLink>
                        <SmartLink to="/de/proof/release-policy" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">RELEASE-RICHTLINIE</SmartLink>
                    </div>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Ein Tor. Ein Hauptbuch.</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Vœrynth leitet Aktuierungen durch eine einzige Richtliniengrenze. Das Audit-Hauptbuch zeichnet die vollständige Kette mit Korrelations-IDs auf — Änderungen sind erklärbar, auch Jahre später.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl font-light text-white mb-8">Was aufgezeichnet wird</h2>
                        <ul className="space-y-4">
                            {["Akteur-Identität und Rolle", "Angeforderte Absicht", "Richtlinienentscheidung (erlaubt/abgelehnt + Grund)", "Ausgeführte Aktion (oder blockiert)", "Ergebnis und System-Zustandsdelta", "Korrelations-ID über die gesamte Kette"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/60 text-sm">
                                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-xs text-white/20 uppercase tracking-widest">Beispieleinträge sind bereinigt.</p>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-light text-white mb-8">Beispieleinträge (Bereinigt)</h2>
                        <div className="space-y-4">
                            {logs.map((log, idx) => (
                                <div key={idx} className="p-4 bg-[#0F0F0F] border border-white/5 rounded-sm font-mono text-xs">
                                    <div className="flex justify-between text-white/30 mb-2 border-b border-white/5 pb-2">
                                        <span>{log.ts}</span>
                                        <span>{log.corr}</span>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Rolle</span>
                                            <span className="text-white/80">{log.role}</span>
                                        </div>
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Absicht</span>
                                            <span className="text-white/80">&quot;{log.intent}&quot;</span>
                                        </div>
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Entscheidung</span>
                                            <span className={log.status === 'denied' ? 'text-red-400' : 'text-green-400/80'}>{log.decision}</span>
                                        </div>
                                        <div>
                                            <span className="block text-white/20 uppercase tracking-wider text-[10px]">Ergebnis</span>
                                            <span className="text-white/60">{log.result}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white mb-6">Warum Korrelations-IDs wichtig sind</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Ein System ist nur dann nachvollziehbar, wenn man ein Ergebnis auf eine Entscheidung und einen Akteur zurückverfolgen kann — ohne Spekulation.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Das vollständige Sicherheitspaket?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <SmartLink to="/de/proof/commissioning" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">INBETRIEBNAHME</SmartLink>
                        <SmartLink to="/de/pilot" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">PILOT ANFRAGEN</SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
}
