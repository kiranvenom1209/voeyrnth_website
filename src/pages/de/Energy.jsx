import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeEnergy() {
    return (
        <>
            <SEO
                title="Energieorchestrierung – Last, Speicher, Verteilung"
                description="Vœrynth orchestriert Energieverbrauch, Speicher und Verteilung als ein einheitliches System – autonom, lokal und ohne Effizienzeinbußen."
                keywords="Energiemanagement Anwesen, Lastausgleich, autonome Energiesteuerung, Photovoltaik Integration"
            />
            <Hero
                title="Energieorchestrierung"
                subtitle="Last. Speicher. Verteilung. Ein System."
                bgImage="/assets/platform_hero_bg_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Energie als Systemdimension</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Die meisten Automatisierungssysteme behandeln Energie als Seitenthema – eine Sammlung von Zeitplänen und Sensorauslösern. Vœrynth behandelt Energie als Kerndimension des Betriebs.</p>
                            <p>Last, Erzeugung, Speicher und Verteilung werden in einem gemeinsamen Zustandsmodell verwaltet. Das System versteht, welche Verbraucher prioritär sind, wie viel Puffer im Speicher verbleibt und wann aktive Eingriffe sinnvoll sind.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Autonomer Lastausgleich</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Vœrynth balanciert Lasten automatisch – nicht nach festen Zeitplänen, sondern nach aktuellem Systemzustand. Wenn Solarproduktion hoch ist und Speicher ungenutzt, aktiviert das System gezielt unterkritische Verbraucher.</p>
                            <p>Wenn Netzstrom teuer ist oder Stabilität erfordert, werden nicht-essentielle Lasten zurückgefahren. Ohne manuelle Eingriffe.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { label: "PV-Integration", desc: "Photovoltaik wird als Eingangsquelle in das Steuerungsmodell integriert – nicht als separates System." },
                                { label: "Speichermanagement", desc: "Batteriespeicher werden nach Prioritätsregeln geladen und entladen – deterministisch." },
                                { label: "Netzunabhängigkeit", desc: "Im Inselbetrieb wechselt das System nahtlos auf lokale Quellen – ohne Unterbrechung." },
                                { label: "Verbrauchsanalyse", desc: "Jeder Verbraucher ist im Protokoll erfasst. Anomalien werden erkannt, nicht übersehen." }
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
                        Energie sollte fließen – nicht verwaltet werden. <br />
                        <span className="text-[#C9A961]">Vœrynth übernimmt die Verwaltung.</span>
                    </h3>
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
