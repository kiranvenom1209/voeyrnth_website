import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeDesign() {
    return (
        <>
            <SEO
                title="Designphilosophie – Interface als letzter Schritt"
                description="Vœrynths Interface entsteht zuletzt – nach Architektur, Zustandsmodell und Automatisierungslogik. Zurückhaltung ist kein Stil, sondern Systemanforderung."
                keywords="Interface Design Gebäudeautomation, zurückhaltendes UI, minimales Smart Home Interface"
            />
            <Hero
                title="Designphilosophie"
                subtitle="Das Interface ist das Letzte, was wir bauen."
                bgImage="/assets/about_hero_bg_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Zurückhaltung ist keine Ästhetik</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Bei Vœrynth ist das Interface das Ergebnis einer Systemarchitektur, nicht ihr Ausgangspunkt. Es entsteht zuletzt – nachdem Schichtung, Zustandsmodell, Automatisierungslogik und Fehlerverhalten definiert sind.</p>
                            <p>Diese Reihenfolge ist entscheidend. Ein Interface, das früh entworfen wird, formt das Systemdenken. Ein Interface, das spät entworfen wird, reflektiert das Systemdenken.</p>
                            <p className="text-white/70 italic">Wir bauen Systeme für Betreiber – nicht für Demonstrationen.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-10 leading-relaxed">Drei Grundprinzipien</h2>
                        <div className="space-y-8">
                            <div className="border-l-2 border-[#D4AF37]/20 pl-6">
                                <h3 className="text-white/90 text-lg font-light mb-2">Zeige nur, was relevant ist</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">Systemstatus erscheint nur, wenn er sich wesentlich verändert. Stille ist keine Abwesenheit von Information – sie ist Information.</p>
                            </div>
                            <div className="border-l-2 border-[#D4AF37]/20 pl-6">
                                <h3 className="text-white/90 text-lg font-light mb-2">Komplexität bleibt im System</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">Die Komplexität des Systembetriebs gehört ins System, nicht auf den Bildschirm. Der Nutzer arbeitet mit Absichten, nicht mit Implementierungsdetails.</p>
                            </div>
                            <div className="border-l-2 border-[#D4AF37]/20 pl-6">
                                <h3 className="text-white/90 text-lg font-light mb-2">Kontext vor Konfiguration</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">Gute Interfaces verstehen, wo der Nutzer steht. Schlechte Interfaces fragen ständig nach Einstellungen, die das System kennen sollte.</p>
                            </div>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Vœrynth Interface in der Praxis</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Das Vœrynth Interface wird für die jeweilige Umgebung konfiguriert – nicht aus einem Template übertragen. Es zeigt die Räume, Zonen und Aktionen, die für den Betreiber tatsächlich relevant sind.</p>
                            <p>Kein Dashboard voller Widgets. Keine Statusbalken, die niemand liest. Nur das, was gebraucht wird – wenn es gebraucht wird.</p>
                        </div>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
