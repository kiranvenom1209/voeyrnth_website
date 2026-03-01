import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeIndustrialSuites() {
    return (
        <>
            <SEO
                title="Industrielle Suiten – Betreiberqualität, keine Kompromisse"
                description="Vœrynth für industrielle Umgebungen: Betreiberqualität durch auditierbare, deterministisch betriebene Steuerungssysteme."
                keywords="industrielle Automatisierung, Betreibersteuerung, auditierbare Systeme, deterministische Logik"
            />
            <Hero
                title="Industrielle Suiten"
                subtitle="Betreiberqualität. Ohne Rauschen."
                bgImage="/assets/sol_card_industrial_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Wenn das System nicht ausfallen darf</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Industrielle Suiten – Rechenzentren, Betriebsleitstände, Hochsicherheitsbereiche – stellen andere Anforderungen als Wohnumgebungen. Hier zählen nicht Komfort, sondern Kontinuität, Rückverfolgbarkeit und Kontrolle.</p>
                            <p>Vœrynth liefert deterministisch betriebene Steuerungslogik: keine Verhaltensabweichungen, keine cloudabhängigen Entscheidungspfade, keine Black Boxes.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Auditierbarkeit als Grundanforderung</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>In regulierten Umgebungen ist Protokollierung kein Sicherheitsmerkmal – sie ist eine Compliance-Pflicht. Vœrynth protokolliert jede Systementscheidung, jeden Zustandswechsel und jeden Benutzereingriff in einem strukturierten, lesbaren Format.</p>
                            <p>Nicht als Archiv. Als aktives Betriebsinstrument.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { label: "Zugangsmanagement", desc: "Rollenbasierte Zugangskontrolle für unterschiedliche Betreiberebenen." },
                                { label: "Redundanzarchitektur", desc: "Kritische Regeln laufen auf Fallback-Pfaden, wenn primäre Systeme ausfallen." },
                                { label: "Keine Cloud-Abhängigkeit", desc: "Steuerungslogik verbleibt vollständig lokal – unabhängig vom Internet." },
                                { label: "Strukturierte Protokolle", desc: "Jedes Ereignis ist timestamped, versioniert und export-fähig." }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-2 border-[#D4AF37]/20 pl-6">
                                    <h3 className="text-white/90 font-light mb-2">{item.label}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h3 className="text-xl text-white/90 font-light leading-relaxed mb-8">
                        Industrielle Umgebungen verdienen industrielle Sorgfalt. <br />
                        <span className="text-[#C9A961]">Nicht Konsumentenprodukte in professionellem Gewand.</span>
                    </h3>
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
