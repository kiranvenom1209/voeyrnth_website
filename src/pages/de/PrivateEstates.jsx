import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DePrivateEstates() {
    return (
        <>
            <SEO
                title="Private Anwesen – Steuerung ohne Kompromisse"
                description="Vœrynth für private Anwesen: vereinte Steuerung von Beleuchtung, Klimatisierung, Sicherheit und Energie – deterministisch, lokal und zuverlässig."
                keywords="private Anwesen Automatisierung, Gebäudesteuerung, Smart Home Luxus"
            />
            <Hero
                title="Private Anwesen"
                subtitle="Komplexität, unsichtbar gemacht."
                bgImage="/assets/sol_card_estate_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Das Anwesen als Organismus</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Ein privates Anwesen ist kein Einfamilienhaus. Es ist ein Ökosystem – mit mehreren Gebäuden, unterschiedlichen Nutzungszonen, wechselnden Bewohnern und dauerhafter Infrastruktur.</p>
                            <p>Vœrynth behandelt das Anwesen als Ganzes. Licht, Klima, Sicherheit, Energie und Zugang werden nicht als isolierte Systeme betrieben, sondern als Schichten eines gemeinsamen Steuerungsrahmens.</p>
                            <p className="text-white/70">Das Ergebnis? Kein Schalttafelchaos. Keine widersprüchlichen Subsysteme. Ein Anwesen, das reagiert – nicht antwortet.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Was wir liefern</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { label: "Einheitliche Steuerungsebene", desc: "Alle Subsysteme sprechen eine gemeinsame Systemsprache. Keine Insellösungen." },
                                { label: "Langzeitstabilität", desc: "Keine erzwungenen Updates. Keine Veraltungszyklen. Das System bleibt, wie es gestaltet wurde." },
                                { label: "Ausfallsichere Architektur", desc: "Wenn ein Subsystem ausfällt, bleibt das Gesamtsystem stabil. Fehler sind isoliert, nicht kaskadierend." },
                                { label: "Betreiberklarheit", desc: "Estate Manager und Haustechniker sehen, was relevant ist – und nichts darüber hinaus." }
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

            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h3 className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
                            Ein Anwesen ist kein Showroom. <br />
                            <span className="text-[#C9A961]">Es ist Infrastruktur, die niemals versagen darf.</span>
                        </h3>
                        <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                            PRIVATE DEMO ANFRAGEN
                        </Link>
                    </m.div>
                </div>
            </Section>
        </>
    );
}
