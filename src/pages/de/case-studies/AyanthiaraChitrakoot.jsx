import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronRight, Shield, Activity, Cpu, Server, Layers, Home, Eye, Lock, Moon, Music, Zap, ShieldAlert, CheckCircle2, XCircle, HeartPulse, Camera, Terminal, Copy, Check, X } from 'lucide-react';
import SmartLink from '../../../components/core/SmartLink';
import { Section, Card, Tag } from '../../../components/ui';
import SEO from '../../../components/core/SEO';

const BRAND_NAME = "Vœrynth Système";

// Reusable Code Snippet Component with Copy functionality
const CodeSnippet = ({ code, language = "yaml", title }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-lg border border-white/10 bg-[#050505] overflow-hidden mb-8">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                <span className="text-xs text-white/50 font-mono tracking-wider">{title}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-xs text-white/50 hover:text-white/90 transition-colors"
                >
                    {copied ? <><Check size={14} className="text-green-500" /> Kopiert</> : <><Copy size={14} /> Kopieren</>}
                </button>
            </div>
            <div className="p-4 overflow-x-auto text-sm max-h-[400px] overflow-y-auto custom-scrollbar">
                <pre className="text-white/80 font-mono leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

export default function DeCaseStudyAyanthiaraChitrakoot() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (imgSrc, altText, caption) => {
        setLightboxImage({ src: imgSrc, alt: altText, caption });
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const galleryImages = [
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/walltab_main_view.png",
            alt: "Haupt-Dashboard (Home)",
            title: "1. Haupt-Dashboard",
            caption: "Die primäre Startansicht des Wandtablets. Sie vermeidet komplexe Steuerungen zugunsten einer passiven Informationsbeschaffung.",
            uses: [
                "Ein Blick auf Wetter und Außentemperatur",
                "Überprüfen, in welchen Räumen aktuell Präsenz erkannt wird",
                "Verifizieren der aktiven Sprachassistenten-Persona (Ammu / Mycroft)",
                "Schnelles Umschalten wichtiger hausweiter Zustände (z.B. Gastmodus)"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png",
            alt: "Live View Grundriss + Lichtsteuerung",
            title: "2. Live View Grundriss",
            caption: "Eine stark angepasste, interaktive Karte des Anwesens, die mit einer `picture-elements`-Karte entworfen wurde. Sie bietet sofortige räumliche Übersicht.",
            uses: [
                "Visuelle Lokalisierung aktivierter Lichter auf dem Grundriss",
                "Antippen eines Raumes, um sofort alle seine Lichter zu schalten",
                "Kontextbezogene Überprüfung der Tür- und Fenstersensoren"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/security_view.png",
            alt: "Sicherheitsansicht (Kameras + Schloss + Scharf-Status)",
            title: "3. Sicherheit & Eskalation",
            caption: "Das dedizierte Sicherheits-Kontrolldeck. Neben dem Perimeterschutz verfolgt es die globale Live-Position des Nutzers und erweitert den Jarvis-Level-Schutz weit über die Grundstücksgrenze hinaus.",
            uses: [
                "Live-GPS-Tracking: Wenn Telemetriedaten auf Gefahr außerhalb des Hauses hindeuten, werden aktuelle Koordinaten automatisch an Notfallkontakte und lokale Dienste gesendet.",
                "Sofortiges Scharfschalten des Systems beim Verlassen (falls nicht durch Präsenz geschehen)",
                "Anzeigen von Live-RTSP-Kamera-Feeds (Eingang, Wohnzimmer)",
                "Überprüfen von Status und Batteriestand des Matter-fähigen Hauptschlosses"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/living_room_view.png",
            alt: "Wohnzimmer (Entertainment + Szenen)",
            title: "4. Wohnen & Entertainment",
            caption: "Ein raumspezifisches Kontrolldeck für den am häufigsten genutzten Raum im Haus, mit starkem Fokus auf Umgebungsbeleuchtung und Medien-Casting.",
            uses: [
                "Aktivieren spezifischer Abend- oder Film-Lichtszenen",
                "Direkte Steuerung der Android TV-Oberfläche von der Wand aus",
                "Überwachung des Stromverbrauchs des Entertainment-Centers",
                "Anpassen der Lautstärke des lokalen TTS-Mediaplayers"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/health_view.png",
            alt: "Gesundheitsdeck (HR/SpO₂/BP)",
            title: "5. Gesundheitssignale-Dashboard",
            caption: "Ein aggregiertes Telemetrie-Board, das Echtzeitdaten von persönlichen Wearable-Sensoren abruft und als kritisches, autonomes System zur medizinischen Notfallintervention fungiert.",
            uses: [
                "Kontinuierliche Überwachung von Vitalwerten (Ruhepuls, SpO₂, Blutdruck)",
                "Medizinische Eskalationsschleife: Fällt der Blutdruck kritisch ab, blinken die Lichter und TTS-Anweisungen ertönen (z.B. „Sofort Salzwasser trinken“).",
                "Non-Responsive-Protokoll: Fordert visuelle/akustische Bestätigung. Bei Nichtreaktion werden automatisch Freunde und Rettungsdienste alarmiert.",
                "Verwandelt handelsübliche Handys und Smartwatches in eine kontinuierliche Schutzschicht – wie ein „Ironman-Anzug“."
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/network_view.png",
            alt: "Netzwerk / Systemintegrität (CPU/RAM/Speedtest)",
            title: "6. Infrastruktur-Telemetrie",
            caption: "Der administrative Herzschlag des Smart Homes. Er belegt die „Local-First“-Zuverlässigkeit durch die Überwachung der Hardware, die das System am Laufen hält.",
            uses: [
                "Validierung der lokalen Netzwerkleistung und aktiven externen IP per Speedtest",
                "Überwachung der CPU- und RAM-Auslastung des Home Assistant-Servers",
                "Überprüfen der Festplattennutzung und der Hardware-Temperaturen",
                "Sicherstellen, dass keine Systemengpässe die Automatisierungs-Engines drosseln"
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Ayanthiara Chitrakoot — Live Vœrynth OS Einsatz | Fallstudie"
                description="Ein echtes mehrstöckiges Anwesen mit Vœrynth Système. Local-First-Automatisierung, Zero-Cloud-Logik und deterministische Fallback-Systeme in einer echten Luxusumgebung."
                keywords="Fallstudie, Live-Einsatz, ayanthiara chitrakoot, Anwesen Automatisierung, neural interface os, lokale KI, Home Assistant, Vœrynth OS, Smart Home Fallstudie, Luxus Automatisierung"
                canonical="/de/case-studies/ayanthiara-chitrakoot"
                ogImage="/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png"
            />

            {/* LIGHTBOX */}
            <AnimatePresence>
                {lightboxImage && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                        >
                            <X size={32} />
                        </button>
                        <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
                            <img
                                src={lightboxImage.src}
                                alt={lightboxImage.alt}
                                className="max-h-[80vh] w-auto object-contain rounded-lg border border-white/10 shadow-2xl"
                            />
                            <div className="mt-6 text-center">
                                <h4 className="text-[#D4AF37] font-medium tracking-wide mb-1">{lightboxImage.title}</h4>
                                <p className="text-white/70 text-sm font-light">{lightboxImage.caption}</p>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>

            {/* A: HERO */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0C0C0C] via-[#0A0A0A] to-[#080808]">
                <div className="absolute top-1/2 right-0 w-[800px] h-[800px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, rgba(212,175,55,0) 70%)' }} />

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="inline-flex items-center border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-3 py-1.5 text-xs tracking-widest uppercase text-[#C9A961]">
                                Local-First
                            </span>
                            <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-widest uppercase text-white/70">
                                Routinengesteuert
                            </span>
                            <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-widest uppercase text-white/70">
                                Menschenfreundliche Steuerung
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white/95 mb-6 leading-tight">
                            Ein lebendiges, atmendes Haus.
                            <span className="block text-xl md:text-2xl text-[#D4AF37] font-normal mt-4">
                                Gebaut, um zu funktionieren, ohne dass Sie darüber nachdenken müssen.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 font-light tracking-wide mb-10 leading-relaxed max-w-xl">
                            Ayanthiara Chitrakoot ist ein Local-First Smart Home, in dem Routinen automatisch für Komfort und Sicherheit sorgen. Das Wandpaneel dient der Präzision — nicht der Abhängigkeit.
                        </p>

                        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
                            <SmartLink to="/de/contact" className="inline-flex justify-center items-center bg-[#D4AF37] text-black px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium whitespace-nowrap shadow-lg shadow-[#D4AF37]/10">
                                PRIVATE DEMO ANFORDERN
                            </SmartLink>
                            <a href="#blueprints" className="inline-flex justify-center items-center border border-white/20 text-white/90 px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:border-white/60 hover:bg-white/[0.02] transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                                AUTOMATISIERUNGS-BLUEPRINTS ANSEHEN
                            </a>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative rounded-lg border border-white/10 bg-[#050505] p-2 shadow-2xl shadow-black group cursor-pointer" onClick={() => openLightbox("/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png", "Live View Grundriss + Lichtsteuerung", "Interaktiver Grundriss mit direkten Overlays der Entitätszustände.")}>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent rounded-lg pointer-events-none" />
                            <div className="overflow-hidden rounded border border-white/5 bg-[#000] relative">
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                                    <span className="px-4 py-2 border border-white/20 bg-black/50 text-white/90 tracking-widest text-xs rounded">LIVE VIEW ERWEITERN</span>
                                </div>
                                <img
                                    src="/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png"
                                    alt="Live View Grundriss + Lichtsteuerung"
                                    className="w-full h-auto object-cover opacity-90 transition-all duration-500 scale-[1.01] group-hover:scale-100"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-white/40 font-light mt-6 text-center italic">
                            Live View: interaktiver Grundriss mit Echtzeit-Licht-Overlays + schnellen Raumschaltern.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* B: THE BRIEF */}
            <Section className="bg-[#050505] border-y border-white/5 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-lg">
                            <span className="text-[#C9A961] font-mono text-xs tracking-widest uppercase mb-4 block">01 / Das Problem</span>
                            <h3 className="text-xl font-medium text-white/90 mb-4">Die meisten Smart Homes brauchen einen Babysitter.</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                Tablets werden zu Fernbedienungen. Apps häufen sich. Das WLAN fällt aus und der „smarte“ Teil wird zur Theateraufführung.
                            </p>
                        </div>
                        <div className="p-8 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.03)]">
                            <span className="text-[#C9A961] font-mono text-xs tracking-widest uppercase mb-4 block">02 / Das Ziel</span>
                            <h3 className="text-xl font-medium text-white/90 mb-4">Das Zuhause sollte sich wie gutes Personal verhalten.</h3>
                            <p className="text-white/70 text-sm leading-relaxed font-light">
                                Komfort bei der Ankunft. Ruhe in der Nacht. Sicherheit beim Verlassen. Keine täglichen Tipp-Rituale.
                            </p>
                        </div>
                        <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-lg">
                            <span className="text-[#C9A961] font-mono text-xs tracking-widest uppercase mb-4 block">03 / Das Ergebnis</span>
                            <h3 className="text-xl font-medium text-white/90 mb-4">Das Wandpaneel dient der Verfeinerung, nicht dem Überleben.</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                Der Alltag läuft über Automatisierungen + Präsenz + Kontext. Das Dashboard ist ein Kontrolldeck, nicht der Motor.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* C: WHAT MAKES IT FEEL ALIVE */}
            <Section className="bg-gradient-to-b from-[#080808] to-[#0A0A0A] py-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-8">
                            Das Haus reagiert, bevor Sie fragen.
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Präsenzgesteuerte Beleuchtung + Szenen (Wohnen/Essen/Küche/Schlafzimmer/Außen)",
                                "Kontextbezogene Ankunftslogik (Begrüßung + Checks + sanftes Briefing)",
                                "Automatische Scharfschaltung bei Abwesenheit; automatische Entschärfung bei Ankunft",
                                "Präsenzsimulation bei Abwesenheit (Einbruchschutz-Realismus)",
                                "Umweltbewusstsein: Wetter, Luftfeuchtigkeit, Wind, Energie, Luftqualität (sofern verfügbar)",
                                "Sprachassistenten mit Statusanzeigen (Hört zu / Denkt nach / Antwortet)"
                            ].map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="mt-1.5"><ChevronRight size={14} className="text-[#C9A961]" /></span>
                                    <span className="text-white/70 font-light leading-relaxed">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-4 lg:pl-12">
                        {[
                            { label: "Präsenzsensoren", icon: Eye },
                            { label: "Szenen-Engine", icon: Layers },
                            { label: "Lokale Sprache", icon: Server },
                            { label: "Sicherheitsschleife", icon: ShieldAlert },
                            { label: "Energie- + Gesundheitsdeck", icon: HeartPulse },
                            { label: "Manuelle Übersteuerung immer verfügbar", icon: Lock }
                        ].map((chip, idx) => (
                            <div key={idx} className="flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/[0.02] backdrop-blur text-sm tracking-wide text-white/80 rounded-full">
                                <chip.icon size={16} className="text-[#C9A961]" />
                                {chip.label}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* D: THE WALL PANEL */}
            <Section className="py-24">
                <div className="max-w-5xl mx-auto">
                    <div className="border border-[#D4AF37]/30 bg-gradient-to-br from-[#0A0A0A] to-[#050505] p-12 md:p-16 rounded-xl relative shadow-2xl">
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-xl" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-xl" />

                        <h2 className="text-3xl text-center font-light text-white/95 mb-16 tracking-wide">
                            Das Wandpaneel ist das <em className="text-[#D4AF37] not-italic font-normal">Cockpit</em>, nicht der <em className="text-[#D4AF37] not-italic font-normal border-b border-[#D4AF37]/50">Pilot</em>.
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
                            {/* Divider line hidden on mobile */}
                            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                            <div>
                                <h4 className="text-[#C9A961] text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                                    <CheckCircle2 size={16} /> Wofür es da ist
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Feinsteuerung der Beleuchtung (Helligkeit, schnelle Szenen)",
                                        "Live-Grundriss (visuelle Bestätigung)",
                                        "Manuelle Übersteuerung in Ausnahmefällen",
                                        "Schneller Zugriff auf Sicherheit, Schlösser, Kameras",
                                        "„Wunderschöne Steuerung“ für Gäste / Bequemlichkeit"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/70 font-light text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-red-400/80 text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                                    <XCircle size={16} /> Was es NICHT ist
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Nicht für den täglichen Betrieb erforderlich",
                                        "Keine Abhängigkeit für die Sicherheit",
                                        "Nicht die Haupt-Automatisierungslogik",
                                        "Kein Single Point of Failure"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/50 font-light text-sm italic">
                                            <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/5 text-center">
                            <p className="text-xl md:text-2xl text-white/90 font-light italic">
                                „Wenn das Tablet ausfällt, funktioniert das Haus trotzdem weiter.“
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* E: SCREENSHOT GALLERY / COMMAND INTERFACES DETAILED */}
            <Section className="bg-[#050505] py-32 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-light text-white/95 mb-4">Befehlsschnittstellen Deep Dive</h2>
                        <p className="text-white/50 font-light text-sm max-w-2xl mx-auto leading-relaxed">
                            Die visuelle Ebene des Ayanthiara-Anwesens ist zweckgebunden. Jede Ansicht ist isoliert, um kognitive Überlastung zu vermeiden und absolute Präzisionskontrolle zu bieten, wenn Automatisierungen manuelle Verfeinerung erfordern.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className={`flex flex-col gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 group cursor-pointer" onClick={() => openLightbox(img.src, img.alt, img.caption)}>
                                    <div className="relative rounded-lg border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center min-h-[350px]">
                                        <div className="overflow-hidden rounded relative w-full flex items-center justify-center bg-[#050505]">
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                                                <span className="p-4 bg-black/60 border border-white/10 text-white/90 tracking-widest text-xs rounded-full flex items-center gap-2 transition-all duration-300 group-hover:scale-110">
                                                    <Eye size={16} /> ANSICHT PRÜFEN
                                                </span>
                                            </div>
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl lg:text-3xl font-light text-white/95 mb-6">{img.title}</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                                        {img.caption}
                                    </p>

                                    <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                                        <CheckCircle2 size={16} /> Hauptverwendungen
                                    </h4>
                                    <ul className="space-y-4">
                                        {img.uses.map((use, i) => (
                                            <li key={i} className="flex items-start gap-4 text-white/70 font-light text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                                                {use}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* JARVIS / NEURAL LAYER SECTION */}
            <Section className="py-32 bg-[#080808] border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, rgba(212,175,55,0) 70%)' }} />

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-6">
                        Warum es sich anfühlt wie JARVIS in Malibu
                    </h2>
                    <p className="text-white/60 font-light text-lg max-w-3xl mx-auto leading-relaxed mb-16">
                        Dies ist nicht einfach nur eine Standard-Installation von Home Assistant. Home Assistant fungiert lediglich als <strong className="text-[#C9A961] font-normal">State Engine</strong> und <strong className="text-[#C9A961] font-normal">Translation Core</strong> (Hardware-Abstraktionsschicht). Die wahre Intelligenz von Vœrynth Système operiert primär auf unseren proprietären, übergeordneten Säulen: dem <strong className="text-[#C9A961] font-normal">Reasoning Core</strong> und dem <strong className="text-[#C9A961] font-normal">Vœrynth Interface</strong>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-lg hover:border-white/10 transition-colors">
                            <h4 className="text-[#C9A961] tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                                <Cpu size={16} /> 1. The Reasoning Core (Neural Layer)
                            </h4>
                            <p className="text-white/50 text-sm font-light leading-relaxed">
                                Unsere proprietäre Intelligenz-Engine verarbeitet unstrukturierte Live-Datenströme von allen Umgebungs- und Wearable-Sensoren. Anstatt sich nur auf starre YAML-Trigger zu verlassen, wertet dieser Reasoning Core den Kontext aus. Er berechnet dynamisch Mikro-Automatisierungen in Echtzeit basierend auf Absicht und realen Bedingungen. Das verleiht der Residenz ihr prädiktives "JARVIS"-Level an Bewusstsein, während es gebunden und deterministisch bleibt.
                            </p>
                        </div>

                        <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-lg hover:border-white/10 transition-colors flex flex-col items-start">
                            <h4 className="text-[#C9A961] tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                                <Layers size={16} /> 2. The Vœrynth Interface (OS Layer)
                            </h4>
                            <p className="text-white/50 text-sm font-light leading-relaxed">
                                Das maßgeschneiderte Frontend-Betriebssystem von Vœrynth orchestriert normalerweise das komplette visuelle Erlebnis im gesamten Haus – und präsentiert nur das, was notwendig ist, wenn es notwendig ist.
                            </p>
                            <div className="mt-4 p-4 border-l-2 border-white/20 bg-white/[0.02] rounded-r mb-8">
                                <p className="text-white/70 text-xs italic leading-relaxed">
                                    <strong>Entwickler-Build Hinweis:</strong> Da Ayanthiara Chitrakoot als frühes Beta-Testbed im eigenen Haus des Entwicklers dient, wird die wunderschöne proprietäre Vœrynth OS-Ebene hier bewusst umgangen. Wir haben den rohen Reasoning Core direkt gegen eine stark reduzierte Home Assistant Lovelace-Oberfläche einem Stresstest unterzogen.
                                </p>
                            </div>

                            <SmartLink
                                to="/de/os"
                                className="mt-auto inline-flex items-center gap-3 px-6 py-3 border border-white/10 text-white/80 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:text-[#D4AF37] transition-all duration-300 text-xs tracking-widest uppercase group"
                            >
                                Lernen Sie Vœrynth OS 5.0.1 kennen
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </Section>

            {/* F: AUTOMATION BLUEPRINTS & ARCHITECTURE */}
            <Section id="blueprints" className="bg-gradient-to-br from-[#0C0C0C] to-[#0A0A0A] py-32">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="mb-20 text-center">
                        <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-6">ECHTER technischer Beweis</h2>
                        <p className="text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                            Ein Smart Home ist nur so robust wie seine Routing-Ebene. Unten sehen Sie die architektonische Grundlage und die ausführende YAML-Logik der Ayanthiara-Residenz.
                        </p>
                    </div>

                    {/* F.1 Architecture Diagram */}
                    <div className="mb-24">
                        <h3 className="text-xl font-light text-white/90 mb-8 border-b border-white/10 pb-4 inline-block">Architektur-Flow</h3>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                            {[
                                { title: "Geräte & Signale", desc: "Sensoren, Kameras, Zustände", icon: Activity },
                                { title: "Home Assistant", desc: "Lokale Zustandsmaschine & Kern", icon: Server },
                                { title: "Automatisierungen", desc: "YAML-Logik & Kontextauswertung", icon: Cpu },
                                { title: "Ausgabe / Steuerung", desc: "Beleuchtung, Relais & Sprach-TTS", icon: Layers }
                            ].map((block, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="flex-1 w-full md:w-auto p-6 bg-[#050505] border border-white/10 rounded-lg text-center flex flex-col items-center">
                                        <block.icon size={24} className="text-[#C9A961] mb-4 opacity-80" />
                                        <h5 className="text-white/90 font-medium text-sm mb-1">{block.title}</h5>
                                        <p className="text-white/40 text-xs font-light">{block.desc}</p>
                                    </div>
                                    {idx < 3 && (
                                        <div className="text-white/20 hidden md:block">
                                            <ChevronRight size={24} />
                                        </div>
                                    )}
                                    {idx < 3 && (
                                        <div className="text-white/20 md:hidden py-2">
                                            <ChevronRight size={24} className="rotate-90" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* F.2 Technical Datasheet */}
                    <div className="mb-24">
                        <h3 className="text-xl font-light text-white/90 mb-8 border-b border-white/10 pb-4 inline-block">Technisches Datenblatt</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Server size={14} /> Kernplattform</h4>
                                <ul className="space-y-3 text-sm font-light text-white/70">
                                    <li>• Home Assistant (OS/Core)</li>
                                    <li>• Lovelace UI (Sections layout)</li>
                                    <li>• Automatisierungen in YAML</li>
                                    <li>• Lokale Medien + TTS-Wiedergabe</li>
                                    <li>• Wand-Tablet Dashboard (Kiosk-Stil)</li>
                                </ul>
                            </div>

                            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 p-8 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Layers size={14} /> Vœrynth Stack</h4>
                                <ul className="space-y-4 text-sm font-light text-white/70">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-white/90 font-normal text-xs tracking-wider uppercase">Reasoning Core (Neural-Ebene)</span>
                                        <span className="text-white/50 text-xs leading-relaxed">Proprietäre KI-Engine — verarbeitet Live-Sensordaten, bewertet den Kontext und berechnet Mikro-Automatisierungen in Echtzeit. Keine YAML-Trigger für kontextuelle Reaktionen erforderlich.</span>
                                    </li>
                                    <li className="flex flex-col gap-1 pt-2 border-t border-white/5">
                                        <span className="text-white/90 font-normal text-xs tracking-wider uppercase">Vœrynth OS 5.0.1 (Interface-Ebene)</span>
                                        <span className="text-white/50 text-xs leading-relaxed">Benutzerdefiniertes Neural-Interface-OS — in dieser Beta-Umgebung umgangen; direkt gegen rohes HA Lovelace auf Belastbarkeit getestet.</span>
                                    </li>
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a href="/de/os" className="inline-flex items-center gap-1.5 text-[10px] tracking-widest text-[#C9A961] border border-[#D4AF37]/20 px-3 py-1.5 rounded hover:bg-[#D4AF37]/5 transition-colors">OS ANSEHEN →</a>
                                    <a href="https://github.com/kiranvenom1209/voerynth-os" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] tracking-widest text-white/40 border border-white/10 px-3 py-1.5 rounded hover:text-white/70 hover:border-white/20 transition-colors">GITHUB →</a>
                                </div>
                            </div>

                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Layers size={14} /> UI / Verwendete Custom Cards</h4>
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs font-mono text-white/60">
                                    <li>custom:state-switch</li>
                                    <li>custom:html-template-card</li>
                                    <li>clock-weather-card-hui-icons</li>
                                    <li>public-transport-departures</li>
                                    <li>custom:calendar-card-pro</li>
                                    <li>custom:config-template-card</li>
                                    <li>picture-elements</li>
                                    <li>custom:mini-media-player</li>
                                    <li>custom:android-tv-card</li>
                                    <li>custom:stack-in-card</li>
                                    <li>custom:mushroom-template-card</li>
                                    <li className="font-sans italic">Windy + ADSBExchange (iframe)</li>
                                </ul>
                            </div>

                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Cpu size={14} /> Geräte</h4>
                                <ul className="space-y-3 text-sm font-light text-white/70">
                                    <li><strong className="text-white/90 font-normal">Beleuchtung:</strong> Philips Hue (mehrere Räume + Szenen)</li>
                                    <li><strong className="text-white/90 font-normal">Präsenz:</strong> Aqara FP2 Zonen (Wohnen/Essen) + Kamera-Personenerkennungssensoren</li>
                                    <li><strong className="text-white/90 font-normal">Kameras:</strong> TC71 Streams (Wohnen + Eingang) + zusätzliche Kameras</li>
                                    <li><strong className="text-white/90 font-normal">Schloss:</strong> Matter-fähiges Hauptschloss + Türsensor + Batterieüberwachung</li>
                                    <li><strong className="text-white/90 font-normal">Steckdosen:</strong> Tapo-Steckerleiste/Smart Plugs (Arbeitsplatz, Beschilderung, etc.)</li>
                                    <li><strong className="text-white/90 font-normal">Unterhaltung:</strong> Android TV + Remote-Integration</li>
                                    <li><strong className="text-white/90 font-normal">Personal:</strong> Gesundheitsmetriken von Telefon + Smartwatch</li>
                                </ul>
                            </div>

                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg flex-1">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Activity size={14} /> Protokolle &amp; Transport</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Zigbee (Hue-Ökosystem)', 'Matter (Türschloss)', 'WLAN / LAN', 'RTSP/Streaming', 'Lokale TTS-Ausgabe', 'Cloud TTS (optionale Qualitätsschleife)'].map((p, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/70 rounded">{p}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#0A0A0A] border-l-2 border-[#D4AF37] p-8 rounded-r-lg">
                                <h4 className="text-white/90 text-sm mb-4">Kern-Designprinzipien</h4>
                                <ul className="space-y-2 text-xs font-light text-white/60">
                                    <li>• Local-First Verhalten</li>
                                    <li>• Manueller Rückfall immer verfügbar</li>
                                    <li>• Automatisierungen bestimmen den Alltag; das Dashboard verfeinert ihn</li>
                                    <li>• Sicherheitslogik ist zustandsbehaftet + persistent, solange scharfgeschaltet</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* F.3 REAL AUTOMATION SNIPPETS */}
                    <div>
                        <h3 className="text-xl font-light text-white/90 mb-8 border-b border-white/10 pb-4 inline-block">Echte Automatisierungsbeispiele</h3>
                        <p className="text-white/50 text-sm font-light mb-8">Gekürzte, saubere Case-Study-Versionen der YAML-Logik, die die Residenz steuert.</p>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-white/80 font-medium mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9A961] font-mono">1</span>
                                    Willkommen zuhause (Entriegeln → Licht + "Ich bin zuhause" Status)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automatisierung"
                                    code={`alias: "RTN – Welcome Home (Unlock → Lights + State)"
description: "When the main door unlocks, turn on comfort lighting and mark arrival."
trigger:
  - platform: state
    entity_id: lock.main_lock_matter
    to: "unlocked"
condition:
  - condition: state
    entity_id: person.kiran
    state: "home"
action:
  - service: light.turn_on
    target:
      area_id:
        - living_room
        - dining
        - kitchen
    data:
      brightness_pct: 60
      transition: 2
  - service: input_boolean.turn_on
    target:
      entity_id: input_boolean.iamhome
mode: single`}
                                />
                            </div>

                            <div>
                                <h4 className="text-white/80 font-medium mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9A961] font-mono">2</span>
                                    Einbruchalarm-Schleife (Scharf → Rote Szenen + Warnungen)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automatisierung"
                                    code={`alias: "SEC – Intrusion Alarm: Red Scene & Announcements"
description: "If a person is detected while armed, trigger alert scenes + repeat warning."
trigger:
  - platform: state
    entity_id: binary_sensor.tc71_person_detection_2
    to: "on"
condition:
  - condition: state
    entity_id: input_boolean.security_system
    state: "on"
action:
  - service: scene.turn_on
    target:
      entity_id:
        - scene.living_room_red
        - scene.dining_red
        - scene.kitchen_red
        - scene.bedroom_red

  - service: notify.mobile_app_kiran_s_phone
    data:
      title: "ALERT!!!"
      message: "A person is detected at home."

  - service: tts.cloud_say
    data:
      entity_id: media_player.home_assistant_voice_09af65_media_player
      message: >
        You have entered the property without prior permission. State your intentions
        or call the owner to disable security.

  - repeat:
      while:
        - condition: state
          entity_id: input_boolean.security_system
          state: "on"
      sequence:
        - service: light.turn_on
          target:
            entity_id:
              - light.living_room_2
              - light.dining
              - light.kitchen
              - light.bedroom
          data:
            flash: short
            brightness_pct: 100
        - delay: "00:00:02"
mode: single`}
                                />
                            </div>

                            <div>
                                <h4 className="text-white/80 font-medium mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9A961] font-mono">3</span>
                                    Auto-Scharf / Auto-Unscharf (Telefon-Präsenz-Tracker)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automatisierung"
                                    code={`alias: "SEC – Auto Arm on Departure"
trigger:
  - platform: state
    entity_id: device_tracker.kiran_s_phone
    to: "not_home"
action:
  - service: input_boolean.turn_on
    target:
      entity_id: input_boolean.security_system

---

alias: "SEC – Auto Disarm on Arrival"
trigger:
  - platform: state
    entity_id: device_tracker.kiran_s_phone
    to: "home"
action:
  - service: input_boolean.turn_off
    target:
      entity_id: input_boolean.security_system`}
                                />
                            </div>

                            <div>
                                <h4 className="text-white/80 font-medium mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9A961] font-mono">4</span>
                                    Präsenzsimulation (bei Abwesenheit & scharfgeschaltet)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automatisierung"
                                    code={`alias: "SEC – Presence Simulation (Evening Random Lights)"
description: "If nobody is home and security is on, randomly toggle lights to mimic presence."
trigger:
  - platform: time_pattern
    minutes: "/15"
condition:
  - condition: state
    entity_id: person.kiran
    state: "not_home"
  - condition: state
    entity_id: input_boolean.security_system
    state: "on"
  - condition: time
    after: "18:30:00"
    before: "23:30:00"
action:
  - service: light.toggle
    target:
      entity_id: "{{ ['light.living_room_2','light.dining','light.kitchen'] | random }}"
mode: single`}
                                />
                            </div>

                            <div>
                                <h4 className="text-white/80 font-medium mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9A961] font-mono">5</span>
                                    Wechsel der Assistenten-Persona (Ammu ↔ Mycroft)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automatisierung"
                                    code={`alias: "AI – Assistant Mode Toggle"
description: "Single boolean decides which assistant personality is active."
trigger:
  - platform: state
    entity_id: input_boolean.assist_switch
action:
  - choose:
      - conditions:
          - condition: state
            entity_id: input_boolean.assist_switch
            state: "on"
        sequence:
          - service: select.select_option
            target:
              entity_id: select.home_assistant_voice_09af65_assistant
            data:
              option: "Ammu_int"
      - conditions:
          - condition: state
            entity_id: input_boolean.assist_switch
            state: "off"
        sequence:
          - service: select.select_option
            target:
              entity_id: select.home_assistant_voice_09af65_assistant
            data:
              option: "Mycroft"
mode: single`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* G: EXPLAIN LIVE VIEW FLOORPLAN */}
            <Section className="py-24 border-y border-[#D4AF37]/10 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-light text-white/95 leading-relaxed mb-6">Das Live View entpacken</h2>
                    <p className="text-white/50 leading-loose text-sm mb-12 max-w-2xl mx-auto">
                        Eine stark angepasste `picture-elements`-Karte rendert das physische Layout präzise und interaktiv.
                    </p>
                    <div className="text-left bg-[#0A0A0A] border border-white/10 p-8 rounded-lg">
                        <ul className="space-y-4 text-white/70 font-light text-sm">
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Der Basis-Grundriss ist ein statisches, kontrastreiches Bild.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> „Glow Layer“ sind PNG-Overlays, segmentiert pro Beleuchtungszone.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Overlays erscheinen <em>nur</em>, wenn der entsprechende Entitätsstatus auf ON steht.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Die Deckkraft des Overlays ist dynamisch mit dem physischen `brightness`-Attribut der Lampe verknüpft.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Der Farbton wird mittels `hs_color` über Live-CSS-Filter angenähert.
                            </li>
                            <li className="flex gap-4 pt-4 border-t border-white/5 text-white/90">
                                <span className="text-[#D4AF37]">→</span> <strong>Die visuelle Darstellung ist keine Dekoration — sie ist mit echten Entitätszuständen verdrahtet.</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* H: WHY THIS MATTERS */}
            <Section className="py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-12">
                        Luxus-Automatisierung bedeutet nicht mehr Geräte. <br />
                        <span className="text-[#C9A961]">Sie bedeutet weniger Entscheidungen.</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center">
                            <Layers size={24} className="text-white/20 mx-auto mb-4" />
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                Routines reduzieren die kognitive Belastung<br /> (das Haus sollte die Last tragen).
                            </p>
                        </div>
                        <div className="text-center">
                            <Shield size={24} className="text-white/20 mx-auto mb-4" />
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                Sicherheit ist absolut zustandsbehaftet<br /> (scharf bedeutet scharf — kontinuierlich).
                            </p>
                        </div>
                        <div className="text-center">
                            <Terminal size={24} className="text-white/20 mx-auto mb-4" />
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                Manuelle Übersteuerungen existieren,<br /> weil die Realität existiert (WLAN, Gäste, Sonderfälle).
                            </p>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-white/80 font-light italic">
                        „Gute Automatisierung ist unsichtbar. Großartige Automatisierung ist immer noch da, wenn die Dinge durcheinander geraten.“
                    </p>
                </div>
            </Section>

            {/* I: FAQ */}
            <Section className="py-24 bg-[#050505] border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-center text-white/95 mb-16">Häufig gestellte Fragen</h2>
                    <div className="space-y-8">
                        {[
                            {
                                q: "Ist das Tablet für den Betrieb erforderlich?",
                                a: "Nein. Automatisierungen erledigen das tägliche Verhalten; das Tablet ist lediglich ein Werkzeug zur Verfeinerung und ein Dashboard."
                            },
                            {
                                q: "Was passiert, wenn das Internet ausfällt?",
                                a: "Die Kernfunktionen bleiben robust lokal (Beleuchtung, Szenen, Schlösser, Präsenzlogik). Externe Einbettungen wie Nachrichten oder Radarkarten können gracefully degradieren."
                            },
                            {
                                q: "Können Gäste es einfach bedienen?",
                                a: "Ja — die Benutzeroberfläche ist bewusst als sauberes, raumbasiertes Kontrolldeck konzipiert, das keine Einarbeitungszeit erfordert."
                            },
                            {
                                q: "Ist das sicher?",
                                a: "Die Sicherheit ist vollständig zustandsgesteuert (scharf/unscharf) und mit Kameraerkennung, lokalen Warnungen und lokalen Audio-Durchsagen geschichtet, wodurch unerwartete externe Umgehungen verhindert werden."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="border-b border-white/10 pb-8 hover:bg-white/[0.01] p-4 -mx-4 rounded transition-colors">
                                <h4 className="text-white/90 font-medium mb-2 tracking-wide text-lg">F: {faq.q}</h4>
                                <p className="text-white/60 font-light text-sm leading-relaxed">A: {faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#050505] text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0) 70%)' }} />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-light text-white/95 mb-8 leading-relaxed">
                        Möchten Sie dieses Maß an Infrastruktur in Ihrer Residenz?
                    </h2>
                    <p className="text-lg text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Vœrynth Système beauftragt private Installationen, die auf Zuverlässigkeit, Datenschutz und langfristige Ruhe ausgelegt sind.
                    </p>

                    <div className="flex flex-col xl:flex-row justify-center gap-4 sm:gap-6 mb-20">
                        <SmartLink to="/de/contact" className="inline-flex justify-center items-center bg-[#D4AF37] text-black px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium whitespace-nowrap shadow-lg shadow-[#D4AF37]/10">
                            PRIVATE DEMO ANFORDERN
                        </SmartLink>
                        <a href="#blueprints" className="inline-flex justify-center items-center border border-white/20 text-white/90 px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:border-white/60 hover:bg-white/[0.02] transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                            AUTOMATISIERUNGS-BLUEPRINTS ANSEHEN
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
