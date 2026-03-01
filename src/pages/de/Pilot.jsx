import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Rocket } from 'lucide-react';
import SEO from '../../components/core/SEO';
import SmartLink from '../../components/core/SmartLink';

export default function DePilot() {
    const [form, setForm] = useState({ name: '', organization: '', email: '', environment: 'Privatanwesen', timeline: '', notes: '' });
    const [envOpen, setEnvOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'pilot-de', ...form })
        }).then(() => {
            alert('Pilotanfrage eingereicht. Wir melden uns.');
        }).catch(() => alert('Einreichung fehlgeschlagen. Bitte erneut versuchen.'));
    };

    const envOptions = ['Privatanwesen', 'Penthouse', 'Superjacht', 'Industrieanlage', 'Energiesystem'];

    return (
        <>
            <SEO
                title="Pilotprogramm"
                description="Ein Pilot ist kein Demo. Es ist eine produktionsreife Installation mit Diagnose, Abnahmetests und Übergabe."
                keywords="Pilotprogramm, Vœrynth Pilot, Smart Home Pilot, Inbetriebnahme"
            />

            <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/pilot_hero_mobile_v2.webp" />
                        <img
                            src="/assets/pilot_hero_v2.webp"
                            alt="Das Pilotprogramm"
                            className="w-full h-full object-cover opacity-60 saturate-50"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-[#0A0A0A]/70 to-[#080808]/90" />
                </div>
                <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Rocket className="text-[#D4AF37] w-6 h-6" />
                        <span className="text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Produktionsreife Installation</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-8">Das Pilotprogramm</h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Kein Demo. Kein Proof-of-Concept. Ein vollständig in Betrieb genommenes System mit Diagnose, Abnahmetests und Übergabe.
                    </p>
                    <SmartLink to="#anfragen" className="px-8 py-4 bg-[#D4AF37] text-black text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 shadow-lg shadow-[#D4AF37]/10">PILOT ANFRAGEN</SmartLink>
                </m.div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white mb-8">Was „Pilot" bedeutet</h2>
                    <p className="text-white/40 leading-loose max-w-2xl mx-auto">
                        Bei Vœrynth ist ein Pilot keine vereinfachte Version. Es ist dieselbe Architektur, dieselbe Sorgfalt, dieselbe Übergabe — angepasst an Ihre Umgebung, nicht umgekehrt.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">Was enthalten ist</h2>
                        <ul className="space-y-4">
                            {[
                                "Physische Hardware-Protokoll-Diagnose",
                                "Vœrynth Core-Installation (lokale Inferenz)",
                                "Protokoll-Integration (KNX, Zigbee, NMEA 2000, etc.)",
                                "Rollenbasierte Zugriffskontrolle (Eigentümer, Personal, Engineering)",
                                "Inbetriebnahme & Abnahmetests",
                                "Vollständige Übergabe (Schlüssel, Code, Dokumentation)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/60 text-sm font-light">
                                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-light text-white mb-8">Anforderungen</h2>
                        <ul className="space-y-4">
                            {[
                                "Physischer Zugang zur Zielumgebung",
                                "Vorhandene oder geplante Netzwerkinfrastruktur",
                                "Mindestens ein certifiziertes Protokoll-Gateway",
                                "Dedizierter Rechenknoten-Stellplatz (Server-Raum / Rack)",
                                "Eigentümer (oder Vertreter) für Abnahme verfügbar"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/60 text-sm font-light">
                                    <div className="w-1 h-1 bg-white/20 rounded-full mt-2.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#0A0A0A]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-12 text-center">Typischer Zeitplan (8–12 Wochen)</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { week: "Woche 1–2", phase: "Analyse", desc: "Protokoll-Inventar & Diagnose vor Ort" },
                            { week: "Woche 3–5", phase: "Design & Aufbau", desc: "Hardware-Installation, Konfiguration, Integration" },
                            { week: "Woche 6–9", phase: "Inbetriebnahme", desc: "Abnahmetests, Kalibrierung, Chaos-Tests" },
                            { week: "Woche 10–12", phase: "Übergabe", desc: "Schlüsseldokumentation, Schulung, Souveränität" }
                        ].map((step, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 border border-white/5 bg-[#0C0C0C] hover:border-[#D4AF37]/20 transition-all duration-200">
                                <span className="text-[#C9A961] text-xs uppercase tracking-widest block mb-2">{step.week}</span>
                                <h3 className="text-white font-light mb-3">{step.phase}</h3>
                                <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#080808] border-t border-white/5" id="anfragen">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl font-light text-white mb-2 text-center">Pilot anfragen</h2>
                    <p className="text-white/40 text-sm text-center mb-12">Alle Anfragen werden geprüft. Wir melden uns bei geeigneten Umgebungen.</p>
                    <form onSubmit={handleSubmit} name="pilot-de" method="POST" data-netlify="true" className="space-y-8">
                        <input type="hidden" name="form-name" value="pilot-de" />
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Name</label>
                            <input type="text" required className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="Vollständiger Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Organisation</label>
                            <input type="text" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="Optional" value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">E-Mail</label>
                            <input type="email" required name="email" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="Kontakt-E-Mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                        </div>
                        <div className="space-y-2 relative">
                            <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Umgebungstyp</label>
                            <button type="button" onClick={() => setEnvOpen(!envOpen)} className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 text-left focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light flex justify-between items-center">
                                <span>{form.environment}</span>
                                <span className={`transform transition-transform duration-200 ${envOpen ? 'rotate-180' : ''}`}>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30" /></svg>
                                </span>
                            </button>
                            {envOpen && (
                                <m.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute z-50 w-full mt-1 bg-[#0A0A0A] border border-white/10 shadow-2xl">
                                    {envOptions.map(opt => (
                                        <div key={opt} onClick={() => { setForm({ ...form, environment: opt }); setEnvOpen(false); }} className={`px-6 py-4 cursor-pointer transition-colors duration-300 ${form.environment === opt ? 'bg-[#C9A961]/10 text-[#C9A961]' : 'text-white/70 hover:bg-white/[0.02] hover:text-white'}`}>{opt}</div>
                                    ))}
                                </m.div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Gewünschter Zeitrahmen</label>
                            <input type="text" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="z.B. Q3 2025" value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Kontext</label>
                            <textarea className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light h-28 resize-none" placeholder="Beschreiben Sie kurz Ihre Umgebung und Anforderungen..." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
                        </div>
                        <div className="text-center pt-4">
                            <button type="submit" className="border border-[#D4AF37]/30 text-[#C9A961] px-10 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-200">PILOT ANFRAGEN</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
