import { m } from 'framer-motion';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeAbout() {
    return (
        <>
            <SEO
                title="Über uns – Philosophie & Ursprung"
                description="Eine ingenieursgetriebene Initiative für langlebige Steuerungsinfrastruktur. Wir entwickeln nicht für den Moment – wir bauen für Jahrzehnte."
                keywords="Ingenieursphilosophie, Steuerungsinfrastruktur, Vœrynth Ursprung"
            />
            <Hero
                title="Über Vœrynth"
                subtitle="Eine Systemmarke, gegründet auf Zurückhaltung, Verlässlichkeit und langfristiges Denken."
                bgImage="/assets/about_hero_bg_v2.webp"
            />

            {/* Wer wir sind */}
            <Section>
                <div className="max-w-3xl mx-auto space-y-24">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Wer wir sind</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>
                                Vœrynth ist eine unabhängige, ingenieursgetriebene Initiative. Unser Ziel: Steuerungssysteme zu bauen, die nicht in drei Jahren veralten, sondern über Jahrzehnte zuverlässig funktionieren.
                            </p>
                            <div className="border-l border-[#D4AF37]/30 pl-6 py-2 space-y-2">
                                <p>Wir arbeiten nicht im Massenmarkt.</p>
                                <p>Wir entwickeln nicht für den Trend.</p>
                            </div>
                            <p>
                                Wir arbeiten bewusst, selektiv und mit Verantwortungsbewusstsein – und behandeln jedes System als Infrastruktur, die auch lange nach der ersten Inbetriebnahme verlässlich funktionieren muss.
                            </p>
                            <p>
                                Vœrynth existiert für Umgebungen, in denen Beständigkeit wichtiger ist als Features – wo Technologie Vertrauen still über Zeit verdienen muss.
                            </p>
                        </div>
                    </m.div>

                    {/* Woher Vœrynth kommt */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Woher Vœrynth kommt</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                            <p>
                                Vœrynth begann nicht als kommerzielles Produkt.
                            </p>
                            <p>
                                Es entstand als persönliches Projekt – der sorgfältige Entwurf eines Haussystems, das nicht vorgeführt, sondern bewohnt werden sollte. Ein System, das unter Belastung stabil bleibt, das man Jahre später noch versteht, und das im Alltag schlicht funktioniert.
                            </p>
                            <p>
                                Mit der Zeit reifte das System und nahm Lektionen aus professioneller Ingenieurspraxis auf: Architektur vor Geräten, Determinismus vor Intelligenz, Dokumentation vor Automatisierung.
                            </p>
                            <p>
                                Was als privates Umfeld begann, entwickelte sich zu einem Framework – geformt durch reale Anforderungen, reale Fehlermodi und echte Verantwortung.
                            </p>
                            <p className="text-white/70 pt-2">
                                Vœrynth existiert, weil diese Erkenntnisse es verdienten, bewahrt, formalisiert und über ein einzelnes Anwesen hinaus angewandt zu werden.
                            </p>
                        </div>
                    </m.div>
                </div>
            </Section>

            {/* Warum Vœrynth existiert */}
            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Warum Vœrynth existiert</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light mb-12">
                            <p>
                                Moderne Automatisierung tauscht Verlässlichkeit zunehmend gegen Neuheit ein.
                            </p>
                            <p>
                                Systeme werden aus fragilen Komponenten zusammengesetzt, abhängig von ständiger Konnektivität, undurchsichtigen Updates und Schnittstellen, die Aufmerksamkeit fordern statt Reibung zu reduzieren.
                            </p>
                            <p className="text-white/80">Vœrynth existiert, um diesen Trend umzukehren.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Intelligente Systeme sollten:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Ohne Netzwerkverbindung funktionieren",
                                        "Unter Belastung vorhersehbar reagieren",
                                        "Nur dann kommunizieren, wenn es wirklich notwendig ist",
                                        "Ohne ständige Eingriffe zuverlässig altern"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/60 leading-relaxed text-sm font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center border-l border-white/5 pl-8">
                                <p className="text-white/40 italic font-light text-lg">
                                    &quot;Diese Philosophie ist kein Anspruch. Sie ist durch Architektur erzwungen.&quot;
                                </p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </Section>

            {/* Was Vœrynth unterscheidet & Philosophie */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-24">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-12 leading-relaxed">Was Vœrynth unterscheidet</h2>
                        <div className="text-white/60 leading-loose text-lg font-light space-y-2 mb-12">
                            <p>Vœrynth unterscheidet sich nicht durch Features, sondern durch Disziplin.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Systeme vor Oberflächen</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Die Steuerungsarchitektur kommt vor der Darstellung.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Lokal zuerst, by Design</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Der Kernbetrieb ist nicht auf externe Dienste angewiesen.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Deterministisch wo es zählt</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Vorhersehbarkeit hat Vorrang vor Neuheit.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-2">Keine dekorative Technologie</h3>
                                    <p className="text-white/50 text-sm font-light leading-relaxed">Jedes Element muss durch sein Verhalten gerechtfertigt sein.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm font-light italic mt-12 text-center max-w-2xl mx-auto border-t border-white/5 pt-8">
                            Wir fügen keine Intelligenz zu fragilen Systemen hinzu. Wir entwerfen Systeme, die Intelligenz sicher tragen können.
                        </p>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-12 leading-relaxed text-center">Unsere Philosophie</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center px-4">
                            <div className="space-y-4 p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-200">
                                <h3 className="text-white/90 text-lg font-light">Stille ist ein Merkmal.</h3>
                                <p className="text-white/40 text-sm leading-relaxed">Informationen erscheinen nur, wenn sich etwas wesentlich ändert.</p>
                            </div>
                            <div className="space-y-4 p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-200">
                                <h3 className="text-white/90 text-lg font-light">Zurückhaltung ist Intelligenz.</h3>
                                <p className="text-white/40 text-sm leading-relaxed">Komplexität wird vom System absorbiert, nicht dem Nutzer zugespielt.</p>
                            </div>
                            <div className="space-y-4 p-6 border border-white/5 hover:border-[#D4AF37]/20 transition-colors duration-200">
                                <h3 className="text-white/90 text-lg font-light">Autorität ohne Aggressivität.</h3>
                                <p className="text-white/40 text-sm leading-relaxed">Ein System verdient Vertrauen durch ruhiges, vorhersehbares Verhalten.</p>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm font-light italic mt-12 text-center">
                            Diese Grundsätze leiten jede Designentscheidung – von der Hardware-Konfiguration bis zum Interface-Verhalten.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Arbeitsweise & Zielgruppe */}
            <section className="py-24 bg-[#080808] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        className="grid md:grid-cols-2 gap-16"
                    >
                        <div>
                            <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Wie wir arbeiten</h2>
                            <div className="space-y-6 text-white/50 leading-loose text-base font-light">
                                <p>Wir entwerfen Systeme als langfristige Infrastruktur – nicht als Installations­projekte.</p>
                                <p>Jedes Engagement beginnt mit Architektur, nicht mit Geräten. Fehlermodi werden vor Features bedacht. Dokumentation, Nachvollziehbarkeit und Klarheit zählen mehr als Geschwindigkeit.</p>
                                <p>Wir entwerfen für Umgebungen, die auch dann still weiter funktionieren müssen, wenn niemand zuschaut.</p>
                                <p className="text-white/70 italic">Das Ergebnis sind Systeme, die in der Demonstration nicht beeindrucken – aber im Alltag Sicherheit geben.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Für wen Vœrynth gebaut ist</h2>
                            <div className="space-y-6">
                                <ul className="space-y-4 mb-6">
                                    {[
                                        "Verlässlichkeit über Neuheit",
                                        "Zurückhaltung statt Spektakel",
                                        "Systeme, die im Alltag unsichtbar werden"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-white/40 text-sm leading-loose font-light">
                                    Geschätzt wird Vœrynth von jenen, die komplexe Umgebungen verantworten – Anwaltsbüros, Kapitäne, Betriebsleiter – und wissen, dass die besten Systeme jene sind, die keine Erklärung fordern.
                                </p>
                                <p className="text-white/30 text-xs leading-loose font-light border-t border-white/5 pt-4">
                                    Vœrynth ist nicht für schnelle Experimente, trendgetriebene Technologie oder Umgebungen konzipiert, in denen ständige Veränderung belohnt wird.
                                </p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </section>

            {/* Abschluss */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0A0A0A]" />
                <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="text-white/60 leading-loose text-lg font-light mb-8">
                            Vœrynth ist für Umgebungen gebaut, die Verlässlichkeit, Privatsphäre und Besonnenheit verlangen.
                        </p>
                        <h3 className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12">
                            Es ist nicht darauf ausgelegt, auf den ersten Blick zu beeindrucken.
                            <br />
                            <span className="text-[#C9A961]">Es ist darauf ausgelegt, über Zeit Vertrauen zu verdienen.</span>
                        </h3>
                        <div className="w-16 h-[1px] bg-white/10 mx-auto mb-12" />
                        <p className="text-white/40 text-sm tracking-[0.2em] uppercase">
                            Ihr Anwesen, durchdacht erhöht.
                        </p>
                    </m.div>
                </div>
            </section>
        </>
    );
}
