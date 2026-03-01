import React from 'react';
import { m } from 'framer-motion';
import { ShieldCheck, RefreshCw } from 'lucide-react';
import SEO from '../../../components/core/SEO';
import SmartLink from '../../../components/core/SmartLink';

export default function DeProofReleasePolicy() {
    return (
        <>
            <SEO
                title="Release-Richtlinie"
                description="Kontrollierte Updates, kuratierte Hardware und Rollback-Disziplin — damit Produktion nie zum Experiment wird."
                keywords="Release-Richtlinie, Software-Updates, Rollback, Hardware-Validierung, stabiles Deployment"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/release_policy_hero_mobile_v2.webp" />
                        <img
                            src="/assets/release_policy_hero_v2.webp"
                            alt="Release-Richtlinie"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <ShieldCheck className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Geschützter Lebenszyklus</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Release-Richtlinie</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Kontrollierte Updates, kuratierte Hardware und Rollback-Disziplin — damit Produktion nie zum Experiment wird.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/pilot" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                        <SmartLink to="/de/proof/commissioning" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">INBETRIEBNAHME-NACHWEIS</SmartLink>
                    </div>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Keine Überraschungs-Updates</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Vœrynth wird als in Betrieb genommene Infrastruktur geliefert. Releases werden gegen eine Hardware-Matrix und Betriebsszenarien validiert, bevor sie Produktionsumgebungen erreichen.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-light text-white mb-2">Release-Ringe</h2>
                        <p className="text-white/30 text-sm">Jedes Update durchläuft strenge Tore.</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { ring: "Ring 0", name: "Entwicklung", desc: "Schnelle Iteration. Nicht produktionssicher.", type: "danger" },
                            { ring: "Ring 1", name: "Lab-Rigs", desc: "Hardware-Matrix-Validierung. Regressionsgate.", type: "warning" },
                            { ring: "Ring 2", name: "Pilot", desc: "Tests in realer Umgebung in Wartungsfenstern.", type: "caution" },
                            { ring: "Ring 3", name: "Produktion", desc: "Kontrolliertes Rollout auf in Betrieb genommene Systeme.", type: "success" },
                            { ring: "Ring 4", name: "Allgemein", desc: "Breite Verfügbarkeit nach stabiler Produktionsleistung.", type: "stable" }
                        ].map((item, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 border border-white/5 bg-[#0A0A0A] flex flex-col h-full relative overflow-hidden group hover:border-white/10 transition-colors">
                                <div className={`absolute top-0 left-0 w-full h-1 ${item.type === 'danger' ? 'bg-red-500/50' : item.type === 'warning' ? 'bg-orange-500/50' : item.type === 'caution' ? 'bg-yellow-500/50' : item.type === 'success' ? 'bg-[#D4AF37]' : 'bg-green-500/50'}`} />
                                <span className="text-xs uppercase tracking-widest text-white/30 mb-2">{item.ring}</span>
                                <h3 className="text-lg text-white font-medium mb-3">{item.name}</h3>
                                <p className="text-xs text-white/40 leading-relaxed mt-auto">{item.desc}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">Update-Regeln</h2>
                        <ul className="space-y-4">
                            {[
                                "Releases sind gepinnt, versioniert und als Set validiert.",
                                "Updates werden authentifiziert und integritätsgeprüft.",
                                "Updates werden innerhalb von Wartungsfenstern geplant.",
                                "Rollback auf das letzte bekannt-gute Release wird unterstützt.",
                                "Notfall-Sicherheits-Hotfixes nutzen eine separate beschleunigte Spur."
                            ].map((rule, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/60 text-sm font-light">
                                    <RefreshCw className="w-4 h-4 mt-1 text-[#D4AF37]/70 flex-shrink-0" />
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">Was wir tun &amp; nicht tun</h2>
                        <div className="space-y-8">
                            <div>
                                <span className="text-[#C9A961] text-xs uppercase tracking-widest font-bold mb-4 block">Wir tun:</span>
                                <ul className="space-y-2 text-sm text-white/50">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" />Sicherheits-Patches mit verifizierbarer Kompatibilität.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" />Stabilitätsverbesserungen mit dokumentierten Verhaltensänderungen.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D4AF37] rounded-full" />Neue Integrationen nur auf zertifizierter Hardware validiert.</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-red-500/70 text-xs uppercase tracking-widest font-bold mb-4 block">Wir tun nicht:</span>
                                <ul className="space-y-2 text-sm text-white/50">
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500/50 rounded-full" />Versteckte Abhängigkeiten einführen.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500/50 rounded-full" />Unvalidierte Hardware-Änderungen in Produktion bringen.</li>
                                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500/50 rounded-full" />Rollengrenzen oder Audit-Semantik brechen.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gradient-to-b from-[#080808] to-[#050505] border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-6">Ruhe vor Neuheit?</h2>
                    <p className="text-white/40 mb-12 max-w-xl mx-auto">
                        Wenn Sie eine Umgebung wollen, die über Jahre stabil bleibt — nicht über Wochen — beginnen Sie mit einem in Betrieb genommenen Pilot.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <SmartLink to="/de/pilot" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                        <SmartLink to="/de/security/model" className="px-8 py-4 border border-white/10 text-white/70 text-sm tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 backdrop-blur-sm">SICHERHEITSMODELL ANSEHEN</SmartLink>
                    </div>
                </div>
            </section>
        </>
    );
}
