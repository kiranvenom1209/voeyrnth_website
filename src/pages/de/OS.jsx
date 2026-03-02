import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Cpu, Server, Layers, Home, Eye, Lock, Moon, Music, Zap, CheckCircle2, ChevronRight, Anchor, Building2, Battery, RefreshCw, Smartphone, Tablet } from 'lucide-react';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';

const FeatureBlock = ({ title, subtitle, description, items, image, reverse, icon: Icon }) => (
    <Section className="py-24 border-b border-white/5 relative overflow-hidden group">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover:opacity-100" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.015) 0%, rgba(212,175,55,0) 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-5/12">
                    <m.div
                        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {Icon && <Icon size={32} className="text-[#C9A961] mb-8 opacity-80" />}
                        <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-4">{title}</h2>
                        <h3 className="text-xl text-[#C9A961] font-light tracking-wide mb-8">{subtitle}</h3>
                        <p className="text-white/60 text-lg leading-relaxed font-light mb-10">
                            {description}
                        </p>

                        {items && items.length > 0 && (
                            <ul className="space-y-4">
                                {items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-sm font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]/50 mt-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </m.div>
                </div>

                <div className="w-full lg:w-7/12">
                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-lg border border-white/10 p-2 shadow-2xl bg-[#0A0A0A] group-hover:border-[#D4AF37]/20 transition-colors duration-700"
                    >
                        <div className="overflow-hidden rounded relative bg-black/40 aspect-[1920/988]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto object-top opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02]"
                            />
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    </Section>
);

const tabletImages = [
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_26_10.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_28_48.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_28_55.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_04.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_11.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_19.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_24.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_48.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_00.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_15.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_33.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_42.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_54.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_31_04.png",
    "/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_31_13.png"
];

const mobileImages = [
    "/assets/os/mobile/Screenshot_20260302_111931_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112004_Voerynth OS.jpg",

    "/assets/os/mobile/Screenshot_20260302_112108_Voerynth OS.jpg",

    "/assets/os/mobile/Screenshot_20260302_112126_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112132_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112138_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112145_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112153_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112158_Voerynth OS.jpg",
    "/assets/os/mobile/Screenshot_20260302_112203_Voerynth OS.jpg"
];

export default function DeOS() {
    return (
        <>
            <SEO
                title="Vœrynth OS 5.0.1 - Neural Interface"
                description="Eine menschliche Schnittstelle, gebaut für Klarheit und Zurückhaltung. Nicht noch ein Dashboard—ein Kommando-Deck für Anwesen und Superyachten."
                keywords="voerynth os, interface, kontrollpanel, smart home os, neural interface"
                canonical="/de/os"
            />

            {/* Custom Hero with Devices */}
            <Section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden bg-black flex items-center justify-center min-h-[90vh]">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/os_hero_bg_v2.webp" alt="Vœrynth OS Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse"></span>
                                <span className="text-[#C9A961] text-xs font-medium tracking-wider uppercase">OS 5.0.1</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-light text-white tracking-tight mb-8">
                                Luxus ist Stille, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">die gehorcht.</span>
                            </h1>
                            <div className="text-white/50 text-base leading-loose font-light space-y-6 max-w-2xl mx-auto lg:mx-0">
                                <p>
                                    Vœrynth OS 5.0.1 ist ein Local-First Neural Interface gebaut für Anwesen und Superyachten — wo Zuverlässigkeit mehr zählt als „smarte Spielereien.“
                                </p>
                                <p>
                                    Es wurde für Eigentümer und Personal entwickelt: Klarer Status, schnelle Kontrolle und unaufgeregter Betrieb, selbst wenn das Internet irrelevant ist.
                                </p>
                            </div>
                            <div className="mt-10 flex justify-center lg:justify-start">
                                <a
                                    href="https://github.com/kiranvenom1209/voerynth-os"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200 rounded text-sm tracking-wide group"
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-70 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Auf GitHub ansehen
                                </a>
                            </div>
                        </m.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex justify-center items-center">
                        <m.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute z-10 right-[10%] lg:right-0 w-[400px] lg:w-[500px] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            <img src="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_28_48.png" alt="Tablet Interface" className="w-full h-auto" />
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute z-20 left-[10%] lg:-left-12 bottom-[10%] lg:bottom-0 w-[200px] lg:w-[250px] rounded-[2rem] overflow-hidden border-[6px] border-[#161616] shadow-2xl bg-black"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#161616] rounded-b-xl z-20"></div>
                            <img src="/assets/os/mobile/Screenshot_20260302_111931_Voerynth OS.jpg" alt="Mobile Interface" className="w-full h-auto relative z-10" />
                        </m.div>
                    </div>
                </div>
            </Section>

            {/* Main Deck / Command Center */}
            <FeatureBlock
                title="Nicht noch ein Dashboard—"
                subtitle="ein Kommandodeck."
                description="Vœrynth OS wurde entwickelt, um Entscheidungsmüdigkeit zu reduzieren. Es zeigt nur an, was wichtig ist—Präsenz, Klima, Sicherheit, Energie und Modi—damit Eigentümer und Personal schnell handeln können, ohne durch Apps suchen zu müssen."
                items={[
                    "Immer Local-First — die Kernsteuerung läuft über LAN, nicht durch Hoffen",
                    "Echtzeitreaktion — sofortiges Feedback, keine Cloud-Umwege",
                    "Klarheit statt Überladung — die richtigen Signale, keine Wand voller Schalter",
                    "Rollenbasierte UI — Ansichten für Eigentümer, Personal, Technik (ohne Chaos)"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_48.png"
                icon={Layers}
            />

            {/* Room Control (Chambers) */}
            <FeatureBlock
                title="Raumsteuerung, vereint."
                subtitle="Chambers"
                description="Chambers bringt Beleuchtung, Klima und Szenen für jeden Raum in ein diszipliniertes Layout—schnell lesbar, noch schneller zu bedienen. Es kämpft nicht mit dem Interieur; es unterstützt es. Die Technik bleibt hinter dem Vorhang, was Sie fühlen, ist Ruhe."
                items={[
                    "Ambiente zuerst — Licht und Klima abgestimmt wie in einer Hotelsuite",
                    "Szenen, keine Schalter — „Abend“, „Gäste“, „Nacht“, „Abwesend“ mit einem Tippen",
                    "Personalbereit — einfache, sichere Steuerungen, ohne Komplexität preiszugeben",
                    "Stets kontrolliert — das System fühlt sich ruhig an, selbst wenn es viel arbeitet"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_00.png"
                reverse={true}
                icon={Home}
            />

            {/* Security */}
            <FeatureBlock
                title="Leise Wachsamkeit."
                subtitle="Sicherheit ist ein System, kein Panikknopf."
                description="Vœrynth OS vereint Kameras, Zugang und Perimetersignale in einer einzigen, disziplinierten Ansicht. Eigentümer und Personal erfassen in Sekunden, was passiert, und handeln ohne Rätselraten. Live-Feeds werden nach Relevanz priorisiert, und kritische Ereignisse erscheinen sofort."
                items={[
                    "Live-Feeds werden nach Relevanz priorisiert",
                    "Schlosszustände, Zonen und Alarme bleiben konsistent",
                    "Das tägliche „Alles ok“ bleibt unaufdringlich",
                    "Rollensichere Ansichten für Eigentümer, Crew und Techniker"
                ]}
                image="/assets/os/Security.png"
                icon={Shield}
            />

            {/* Resilience / Energy */}
            <FeatureBlock
                title="Resilienz ist der neue Luxus."
                subtitle="Energie ist keine Statistik—sie ist Kontinuität."
                description="Vœrynth OS überwacht den Herzschlag Ihres Anwesens, hält kritische Systeme sichtbar und macht Stromereignisse völlig uninteressant. Wenn das Netz wackelt, tut Ihr Haus das nicht."
                items={[
                    "Live-Flow — Netz / Solar / Batterie auf einen Blick",
                    "Bewusstsein für kritische Lasten — was wichtig ist, bleibt geschützt",
                    "Effizienz, aber keine Obsession — Muster, auf die Sie tatsächlich reagieren können",
                    "Ausfallsichere Sichtbarkeit — Status statt Panik"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_33.png"
                reverse={true}
                icon={Battery}
            />

            {/* Marine & Workplaces (Multi-context) */}
            <Section className="py-32 bg-[#080808] border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, rgba(212,175,55,0) 70%)' }} />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-6">Gebaut für Bewegung. Zuverlässig auf See.</h2>
                        <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                            Vœrynth OS bringt die Zuverlässigkeit von Anwesen in Premium-Umgebungen, in denen Betriebszeit nicht verhandelbar ist.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Yacht/Marine */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-lg hover:border-white/10 transition-colors">
                            <Anchor className="text-[#C9A961] mb-8 opacity-80" size={32} />
                            <h3 className="text-xl text-white/90 font-light mb-4">Kommando auf See</h3>
                            <p className="text-white/50 text-sm leading-loose font-light mb-8">
                                Auf einer Yacht ist die Cloud ein Luxus, den man nicht immer hat. Vœrynth liest Schiffssignale über NMEA 2000 und Signal K und wandelt rohe Telemetriedaten in sicherheitsbewusste Zusammenhänge um. Offline-Betrieb ist erstklassig.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Modi für das Leben an Bord: Vor Anker, Unterwegs, Nacht",
                                    "Echtzeitdaten zu Tanks, Klima und Energie",
                                    "Null Cloud-Abhängigkeit"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/40 text-xs tracking-wide">
                                        <div className="w-1 h-1 rounded-full bg-[#C9A961]/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Workplaces */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-lg hover:border-white/10 transition-colors">
                            <Building2 className="text-[#C9A961] mb-8 opacity-80" size={32} />
                            <h3 className="text-xl text-white/90 font-light mb-4">Ein Arbeitsplatz, der vorausdenkt</h3>
                            <p className="text-white/50 text-sm leading-loose font-light mb-8">
                                Für erstklassige Arbeitsplätze, an denen Meetings nicht durch "Apps" unterbrochen werden dürfen und Einrichtungen nicht vom Internet abhängig sein können. Echtzeitsteuerung, klarer Status und rollensicherer Zugriff für Empfang, IT und Facility-Teams.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Meeting-Modi: Konferenzraum, Präsentation, Nach Feierabend",
                                    "Rollensicherer Zugriff: Empfang vs. IT",
                                    "Lokale Priorität für Facility Manager"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/40 text-xs tracking-wide">
                                        <div className="w-1 h-1 rounded-full bg-[#C9A961]/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Updates and Infrastructure */}
            <FeatureBlock
                title="Sichere Updates. Kein Leakage."
                subtitle="Der Updater"
                description="Vœrynth OS zieht Updates ausschließlich inbound—Ihr Anwesen lädt niemals operative Daten in eine Cloud hoch. Es wird nur von Vœrynth getestete Firmware ausgeliefert, so dass die Zuverlässigkeit erhalten bleibt und „zufällige Überraschungen von Anbietern“ nicht in Ihr System gelangen."
                items={[
                    "Nur von Vœrynth getestete Firmware",
                    "Gesteuert durch lokales LLM, um nicht zu stören",
                    "Zieht niemals Daten nach außen"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_42.png"
                icon={RefreshCw}
            />

            {/* Advanced Engineering / Telemetry */}
            <FeatureBlock
                title="Leise Kraft, gemessen."
                subtitle="Engineering Views"
                description="Vœrynth OS hält das Nervensystem des Anwesens sichtbar, ohne es in einen Kontrollraum-Zirkus zu verwandeln. Auf einen Blick können Eigentümer und Techniker bestätigen, dass das Backbone gesund ist—Rechenkapazität, Speicherplatz und Netzwerkdurchsatz."
                items={[
                    "Vorhersehbare Leistung, wenn das Haus beschäftigt ist",
                    "Weniger Rätsel, schnellere Diagnose",
                    "Das System bleibt auch unter hoher Last ruhig"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_54.png"
                reverse={true}
                icon={Activity}
            />

            {/* Tablet Experience */}
            <Section className="py-32 bg-[#0A0A0A] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <Tablet className="text-[#C9A961] mb-6 opacity-80 mx-auto" size={32} />
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-4">Das Setup & Wand-Display</h2>
                    <p className="text-white/50 text-base leading-loose font-light max-w-2xl mx-auto">
                        Präzisionstechnik für dedizierte Steuerungsflächen. Ob bei der Einleitung einer Standardkommissionierung oder der Steuerung einer Suite über ein wandmontiertes Tablet—das OS passt sich der horizontalen Dominanz an, ohne seine minimalistische Disziplin aufzugeben.
                    </p>
                </div>

                <div className="w-full flex overflow-x-auto pb-12 scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory">
                    <div className="flex gap-12 px-8 md:px-[10vw] mx-auto min-w-max items-center">
                        {tabletImages.map((src, idx) => (
                            <m.div
                                key={`tab-${idx}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-[600px] md:w-[800px] aspect-[1920/988] shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black snap-center p-2"
                            >
                                <div className="w-full h-full rounded overflow-hidden relative">
                                    <img src={src} loading="lazy" alt={`Vœrynth OS Tablet Setup ${idx + 1}`} className="w-full h-auto object-top opacity-90 hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Mobile Experience */}
            <Section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <Smartphone className="text-[#C9A961] mb-6 opacity-80 mx-auto" size={32} />
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-4">Kommando in Ihrer Hand.</h2>
                    <p className="text-white/50 text-base leading-loose font-light max-w-2xl mx-auto">
                        Der gleiche disziplinierte Luxus und die gleiche Echtzeitsteuerung, perfekt skaliert für mobile Geräte. Kein Suchen in Einstellungen—nur sofortige Autorität über Ihr Anwesen, von überall auf der Welt.
                    </p>
                </div>

                <div className="w-full flex overflow-x-auto pb-12 scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory">
                    <div className="flex gap-8 px-8 md:px-[20vw] mx-auto min-w-max">
                        {mobileImages.map((src, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-[300px] aspect-[1080/1985] shrink-0 rounded-[2.5rem] overflow-hidden border-[6px] border-[#161616] shadow-2xl relative bg-black snap-center"
                            >
                                <div className="w-full h-full rounded-2xl overflow-hidden relative border-[6px] border-[#161616]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#161616] rounded-b-xl z-20"></div>
                                    <img src={src} loading="lazy" alt={`Vœrynth OS Mobile View ${idx + 1}`} className="w-full h-auto object-top relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Closing Principles */}
            <Section className="py-24 border-t border-[#D4AF37]/20 bg-[#080808] relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Lock className="text-[#C9A961] mb-8 opacity-80 mx-auto" size={32} />
                        <h2 className="text-2xl text-white/90 font-light mb-6">Auf Ihr Anwesen abgestimmt.</h2>
                        <p className="text-white/50 text-base leading-loose font-light max-w-2xl mx-auto mb-10">
                            Vœrynth OS ist keine App, die Sie "einrichten". Es ist ein System, das in Betrieb genommen wird. Jedes Deployment ist auf seine Hardware und signierten Komponenten abgestimmt, sodass es nicht geklont, exportiert oder beiläufig repliziert werden kann.
                        </p>

                        <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent">
                            <div className="bg-[#050505] px-12 py-6">
                                <p className="text-[#C9A961] text-lg font-light tracking-wide">
                                    Luxus, zuverlässig gemacht.
                                </p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </Section>
        </>
    );
}
