import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DePlatform() {
    const layers = [
        {
            name: "Vœrynth Interface",
            intro: "Die Oberfläche ist bewusst zurückhaltend gestaltet. Sie zeigt nur, was notwendig ist – zum richtigen Zeitpunkt. Niemals rohen Systemzustand.",
            description: "Bediener agieren mit Absicht, nicht mit Implementierungsdetails.",
            color: "text-[#C9A961]",
            bgColor: "bg-[#C9A961]/5",
            borderColor: "border-[#C9A961]/20"
        },
        {
            name: "Reasoning Core",
            intro: "Der Reasoning Core verarbeitet lokalen Kontext, Gedächtnis und Entscheidungsbewertung. Er rät nicht, halluziniert nicht und optimiert nicht unberechenbar.",
            description: "Wenn Intelligenz eingesetzt wird, ist sie eingeschränkt, nachvollziehbar und dem deterministischen Regelwerk untergeordnet.",
            color: "text-white/80",
            bgColor: "bg-white/[0.03]",
            borderColor: "border-white/10"
        },
        {
            name: "State Engine",
            intro: "Die State Engine pflegt ein Echtzeit-Modell der Umgebung – Geräte, Regeln, Zustände und Abhängigkeiten.",
            description: "Jede Automatisierung wird gegen expliziten Zustand geprüft, nicht gegen Annahmen. Das ermöglicht vorhersehbares Verhalten auch unter partiellen Ausfällen.",
            color: "text-white/65",
            bgColor: "bg-white/[0.02]",
            borderColor: "border-white/8"
        },
        {
            name: "Translation Core",
            intro: "Der Translation Core isoliert Protokollvolatilität vom Rest des Systems. Feldprotokolle verändern sich. Architekturen sollten deswegen nicht brechen.",
            description: "Diese Schicht stellt sicher, dass Hardware-Änderungen nicht nach oben durchschlagen.",
            color: "text-white/50",
            bgColor: "bg-white/[0.015]",
            borderColor: "border-white/6"
        },
        {
            name: "Hard Metal",
            intro: "Die physische Schicht wird mit derselben Ernsthaftigkeit behandelt wie Software. Stromwege, Relais, Sensoren und Sicherheitsmechanismen sind so konzipiert, dass sie sicher – nicht still – versagen.",
            description: "Wenn Software ausfällt, bleibt die Umgebung stabil.",
            color: "text-white/35",
            bgColor: "bg-white/[0.01]",
            borderColor: "border-white/5"
        }
    ];

    const principles = [
        {
            title: "Determinismus zuerst",
            text: "Systeme verhalten sich heute, morgen und in fünf Jahren gleich – unabhängig von Netzwerkbedingungen oder Updates."
        },
        {
            title: "Lokal zuerst, standardmäßig",
            text: "Der Kernbetrieb ist nicht auf externe Konnektivität angewiesen. Cloud-Dienste, wenn eingesetzt, ergänzen die lokale Steuerung – sie ersetzen sie nicht."
        },
        {
            title: "Schichten trennen Verantwortlichkeiten",
            text: "Jede Schicht in der Architektur hat einen klar definierten Aufgabenbereich. Ausfälle bleiben isoliert und breiten sich nicht aus."
        },
        {
            title: "Auditierbarkeit ist nicht optional",
            text: "Jede Entscheidung – von der einfachen Automatisierung bis zur komplexen Orchestrierung – ist nachvollziehbar und protokollierbar."
        }
    ];

    return (
        <>
            <SEO
                title="Plattform-Architektur"
                description="Vœrynthes Eisberg-Architektur trennt Interface, Reasoning und Zustand. Ein industrietaugliches Steuerungsfundament, das Ausfälle isoliert."
                keywords="Vœrynth Plattform, Eisberg-Architektur, Steuerungsfundament, Fehlertoleranz"
            />
            <Hero
                title="Die Plattform"
                subtitle="Architektur, die denkt – bevor sie handelt."
                bgImage="/assets/platform_hero_bg_v2.webp"
            />

            {/* Eisberg-Architektur Intro */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Die Eisberg-Architektur</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-6">
                            Die meisten Systeme zeigen ein Dashboard und nennen es Intelligenz. Vœrynth Système ist wie eine echte Maschine aufgebaut – geschichtet, getrennt und ausfallsicher.
                        </p>
                        <p className="text-white/40 leading-loose text-sm font-light">
                            Was der Nutzer sieht, ist die ruhige Oberfläche. Darunter arbeiten fünf unabhängige Schichten, die jeweils eine klar definierte Aufgabe erfüllen.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Schichten */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-2xl font-light text-white/90 mb-12 text-center">Die fünf Schichten</h2>
                    {layers.map((layer, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`border ${layer.borderColor} ${layer.bgColor} p-8`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="md:w-48 shrink-0">
                                    <h3 className={`text-sm tracking-widest uppercase font-medium ${layer.color}`}>{layer.name}</h3>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-white/60 text-sm leading-relaxed font-light">{layer.intro}</p>
                                    <p className="text-white/35 text-xs leading-relaxed font-light italic">{layer.description}</p>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </Section>

            {/* Gestaltungsprinzipien */}
            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/90 mb-12 text-center">Gestaltungsprinzipien</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {principles.map((p, idx) => (
                                <div key={idx} className="border-l-2 border-[#D4AF37]/20 pl-6">
                                    <h3 className="text-white/90 font-light mb-3">{p.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{p.text}</p>
                                </div>
                            ))}
                        </div>
                    </m.div>
                </div>
            </Section>

            {/* Was das für den Alltag bedeutet */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-light text-white/90 mb-8">Was das im Alltag bedeutet</h2>
                        <div className="space-y-6 text-white/50 leading-loose text-base font-light text-left">
                            <p>Kein System ist ausfallsicher. Aber Vœrynth-Systeme sind so entworfen, dass Ausfälle begrenzt, nachvollziehbar und beherrschbar bleiben.</p>
                            <p>Wenn eine Automatisierungsregel inkonsistente Daten erhält, eskaliert der Fehler nicht stillschweigend. Er wird erkannt, protokolliert und das System fällt in einen sicheren Zustand zurück.</p>
                            <p>Das ist kein Versprechen. Es ist Architektur.</p>
                        </div>
                        <div className="mt-12">
                            <Link
                                to="/de/contact"
                                className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium shadow-lg shadow-[#D4AF37]/10"
                            >
                                PRIVATE DEMO ANFRAGEN
                            </Link>
                        </div>
                    </m.div>
                </div>
            </Section>
        </>
    );
}
