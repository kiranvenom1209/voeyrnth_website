import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DePricing() {
    return (
        <>
            <SEO
                title="Investition & Preisgestaltung"
                description="Transparente, umfangsbasierte Preisgestaltung für Architektur, Integration und langfristige Betreuung. Keine Pauschalpakete, keine versteckten Kosten."
                keywords="Preisgestaltung Anwesensautomation, Investition Steuerungssystem, Automatisierung Kosten"
            />
            <Hero
                className="pt-28"
                title="Investition"
                subtitle="Durchdachte Systeme sind nie von der Stange."
                body="Jedes Vœrynth-System wird für die Umgebung entworfen, der es dienen soll. Die Investition spiegelt Umfang, Komplexität und langfristige Verantwortung wider – nicht Feature-Bündel."
                bgImage="/assets/pricing_hero_bg_v2.webp"
            >
                <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-20">
                    Wir bieten keine Pakete an. <br />
                    Wir bieten durchdachte Systeme.
                </p>
            </Hero>

            {/* Wie die Preisgestaltung funktioniert */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/90 mb-8 leading-relaxed">Wie die Preisgestaltung funktioniert</h2>
                    <p className="text-white/50 leading-loose text-base font-light mb-8">
                        Die Investition in ein Vœrynth-System basiert auf drei Hauptfaktoren:
                    </p>
                    <ul className="space-y-4 text-white/70 font-light mb-12 text-left md:text-center max-w-xl mx-auto">
                        <li className="flex items-center gap-3 md:justify-center">
                            <span className="w-1.5 h-1.5 bg-[#C9A961]/50 rounded-full"></span>
                            Größe und Charakter der Umgebung
                        </li>
                        <li className="flex items-center gap-3 md:justify-center">
                            <span className="w-1.5 h-1.5 bg-[#C9A961]/50 rounded-full"></span>
                            Grad der Integration und geforderter Zuverlässigkeit
                        </li>
                        <li className="flex items-center gap-3 md:justify-center">
                            <span className="w-1.5 h-1.5 bg-[#C9A961]/50 rounded-full"></span>
                            Gewünschte Betriebsdauer und Betreuungsmodell
                        </li>
                    </ul>
                    <p className="text-white/40 leading-loose text-sm font-light">
                        Jedes Projekt beginnt mit einer privaten Beratung, um Absichten, Rahmenbedingungen und Erwartungen zu verstehen. Darauf aufbauend wird ein maßgeschneiderter Leistungsumfang definiert. <br /><br />
                        Keine Überraschungen. Keine versteckten Kosten. Keine unnötige Komplexität.
                    </p>
                </div>
            </Section>

            {/* Leistungsmodelle */}
            <Section>
                <h2 className="text-2xl font-light text-white/90 mb-12 text-center leading-relaxed">Leistungsmodelle</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200">
                        <h3 className="text-lg text-[#C9A961] mb-2 tracking-wide">Entwurf & Architektur</h3>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Für Neubauten oder umfangreiche Renovierungen.</p>
                        <ul className="space-y-3 text-white/60 text-sm font-light leading-relaxed mb-8">
                            <li>Systemarchitektur und Schichtung</li>
                            <li>Integrationsplanung</li>
                            <li>Technologieauswahl</li>
                            <li>Dokumentation und Übergabe</li>
                        </ul>
                        <p className="text-white/40 text-xs italic">Engagement beginnt in der Planungsphase.</p>
                    </div>

                    <div className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200">
                        <h3 className="text-lg text-[#C9A961] mb-2 tracking-wide">Inbetriebnahme & Integration</h3>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Für bestehende Anwesen und Umgebungen.</p>
                        <ul className="space-y-3 text-white/60 text-sm font-light leading-relaxed mb-8">
                            <li>Systemintegration vor Ort</li>
                            <li>Automatisierungslogik und Orchestrierung</li>
                            <li>Interface-Konfiguration</li>
                            <li>Zuverlässigkeits- und Failover-Design</li>
                        </ul>
                        <p className="text-white/40 text-xs italic">Ausgeführt mit minimaler Beeinträchtigung.</p>
                    </div>

                    <div className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200">
                        <h3 className="text-lg text-[#C9A961] mb-2 tracking-wide">Langfristige Betreuung</h3>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-6">Für dauerhafte Betriebssicherheit.</p>
                        <ul className="space-y-3 text-white/60 text-sm font-light leading-relaxed mb-8">
                            <li>Systemüberwachung</li>
                            <li>Kontrollierte Updates</li>
                            <li>Regelmäßige Überprüfungen</li>
                            <li>Prioritätssupport</li>
                        </ul>
                        <p className="text-white/40 text-xs italic">Optional, aber empfohlen.</p>
                    </div>
                </div>
            </Section>

            {/* Typische Investitionsbereiche */}
            <Section className="bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D] border-y border-[#D4AF37]/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white/90 mb-4 text-center leading-relaxed">Typische Investitionsbereiche</h2>
                    <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-12">(Richtwerte, nicht verbindlich.)</p>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
                            <span className="text-white/70 font-light text-lg">Private Residenzen & Penthäuser</span>
                            <span className="text-[#C9A961] text-xl font-light mt-2 md:mt-0">€25.000 – €75.000+</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
                            <span className="text-white/70 font-light text-lg">Große Anwesen & Komplexe</span>
                            <span className="text-[#C9A961] text-xl font-light mt-2 md:mt-0">€75.000 – €250.000+</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
                            <span className="text-white/70 font-light text-lg">Jachten & mobile Umgebungen</span>
                            <span className="text-[#C9A961] text-xl font-light mt-2 md:mt-0">€50.000 – €150.000+</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <span className="text-white/70 font-light text-lg">Spezialisierte oder industrielle Umgebungen</span>
                            <span className="text-white/40 text-lg font-light mt-2 md:mt-0 italic">Nach Bewertung</span>
                        </div>
                    </div>
                    <p className="text-center text-white/30 text-xs mt-12 font-light">Endgültiger Umfang und Investition werden nach der Beratung festgelegt.</p>
                </div>
            </Section>

            {/* Im Preis enthalten & nicht enthalten */}
            <Section>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="p-10 border border-white/10 bg-white/[0.01] flex flex-col h-full">
                        <div className="flex-1">
                            <h2 className="text-xl font-light text-white/95 mb-8 leading-relaxed text-center">Im Preis enthalten</h2>
                            <ul className="space-y-4 text-white/70 font-light text-sm leading-loose">
                                {[
                                    "Systemarchitektur und Design",
                                    "Integrationslogik und Orchestrierung",
                                    "Interface-Konfiguration",
                                    "Dokumentation und Auditierbarkeit",
                                    "Begleitung der Inbetriebnahme",
                                    "Validierung nach Inbetriebnahme"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-white/30 text-xs mt-8 italic text-center border-t border-white/5 pt-6">Wir priorisieren Klarheit, Verlässlichkeit und langfristige Wartbarkeit.</p>
                    </div>

                    <div className="p-10 border border-white/10 bg-white/[0.01] flex flex-col h-full">
                        <div className="flex-1">
                            <h2 className="text-xl font-light text-white/95 mb-8 leading-relaxed text-center">Was wir nicht tun</h2>
                            <ul className="space-y-4 text-white/70 font-light text-sm leading-loose">
                                {[
                                    "Keine Pauschalpakete",
                                    "Keine featurebasierte Preisgestaltung",
                                    "Keine überstürzten Installationen",
                                    "Keine unnötigen Cloud-Abhängigkeiten",
                                    "Keine «set-and-forget»-Systeme"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                        <span className="opacity-80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-white/30 text-xs mt-8 italic text-center border-t border-white/5 pt-6">Jedes System soll dauerhaft bestehen.</p>
                    </div>
                </div>
            </Section>

            {/* Abschluss CTA */}
            <Section className="mb-12">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed">
                        Vœrynth richtet sich nicht nach Preis an alle. <br />
                        Es richtet sich nach Verantwortung an jene, die Beständigkeit erwarten.
                    </p>
                    <Link
                        to="/de/contact"
                        className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium rounded shadow-lg shadow-[#D4AF37]/10 mb-6"
                    >
                        PRIVATE BERATUNG ANFRAGEN
                    </Link>
                    <p className="text-white/30 text-xs tracking-wide mt-4">
                        Wir antworten persönlich. Kein Vertriebsteam. Kein Druck.
                    </p>
                </div>
            </Section>
        </>
    );
}
