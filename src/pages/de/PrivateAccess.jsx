import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';
import SuccessModal from '../../components/core/SuccessModal';

export default function DePrivateAccess() {
    const [formState, setFormState] = useState({
        name: '',
        organization: '',
        email: '',
        interest: 'Strategisch',
        message: ''
    });
    const [interestOpen, setInterestOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const encode = (data) =>
            Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'private-access-de', ...formState })
        })
            .then(() => {
                setShowSuccess(true);
                setFormState({ name: '', organization: '', email: '', interest: 'Strategisch', message: '' });
            })
            .catch(() => alert('Verbindung fehlgeschlagen. Bitte erneut versuchen.'));
    };

    const interestLabel = {
        'Kapital': 'Kapital / Investment',
        'Strategisch': 'Strategisches Engagement',
        'Technisch': 'Technische Zusammenarbeit'
    };

    return (
        <>
            <SEO
                title="Strategisches Kapital & Privater Zugang"
                description="Informationen für strategische Investoren und technische Partner. Vœrynth ist kein öffentliches Angebot."
                keywords="strategisches Kapital, Privatinvestition, Family Office, Vœrynth Partner"
                canonical="/de/private-access"
            />
            <Hero
                title="Strategisches Kapital"
                subtitle="Für jene, die leise aufbauen."
                bgImage="/assets/private_access_hero_v2.webp"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">
                        Vœrynth ist kein massenmarktfähiges Produkt. Es ist ein System, das mit Bedacht wächst.
                    </p>
                    <p className="mb-4">
                        Wir befinden uns in einer frühen Phase – bewusst. Nicht aus Mangel an Ambition, sondern weil Zurückhaltung Teil unserer Philosophie ist.
                    </p>
                    <p>
                        Diese Seite existiert für Personen und Institutionen, die verstehen, dass manche Systeme reifen müssen, bevor sie expandieren.
                    </p>
                </div>
            </Hero>

            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Was Vœrynth aufbaut</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            Vœrynth entwickelt eine private Infrastruktur und ein Kontrollökosystem für Umgebungen, in denen Fehler, Lärm und Abhängigkeiten inakzeptabel sind.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-white/80 font-normal mb-4">Schwerpunktbereiche</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Hochwertige private Anwesen",
                                        "Penthäuser und komplexe Wohnstrukturen",
                                        "Superjachten und mobile Umgebungen",
                                        "Industrielle und technische Anlagen",
                                        "Energie- und Sicherheitsorchestrierung"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-sm font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white/80 font-normal mb-4">Warum wir selektiv sind</h3>
                                <p className="text-white/50 leading-loose text-sm font-light mb-4">
                                    Wachstum ist nicht unsere Einschränkung. Integrität hat Priorität. Wir wählen:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Weniger Deployments, ordentlich ausgeführt",
                                        "Langfristige Beziehungen über schnelle Expansion",
                                        "Kapital, das Geduld und Systemdenken versteht"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-sm font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-white/60 text-lg font-light italic border-l border-[#C9A961]/30 pl-6 py-2">
                            Vœrynth ist für Beständigkeit gebaut – nicht für Trends.
                        </p>
                    </m.div>
                </div>
            </Section>

            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img src="/assets/private_access_detail_v2.webp" alt="Privater Zugang" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            <Section className="bg-[#0D0D0D] border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Wofür wir offen sind</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <p className="text-white/50 leading-loose text-base font-light mb-6">Derzeit sind wir offen für:</p>
                                <ul className="space-y-3 mb-6">
                                    {["Strategische Investoren", "Family Offices", "Langfristige Partner mit gemeinsamen Werten", "Technische oder industrielle Kooperationspartner"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-white/40 text-sm italic">Wir führen keine öffentliche Kapitalbeschaffung durch.</p>
                            </div>
                            <div>
                                <p className="text-white/50 leading-loose text-base font-light mb-6">Wir suchen Partner, die verstehen:</p>
                                <ul className="space-y-3">
                                    {["Infrastruktur vor Interfaces", "Stille Verlässlichkeit vor sichtbarem Spektakel", "Langfristiges Eigentum vor kurzfristigem Exit"].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </m.div>
                </div>
            </Section>

            <Section className="border-t border-[#D4AF37]/10" id="kontakt">
                <div className="max-w-xl mx-auto">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-2xl font-light text-white/95 mb-2 leading-relaxed text-center">Privates Gespräch anfragen</h2>
                        <p className="text-white/40 text-center text-sm mb-12 font-light">Anfragen werden selektiv geprüft. Nicht alle erhalten eine Antwort.</p>
                        <form onSubmit={handleSubmit} className="space-y-8" name="private-access-de" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="private-access-de" />
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Name</label>
                                <input type="text" required className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="Vollständiger Name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Organisation / Family Office</label>
                                <input type="text" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="Optional" value={formState.organization} onChange={(e) => setFormState({ ...formState, organization: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">E-Mail-Adresse</label>
                                <input type="email" required name="email" className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light" placeholder="Sichere Kontakt-E-Mail" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
                            </div>
                            <div className="space-y-2 relative">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Interessensbereich</label>
                                <button type="button" onClick={() => setInterestOpen(!interestOpen)} className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 text-left focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light flex justify-between items-center">
                                    <span>{interestLabel[formState.interest]}</span>
                                    <span className={`transform transition-transform duration-200 ${interestOpen ? 'rotate-180' : ''}`}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30" /></svg>
                                    </span>
                                </button>
                                {interestOpen && (
                                    <m.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute z-50 w-full mt-1 bg-[#0A0A0A] border border-white/10 shadow-2xl">
                                        {[{ value: 'Kapital', label: 'Kapital / Investment' }, { value: 'Strategisch', label: 'Strategisches Engagement' }, { value: 'Technisch', label: 'Technische Zusammenarbeit' }].map((opt) => (
                                            <div key={opt.value} onClick={() => { setFormState({ ...formState, interest: opt.value }); setInterestOpen(false); }} className={`px-6 py-4 cursor-pointer transition-colors duration-300 ${formState.interest === opt.value ? 'bg-[#C9A961]/10 text-[#C9A961]' : 'text-white/70 hover:bg-white/[0.02] hover:text-white'}`}>
                                                {opt.label}
                                            </div>
                                        ))}
                                    </m.div>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Nachricht</label>
                                <textarea className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light h-32 resize-none" placeholder="Beschreiben Sie kurz Ihr Interesse..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                            </div>
                            <div className="pt-4 text-center">
                                <button type="submit" className="border border-[#D4AF37]/30 text-[#C9A961] px-10 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-200">
                                    PRIVATEN ZUGANG ANFRAGEN
                                </button>
                            </div>
                        </form>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">Vœrynth wächst durch Absicht, nicht durch Beschleunigung.</p>
                    </m.div>
                </div>
            </section>
            <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} title="Willkommen" message="Ihre Anfrage wurde sicher archiviert. Wir werden sie prüfen und uns gegebenenfalls melden." />
        </>
    );
}
