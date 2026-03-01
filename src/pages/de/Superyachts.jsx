import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeSuperyachts() {
    return (
        <>
            <SEO
                title="Superjachten – Autonomie auf See"
                description="Vœrynth für Superjachten: offline-fähige Steuerungssysteme mit geschichteter Sicherheit für mobile, hochverfügbare Umgebungen auf See."
                keywords="Superjacht Automatisierung, maritime Steuerung, Jacht Smart System, Offshore Automatisierung"
            />
            <Hero
                title="Superjachten"
                subtitle="Kein Netz. Keine Kompromisse."
                bgImage="/assets/sol_card_yacht_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Das härteste Testgelände der Welt</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Eine Superjacht ist keine Immobilie mit Wasser darunter. Sie ist ein fahrendes Steuerungssystem unter extremen Bedingungen: Salzluft, Vibration, Verbindungsausfall, wechselnde Besatzung und Gäste mit unterschiedlichen Erwartungen – alles gleichzeitig.</p>
                            <p>Vœrynth wurde nicht für Demonstrationen auf See konzipiert. Es wurde für den Betrieb gebaut – unabhängig davon, ob Konnektivität verfügbar ist oder nicht.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Offline-Autonomie</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Alle Kernfunktionen – Beleuchtung, Klima, Zugang, Sicherheit, Energie – laufen vollständig lokal. Satellitenverbindung ist ein Komfortkanal, keine Betriebsvoraussetzung.</p>
                            <p>Wenn die Verbindung abbricht, ändert sich nichts im Verhalten des Systems. Das ist keine Redundanz – das ist Design.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Sicherheitsarchitektur auf See</h2>
                        <ul className="space-y-4">
                            {[
                                "Geschichtete Zugangssteuerung für Besatzung und Gäste",
                                "Präzise Zonenlogik für Deck, Kabinen und Maschinenraum",
                                "Stille Sicherheitsprotokolle ohne Beeinträchtigung des Gasterlebnisses",
                                "Vollständige Protokollierung aller Systemereignisse"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light list-none">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h3 className="text-xl text-white/90 font-light leading-relaxed mb-8">
                        Auf See gibt es keine zweite Chance. <br />
                        <span className="text-[#C9A961]">Vœrynth ist dafür gebaut.</span>
                    </h3>
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
