import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeProcess() {
    const phases = [
        {
            id: "01",
            title: "Analyse & Randbedingungen",
            subtitle: "Die physische Realität verstehen",
            description: "Wir raten nicht. Wir prüfen. Bevor eine einzige Codezeile geschrieben wird, kartieren wir die physische und digitale Realität der Umgebung.",
            details: [
                { label: "Protokoll-Inventar", value: "NMEA 2000, Signal K, KNX, DALI, Modbus, Zigbee" },
                { label: "Netzwerktopologie", value: "IoT-VLAN-Segregation, Air-Gap-Strategie" },
                { label: "Bedrohungsmodellierung", value: "Privatsphärengrenzen, Fernzugriffsrichtlinien" }
            ]
        },
        {
            id: "02",
            title: "Design & Umsetzung",
            subtitle: "Architektur vor Automatisierung",
            description: "Wir entwerfen den 'Dummheitsfilter' des Systems – die Logik, die verhindert, dass das Haus seine Bewohner nervt. Das ist Ingenieurwesen, keine Konfiguration.",
            details: [
                { label: "Elektrisches Design", value: "Gateway-Platzierung, PoE-Budgets, Redundanzplanung" },
                { label: "Logikmatrix", value: "Wahrscheinlichkeitsbasierte Entscheidungsbäume vs. rohe Regeln" },
                { label: "Persona-Definition", value: "Die 'Stimme' und das Temperament des Systems definieren" }
            ]
        },
        {
            id: "03",
            title: "Inbetriebnahme",
            subtitle: "Validierung unter Stress",
            description: "Ein System ist nur so gut wie sein Verhalten bei Ausfällen. Wir simulieren Stromausfälle, Netzwerkpartitionen und Sensorausfälle, um Gelassenheit zu gewährleisten.",
            details: [
                { label: "Deterministische Validierung", value: "I/O-Prüfung für jedes Relais, jeden Dimmer und jeden Sensor" },
                { label: "Kalibrierung", value: "Den 'Dummheitsfilter' an reale Haushaltsmuster anpassen" },
                { label: "Chaos-Tests", value: "Erzwungene Fehlermodi zur Überprüfung von Wiederherstellungsprotokollen" }
            ]
        },
        {
            id: "04",
            title: "Die Übergabe",
            subtitle: "Übertragung der Souveränität",
            description: "Der definierende Moment eines Vœrynth-Projekts. Wir behalten keinen Zugang. Sie besitzen den Code, die Schlüssel und die Hardware.",
            details: [
                { label: "Git-Verlauf", value: "Vollständiges Commit-Protokoll jeder Konfigurationsänderung" },
                { label: "Physische Schlüsselübergabe", value: "Verschlüsselungsschlüssel auf Hardware-Tokens übergeben" },
                { label: "Mitarbeiterschulung", value: "Ausnahmebasiertes Workflow-Training für Bediener" }
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Der Implementierungsprozess"
                description="Unsere 4-phasige Ingenieuersmethodik: Analyse, Design, Inbetriebnahme und Übergabe. Wir bauen souveräne Systeme, die vollständig Ihnen gehören."
                keywords="Ingenieursmethodik, Inbetriebnahme, Systemübergabe"
                canonical="/de/process"
            />
            <Hero title="Der Prozess" subtitle="Prüfen. In Betrieb nehmen. Übergeben." bgImage="/assets/process_hero_bg_v2.webp">
                <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    Anspruchsvolle Kunden kaufen Ergebnisse. Wir liefern mit einem Ingenieur-Spielbuch, nicht mit Improvisation.
                </p>
            </Hero>

            <Section>
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-0 md:left-[2rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0 hidden md:block" />
                    <div className="space-y-32">
                        {phases.map((phase, idx) => (
                            <m.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }} className="relative md:pl-24">
                                <div className="absolute left-[1.75rem] top-2 w-3 h-3 bg-[#0A0A0A] border border-[#D4AF37] rounded-full hidden md:block z-10 box-content p-[1px]">
                                    <div className="w-full h-full bg-[#D4AF37]/50 rounded-full" />
                                </div>
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-1/4">
                                        <span className="text-[#C9A961] text-6xl font-light opacity-20 tracking-tighter">{phase.id}</span>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h2 className="text-2xl font-light text-white/95 mb-2">{phase.title}</h2>
                                        <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-6 opacity-80">{phase.subtitle}</p>
                                        <p className="text-white/50 leading-loose text-base font-light mb-8 border-l-2 border-white/5 pl-6">{phase.description}</p>
                                        <div className="grid grid-cols-1 gap-4">
                                            {phase.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-b border-white/5 pb-4 last:border-0">
                                                    <span className="text-white/30 text-xs uppercase tracking-wider w-40 shrink-0">{detail.label}</span>
                                                    <span className="text-white/70 text-sm font-light">{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="border-t border-white/5 bg-[#080808]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/95 mb-8">Bereit, Phase 01 zu beginnen?</h2>
                    <p className="text-white/40 leading-loose text-sm font-light mb-12">Der erste Schritt ist eine physische Prüfung der Protokolle und Randbedingungen Ihrer Umgebung.</p>
                    <Link to="/de/contact" className="inline-block bg-[#D4AF37] text-black px-8 py-4 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium shadow-lg shadow-[#D4AF37]/10">
                        ANALYSE EINLEITEN
                    </Link>
                </div>
            </Section>
        </>
    );
}
