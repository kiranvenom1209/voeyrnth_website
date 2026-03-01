import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeOS() {
    return (
        <>
            <SEO
                title="Vœrynth OS – Das Betriebsfundament"
                description="Das Betriebssystem unter Vœrynth Système: gehärtet, deterministisch, lokal. Eine Plattform, die nicht bemerkt wird – weil sie nie versagt."
                keywords="Vœrynth OS, Steuerungsbetriebssystem, lokales Betriebssystem Gebäudeautomation"
            />
            <Hero
                title="Vœrynth OS"
                subtitle="Das Fundament, das niemand bemerkt."
                bgImage="/assets/platform_hero_bg_v2.webp"
            />

            <Section>
                <div className="max-w-3xl mx-auto space-y-20">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Was unter der Oberfläche läuft</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>Vœrynth OS ist nicht sichtbar – und das ist beabsichtigt. Es ist das Betriebsfundament, auf dem alle Schichten des Système laufen. Gehärtet, minimal, für einen einzigen Zweck optimiert: stabil zu laufen.</p>
                            <p>Kein unnötiger Dienst. Keine offenen Ports, die nicht gebraucht werden. Keine Hintergrundupdates, die das Systemverhalten unerwartet ändern.</p>
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-3xl font-light text-white/95 mb-10 leading-relaxed">Betriebseigenschaften</h2>
                        <div className="space-y-6">
                            {[
                                { label: "Minimal Surface", desc: "Nur Dienste, die tatsächlich gebraucht werden, laufen. Alles andere ist deaktiviert." },
                                { label: "Kontrollierte Updates", desc: "Updates werden nicht automatisch eingespielt. Jede Änderung ist geplant, getestet und dokumentiert." },
                                { label: "Boot-Stabilität", desc: "Das System startet in einem definierten Zustand – unabhängig davon, wie es zuletzt verlassen wurde." },
                                { label: "Hardware-Unabhängigkeit", desc: "Vœrynth OS läuft auf unterschiedlicher Hardware – von arm-basierten Controllern bis zu x86-Industrierechnern." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <span className="text-[#C9A961]/30 text-3xl font-light leading-none mt-0.5 shrink-0">0{idx + 1}</span>
                                    <div>
                                        <h3 className="text-white/90 font-light mb-1">{item.label}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </m.div>

                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <div className="bg-[#0D0D0D] border border-white/5 p-8 text-center">
                            <p className="text-white/60 leading-loose text-lg font-light italic">
                                &quot;Das Beste, was ein Betriebssystem tun kann, ist unbemerkt zu bleiben.&quot;
                            </p>
                            <p className="text-white/30 text-xs mt-4 tracking-widest uppercase">Vœrynth – Systemphilosophie</p>
                        </div>
                    </m.div>
                </div>
            </Section>

            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium">
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </section>
        </>
    );
}
