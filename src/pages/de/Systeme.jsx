import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeSysteme() {
    return (
        <>
            <SEO
                title="Vœrynth Système – Das Framework"
                description="Vœrynth Système ist ein modulares Steuerungs-Framework für komplexe Umgebungen. Lokal-First, deterministisch, offen für Integration."
                keywords="Vœrynth Système, modulares Steuerungsframework, Heimautomation Framework, deterministisches System"
            />
            <Hero
                title="Vœrynth Système"
                subtitle="Ein Framework. Keine Blackbox."
                bgImage="/assets/platform_hero_bg_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Was Vœrynth Système ist</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Vœrynth Système ist kein Off-the-Shelf-Produkt. Es ist ein modulares Intelligenz-Framework – eine Sammlung koordinierter Schichten, die zusammen eine vollständige Steuerungsinfrastruktur bilden.</p>
                            <p>Jede Installation ist eine eigenständige Konfiguration des Frameworks, angepasst an die spezifische Umgebung, ihre Größe, Komplexität und Anforderungen.</p>
                            <p className="text-white/70 italic">Das Framework ändert sich selten. Die Konfiguration schon.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-10 leading-relaxed">Framework-Eigenschaften</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { label: "Modular", desc: "Schichten sind unabhängig voneinander einsetzbar und erweiterbar." },
                                { label: "Lokal-First", desc: "Kernfunktionen laufen vollständig offline. Cloud ist optional, nie vorausgesetzt." },
                                { label: "Protokollagnostisch", desc: "Der Translation Core abstrahiert Protokolldetails. Hardware kann wechseln, die Logik bleibt." },
                                { label: "Zustandsorientiert", desc: "Alle Entscheidungen basieren auf explizitem Systemzustand – niemals auf impliziten Annahmen." },
                                { label: "Erweiterbar", desc: "Neue Protokolle, Gerätetypen und Integrationen werden als Erweiterungen hinzugefügt." },
                                { label: "Auditierbar", desc: "Jede Systemhandlung ist protokolliert und auf Anfrage einsehbar." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-5 border border-white/8 bg-white/[0.01] space-y-2 hover:border-[#D4AF37]/20 transition-colors duration-200">
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase">{item.label}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Was Vœrynth Système nicht ist</h2>
                        <ul className="space-y-4">
                            {[
                                "Kein Consumer-Produkt mit App-Ökosystem",
                                "Kein Cloud-Dienst mit lokalem Fallback",
                                "Kein System, das auf ständige Updates angewiesen ist",
                                "Keine Plattform mit Lock-in-Strategie"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light list-none">
                                    <span className="text-white/20 mt-1.5 text-xs">✕</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        FRAMEWORK KENNENLERNEN
                    </Link>
                </div>
            </section>
        </>
    );
}
