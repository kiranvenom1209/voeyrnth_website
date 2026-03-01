import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeAutomations() {
    const types = [
        {
            title: "Szenische Automatisierung",
            desc: "Licht, Klima, Beschattung und Audio werden als kohärente Szene behandelt – nicht als unabhängige Ein/Aus-Schalter.",
            detail: "Eine Szene ist ein Systemzustand, kein Befehlsbatch."
        },
        {
            title: "Zustandsbasierte Logik",
            desc: "Automatisierungen prüfen Systemzustand, bevor sie ausgeführt werden. Kein blinder Trigger ohne Kontextüberprüfung.",
            detail: "\"Wenn Türstatus = offen und Zeit > 22:00 Uhr\" – nicht \"Wenn Bewegung erkannt\"."
        },
        {
            title: "Eskalationspfade",
            desc: "Kritische Ereignisse haben definierte Eskalationsstufen. Von stiller Benachrichtigung bis zur aktiven Intervention.",
            detail: "Keine Panikreaktion. Kalkuliertes, ruhiges Eskalieren."
        },
        {
            title: "Zeitgesteuerte Orchestrierung",
            desc: "Zeitbasierte Automatisierungen berücksichtigen Kontext – Sonnenstand, Belegungszustand, Wochentag, Saison.",
            detail: "Präzision ist keine Ausnahme. Sie ist Standard."
        }
    ];

    return (
        <>
            <SEO
                title="Automatisierungen – Präzision, keine Zauberei"
                description="Vœrynth-Automatisierungen basieren auf expliziten Zustandsprüfungen, nicht auf KI-Magie. Verlässlich, nachvollziehbar und ausfallsicher."
                keywords="Automatisierungslogik, Gebäudeautomation Regeln, Smart Home Automatisierung zuverlässig"
            />
            <Hero
                title="Automatisierungen"
                subtitle="Präzision statt Magie."
                bgImage="/assets/platform_hero_bg_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Automatisierung ist kein Trick</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Viele Systeme versprechen «intelligente Automatisierung» und meinen damit: komplexe Regeln, die niemand versteht, und Verhalten, das niemand vorhersehen kann.</p>
                            <p>Vœrynth-Automatisierungen sind explizit. Jede Regel hat einen definierten Auslöser, eine Vorbedingungsprüfung und einen klar spezifizierten Effekt. Keine Magie. Kein emergentes Verhalten, das niemand geplant hat.</p>
                            <p className="text-white/70 italic">Wenn eine Automatisierung nicht erklärbar ist, sollte sie nicht existieren.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-10 leading-relaxed">Vier Automatisierungstypen</h2>
                        <div className="space-y-8">
                            {types.map((type, idx) => (
                                <div key={idx} className="border border-white/8 bg-white/[0.01] p-6 hover:border-[#D4AF37]/20 transition-colors duration-200">
                                    <h3 className="text-white/90 font-light text-base mb-2">{type.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-light mb-3">{type.desc}</p>
                                    <p className="text-white/30 text-xs italic font-light">{type.detail}</p>
                                </div>
                            ))}
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Ausfallverhalten ist Pflicht, nicht Option</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Jede Vœrynth-Automatisierung hat ein definiertes Ausfallverhalten. Wenn ein Subsystem nicht antwortet, wird nicht blind weitergeführt. Das System fällt in einen sicheren, definierten Zustand zurück.</p>
                            <p>Kein stilles Scheitern. Kein unkontrolliertes Kaskadieren. Nur erzwungene Klarheit über das, was als nächstes passiert.</p>
                        </div>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h3 className="text-xl text-white/90 font-light leading-relaxed mb-8">
                        Automatisierungen sollen arbeiten. <br />
                        <span className="text-[#C9A961]">Nicht erklären, warum sie es nicht tun.</span>
                    </h3>
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
