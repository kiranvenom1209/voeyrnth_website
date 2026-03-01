import React from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeSecurity() {
    return (
        <>
            <SEO
                title="Sicherheit & Privatsphäre – Mehr als Kameras"
                description="Sicherheit, die Präsenz versteht, nicht nur Bewegung. Ein geschichteter, datenschutzorientierter Ansatz für Überwachung und Schutz von Anwesen."
                keywords="Anwesensicherheit, Überwachung, Präsenzerkennung, diskrete Sicherheit"
            />
            <Hero
                title="Sicherheit & Überwachung"
                subtitle="Aufmerksamkeit ohne Paranoia."
                bgImage="/assets/security_hero_v2.webp"
            >
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Echte Sicherheit ist besonnen – nicht reaktiv.
                </p>
            </Hero>

            {/* Mehr als Kameras */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Mehr als Kameras</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Vœrynth-Sicherheit geht nicht ums Beobachten – sie geht ums Verstehen von Präsenz.
                        </p>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Das System unterscheidet normale Muster von Abweichungen und kennt Eskalationsschwellen – ohne dass ständige Überwachung durch Menschen notwendig ist.
                        </p>
                        <p className="text-white/40 text-sm italic font-light">
                            Keine pausenlosen Alarme. Kein künstlicher Druck auf die Aufmerksamkeit.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Bild */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/security_detail_v2.webp"
                    alt="Sicherheitsdetail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* Geschichtetes Sicherheitsmodell */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Geschichtetes Sicherheitsmodell</h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Physische Zugangs­kontrolle",
                                "Präsenzerkennung",
                                "Zonenbasierte Verhaltensregeln",
                                "Stille Eskalationspfade",
                                "Vollständige Nachvollziehbarkeit"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                    <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Jede Aktion ist nachverfolgbar. Nichts bleibt im Verborgenen.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Diskrete Sicherheit */}
            <Section className="bg-[#0D0D0D]">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Konzipiert für Diskretion</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Keine blinkenden Warnmeldungen. Keine aggressiven Benachrichtigungen. <br />
                            Sicherheit bleibt im Hintergrund – bis sie wirklich gefragt ist.
                        </p>
                        <p className="text-white/60 leading-loose text-lg font-light border-t border-white/5 pt-8">
                            <strong>Warum Kunden es wählen:</strong> Weil es schützt, ohne den Charakter des Raums zu verändern.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Privatsphäre */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Privatsphäre ist kein Einstellparameter</h2>
                        <div className="space-y-4 text-white/50 leading-loose text-base font-light">
                            <p>Alle Daten bleiben standardmäßig lokal. Es werden keine Aufnahmen, keine biometrischen Daten und keine Verhaltensinformationen in externe Dienste übertragen – es sei denn, dies wird ausdrücklich gewünscht.</p>
                            <p>Sicherheit ohne Datenschutz ist kein Schutz. Es ist Überwachung.</p>
                            <p className="text-white/70 italic">Vœrynth behandelt das Anwesen seiner Kunden so, wie es sein sollte: als privaten Raum.</p>
                        </div>
                    </m.div>
                </div>
            </Section>

            {/* Abschluss */}
            <section className="py-24 border-t border-[#D4AF37]/10 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                            Sicherheit sollte beruhigen.
                            <br />
                            <span className="text-[#C9A961]">Nicht daran erinnern, dass sie existiert.</span>
                        </h3>
                    </m.div>
                </div>
            </section>
        </>
    );
}
