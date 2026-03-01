import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DePenthouses() {
    return (
        <>
            <SEO
                title="Penthäuser – Präzision im urbanen Raum"
                description="Vœrynth für Penthäuser: maximale Orchestrierung auf minimalem Raum. Zurückhaltende Steuerung für urbane Residenzen höchster Kategorie."
                keywords="Penthouse Automatisierung, urbane Residenz Steuerung, Luxus Apartment Smart Home"
            />
            <Hero
                title="Penthäuser"
                subtitle="Urbane Dichte. Architectonische Stille."
                bgImage="/assets/sol_card_penthouse_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Wenig Raum. Maximale Anforderungen.</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Penthäuser stellen besondere Anforderungen: komprimierter Raum, hochwertige Oberflächen, empfindliche Nachbarschaft und der Anspruch einer Residenz, die sich groß anfühlt – ohne es zu sein.</p>
                            <p>Vœrynth passt seine Steuerungslogik der Geometrie des Raums an. Zonenregeln, Lichtszenen, Klimaprofile und Sicherheitsparameter werden präzise auf das Penthouse abgestimmt – nicht aus einem Template übertragen.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Diskretion als Systemanforderung</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>In urbanen Hochhäusern ist Diskretion keine Ästhetik – sie ist eine technische Notwendigkeit. Keine sichtbaren Bedienelemente, die das Interieur stören. Keine Benachrichtigungen, die den Alltag unterbrechen. Keine Verbindungsausfälle in kritischen Momenten.</p>
                            <p className="text-white/70 italic">Das Interface zieht sich zurück. Das System arbeitet.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { label: "Lokale Kontrolle", desc: "Kein Ausfall bei Internetunterbrechung. Der Kern läuft lokal." },
                                { label: "Stille Logik", desc: "Szenensteuerung und Automatisierungen laufen ohne Nutzereingabe – wenn sie sollen." },
                                { label: "Integrationstiefe", desc: "AV, Beschattung, Klima und Sicherheit in einem gemeinsamen Zustandsmodell." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 border border-white/8 bg-white/[0.01] space-y-3">
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase">{item.label}</h3>
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
                        Technologie sollte dem Raum dienen. <br />
                        <span className="text-[#C9A961]">Nicht seinen Charakter überlagern.</span>
                    </h3>
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
