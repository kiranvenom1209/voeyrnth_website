import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeArchitecture() {
    const pillars = [
        { title: "Trennung von Verantwortlichkeiten", desc: "Hardware, Protokolle, Zustandsverwaltung und Interface sind strikt voneinander entkoppelt. Änderungen in einer Schicht dringen nicht in andere ein." },
        { title: "Zustand vor Annahme", desc: "Automatisierungen werden nur zum richtigen Zeitpunkt ausgeführt – prüfen sie Zustandsbedingungen statt auf Annahmen zu vertrauen." },
        { title: "Explizite Fehlermodelle", desc: "Jede Automatisierung hat definierte Ausfallzustände. Kein stilles Scheitern, kein Fehlkaskadieren." },
        { title: "Auditierbarkeit by Design", desc: "Jede Systementscheidung ist protokollierbar – als Betriebsinstrument, nicht als Nachträglichkeit." }
    ];

    return (
        <>
            <SEO
                title="Systemarchitektur – Schichten, die Sinn ergeben"
                description="Vœrynthes technische Architektur: geschichtet, entkoppelt und für Jahrzehnte ausgelegt. Deterministisches Design statt emergenter Komplexität."
                keywords="Systemarchitektur, Softwarearchitektur Gebäudeautomation, deterministische Steuerung"
            />
            <Hero
                title="Systemarchitektur"
                subtitle="Aufgebaut wie etwas, das bleiben soll."
                bgImage="/assets/architecture_hero_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Architektur kommt vor Geräten</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Die meisten Automatisierungsprojekte beginnen mit einer Geräteliste. Vœrynth beginnt mit einer Frage: Wie soll dieses System in fünf Jahren aussehen?</p>
                            <p>Architektur ist das Fundament. Geräte kommen und gehen. Protokolle veralten. Schnittstellen ändern sich. Die Schichtung des Systems – die Art, wie Verantwortlichkeiten voneinander getrennt sind – entscheidet darüber, ob das Fundament trägt.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-10 leading-relaxed">Vier Gestaltungsprinzipien</h2>
                        <div className="space-y-10">
                            {pillars.map((p, idx) => (
                                <div key={idx} className="flex gap-8">
                                    <span className="text-[#C9A961]/30 text-4xl font-light leading-none mt-1">0{idx + 1}</span>
                                    <div>
                                        <h3 className="text-white/90 font-light text-lg mb-2">{p.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <div className="bg-[#0D0D0D] border border-white/5 p-8">
                            <p className="text-white/60 leading-loose text-lg font-light italic text-center">
                                &quot;Emergente Komplexität ist kein Feature. Es ist ein Schuld, die sich irgendwann einlöst.&quot;
                            </p>
                            <p className="text-center text-white/30 text-xs mt-4 tracking-widest uppercase">Vœrynth – Systemphilosophie</p>
                        </div>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        SYSTEMARCHITEKTUR BESPRECHEN
                    </Link>
                </div>
            </section>
        </>
    );
}
