import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building2, Ship, Factory, Shield, Zap } from 'lucide-react';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeSolutions() {
    const solutions = [
        {
            title: "Private Anwesen",
            description: "Vereinte Steuerung für komplexe Immobilien.",
            hoverText: "Mehrgebäude-Umgebungen mit langen Betriebszyklen und null Toleranz für Chaos.",
            icon: Home,
            bgImage: "/assets/sol_card_estate_v2.webp",
            link: "/de/private-estates"
        },
        {
            title: "Penthäuser",
            description: "Minimales Interface. Maximale Orchestrierung.",
            hoverText: "Dichte urbane Residenzen, in denen Zurückhaltung und Verlässlichkeit an erster Stelle stehen.",
            icon: Building2,
            bgImage: "/assets/sol_card_penthouse_v2.webp",
            link: "/de/penthouses"
        },
        {
            title: "Superjachten",
            description: "Offline-Fähigkeit. Geschichtete Sicherheit.",
            hoverText: "Mobile, autonome Systeme – konzipiert für den Betrieb jenseits jeder Konnektivität.",
            icon: Ship,
            bgImage: "/assets/sol_card_yacht_v2.webp",
            link: "/de/superyachts"
        },
        {
            title: "Industrielle Suiten",
            description: "Betreiberqualität ohne Lärm.",
            hoverText: "Betreiberumgebungen, die Nachvollziehbarkeit und Vorhersehbarkeit erfordern.",
            icon: Factory,
            bgImage: "/assets/sol_card_industrial_v2.webp",
            link: "/de/industrial-suites"
        },
        {
            title: "Sicherheit & Überwachung",
            description: "Präsenzintelligenz mit Prüfprotokoll.",
            hoverText: "Präsenzwahrnehmung – konzipiert, um zu beobachten ohne zu belasten.",
            icon: Shield,
            bgImage: "/assets/sol_card_security_v2.webp",
            link: "/de/security"
        },
        {
            title: "Energieorchestrierung",
            description: "Autonomer Lastausgleich und Effizienz.",
            hoverText: "Last, Speicherung und Verteilung – als ein System behandelt.",
            icon: Zap,
            bgImage: "/assets/platform_hero_bg_v2.webp",
            link: "/de/energy"
        }
    ];

    return (
        <>
            <SEO
                title="Lösungen – Wo Vœrynth seinen Platz hat"
                description="Von privaten Anwesen bis zu Superjachten – Vœrynth bringt deterministische Steuerungslogik in komplexe, hochwertige Umgebungen."
                keywords="Anwesensautomation, Penthouse-Steuerung, Jacht-Automatisierung, industrielle Steuerung"
            />
            <Hero
                title="Lösungen"
                subtitle="Überall dort, wo Verlässlichkeit keine Option ist."
                bgImage="/assets/solutions_hero_bg_v2.webp"
            />

            {/* Lösungskarten */}
            <Section>
                <h2 className="text-2xl font-light text-white/90 mb-12 text-center">Für welche Umgebungen</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((sol, idx) => {
                        const Icon = sol.icon;
                        return (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: idx * 0.1 }}
                            >
                                <Link to={sol.link} className="block h-full">
                                    <div className="group relative border border-white/10 bg-gradient-to-br from-[#0D0D0D] to-[#0A0A0A] p-8 overflow-hidden h-full flex flex-col justify-between shadow-2xl min-h-[280px]">
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={sol.bgImage}
                                                alt=""
                                                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-200"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="text-[#C9A961]/70 mb-4">
                                                <Icon size={20} strokeWidth={1.25} />
                                            </div>
                                            <h3 className="text-lg font-medium text-white/95 mb-3">{sol.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed font-light group-hover:hidden">{sol.description}</p>
                                            <p className="text-white/60 text-sm leading-relaxed font-light hidden group-hover:block">{sol.hoverText}</p>
                                        </div>
                                    </div>
                                </Link>
                            </m.div>
                        );
                    })}
                </div>
            </Section>

            {/* Was alle Lösungen eint */}
            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/90 mb-8">Was alle Lösungen verbindet</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                            {[
                                {
                                    label: "Lokal-First",
                                    desc: "Kernsysteme arbeiten unabhängig von externer Konnektivität – jederzeit und überall."
                                },
                                {
                                    label: "Deterministische Logik",
                                    desc: "Systeme verhalten sich immer gleich. Kein unvorhersehbares Verhalten durch cloudbasierte KI."
                                },
                                {
                                    label: "Auditierbar",
                                    desc: "Jede Entscheidung ist protokolliert und nachvollziehbar – für Betreiber wie für Serviceteams."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-t border-white/10 pt-6">
                                    <h3 className="text-[#C9A961] text-sm tracking-widest uppercase mb-3">{item.label}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </m.div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-light text-white/90 mb-6 leading-relaxed">Ihre Umgebung, Ihr System</h2>
                    <p className="text-white/50 leading-loose text-base font-light mb-8">
                        Jedes Vœrynth-System beginnt mit einer privaten Beratung. Wir analysieren Ihre Umgebung, bevor wir eine Architektur empfehlen.
                    </p>
                    <Link
                        to="/de/contact"
                        className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium shadow-lg shadow-[#D4AF37]/10"
                    >
                        PRIVATE DEMO ANFRAGEN
                    </Link>
                </div>
            </Section>
        </>
    );
}
