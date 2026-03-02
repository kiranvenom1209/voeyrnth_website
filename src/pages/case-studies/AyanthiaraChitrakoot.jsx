import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronRight, Shield, Activity, Cpu, Server, Layers, Home, Eye, Lock, Moon, Music, Zap, ShieldAlert, CheckCircle2, XCircle, HeartPulse, Camera, Terminal, Copy, Check, X } from 'lucide-react';
import SmartLink from '../../components/core/SmartLink';
import { Section, Card, Tag } from '../../components/ui';
import SEO from '../../components/core/SEO';

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
                    {copied ? <><Check size={14} className="text-green-500" /> Copied</> : <><Copy size={14} /> Copy</>}
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

export default function AyanthiaraChitrakoot() {
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
            alt: "Main dashboard overview (Home)",
            title: "1. Main Dashboard",
            caption: "The primary landing view of the wall tablet. It avoids complex controls in favor of passive information gathering.",
            uses: [
                "Glancing at weather and outside temperature",
                "Checking which rooms currently detect presence",
                "Verifying the active voice assistant persona (Ammu / Mycroft)",
                "Quick toggle for major whole-house states (e.g., Guest mode)"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png",
            alt: "Live View floorplan + Light Controls",
            title: "2. Live View Floorplan",
            caption: "A highly customized interactive map of the estate, designed using a `picture-elements` card. It provides immediate spatial awareness.",
            uses: [
                "Visually pinpointing exactly which lights are on across the floorplan",
                "Tapping on a room to toggle all its lights instantly",
                "Checking door and window sensor states contextually"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/security_view.png",
            alt: "Security view (cameras + lock + armed state)",
            title: "3. Security & Escalation",
            caption: "The dedicated security control deck. Beyond perimeter defense, it tracks the user's live global position, extending Jarvis-level protection far beyond the property line.",
            uses: [
                "Live GPS tracking: If health telemetry indicates danger outside the home, auto-sends current coordinates to emergency contacts and local services.",
                "Arming the system instantly upon leaving (if not auto-armed by presence)",
                "Viewing live RTSP camera feeds (Entrance, Living Room)",
                "Checking the status and battery level of the Matter-enabled main lock"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/living_room_view.png",
            alt: "Living Room view (Entertainment + scenes)",
            title: "4. Living & Entertainment",
            caption: "A room-specific control deck designed for the most heavily used space in the house, focusing heavily on ambient lighting and media casting.",
            uses: [
                "Activating specific evening or movie lighting scenes",
                "Controlling the Android TV interface directly from the wall",
                "Monitoring the power draw of the entertainment center",
                "Adjusting the volume of the local TTS media player"
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/health_view.png",
            alt: "Health deck (HR/SpO₂/BP)",
            title: "5. Health Signals Dashboard",
            caption: "An aggregated telemetry board pulling real-time data from personal wearable sensors, acting as a critical, autonomous medical emergency intervention system.",
            uses: [
                "Continuous monitoring of vital signs (resting HR, SpO₂, blood pressure averages)",
                "Medical Escalation Loop: If BP drops critically, automatically flashes house lights and broadcasts TTS instructions (e.g., 'Take salt water immediately').",
                "Non-responsive Protocol: Prompts for a physical/audio confirmation. If failed, automatically alerts friends and emergency services.",
                "Transforms standard phones and smartwatches into a continuous layer of 'Ironman suit' style protection."
            ]
        },
        {
            src: "/assets/case-studies/ayanthiara-chitrakoot/network_view.png",
            alt: "Network / system health (CPU/RAM/speedtest)",
            title: "6. Infrastructure Telemetry",
            caption: "The administrative heartbeat of the smart home. It proves the \"local-first\" reliability by tracking the hardware that runs the system.",
            uses: [
                "Validating local network strength and active external IP via speedtests",
                "Monitoring the Home Assistant server's CPU and RAM utilization",
                "Checking disk usage and component thermal states",
                "Ensuring no system bottlenecks are throttling the automation engines"
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Ayanthiara Chitrakoot — Live Vœrynth OS Deployment | Case Study"
                description="A real multi-level estate running Vœrynth Système live. Local-first automation, zero-cloud logic, presence-aware control, and deterministic fallbacks deployed in a luxury environment."
                keywords="case study, live deployment, ayanthiara chitrakoot, estate automation, neural interface os, local AI, Home Assistant, Vœrynth OS, smart home case study, luxury estate automation"
                image="/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png"
                type="article"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        "headline": "Ayanthiara Chitrakoot — Live Vœrynth OS Deployment",
                        "description": "A real multi-level estate running Vœrynth Système live. Local-first automation, zero-cloud logic, presence-aware control, and deterministic fallbacks deployed in a luxury environment.",
                        "image": "https://voerynth.de/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png",
                        "url": "https://voerynth.de/case-studies/ayanthiara-chitrakoot",
                        "author": {
                            "@type": "Organization",
                            "name": "Vœrynth Système",
                            "url": "https://voerynth.de"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Vœrynth Système",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://voerynth.de/assets/logo/logo.svg"
                            }
                        },
                        "about": [
                            { "@type": "Thing", "name": "Smart Home Automation" },
                            { "@type": "Thing", "name": "Local-First Architecture" },
                            { "@type": "Thing", "name": "Home Assistant" }
                        ],
                        "inLanguage": "en"
                    }
                ]}
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
                                Local-first
                            </span>
                            <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-widest uppercase text-white/70">
                                Routine-driven
                            </span>
                            <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-widest uppercase text-white/70">
                                Human-friendly controls
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white/95 mb-6 leading-tight">
                            A Living, Breathing House.
                            <span className="block text-xl md:text-2xl text-[#D4AF37] font-normal mt-4">
                                Built to Run Without You Thinking About It.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 font-light tracking-wide mb-10 leading-relaxed max-w-xl">
                            Ayanthiara Chitrakoot is a local-first smart home where routines trigger comfort and security automatically. The wall panel exists for precision — not dependence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <SmartLink to="/contact" className="inline-flex justify-center items-center bg-[#D4AF37] text-black px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium whitespace-nowrap shadow-lg shadow-[#D4AF37]/10">
                                REQUEST A PRIVATE DEMO
                            </SmartLink>
                            <a href="#blueprints" className="inline-flex justify-center items-center border border-white/20 text-white/90 px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:border-white/60 hover:bg-white/[0.02] transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                                SEE THE AUTOMATION BLUEPRINTS
                            </a>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative rounded-lg border border-white/10 bg-[#050505] p-2 shadow-2xl shadow-black group cursor-pointer" onClick={() => openLightbox("/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png", "Live View floorplan + Light Controls", "Interactive floorplan overlaid directly with entity states.")}>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent rounded-lg pointer-events-none" />
                            <div className="overflow-hidden rounded border border-white/5 bg-[#000] relative">
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                                    <span className="px-4 py-2 border border-white/20 bg-black/50 text-white/90 tracking-widest text-xs rounded">EXPAND LIVE VIEW</span>
                                </div>
                                <img
                                    src="/assets/case-studies/ayanthiara-chitrakoot/live_view_floorplan_light_controls.png"
                                    alt="Live View floorplan + Light Controls"
                                    className="w-full h-auto object-cover opacity-90 transition-all duration-500 scale-[1.01] group-hover:scale-100"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-white/40 font-light mt-6 text-center italic">
                            Live View: interactive floorplan with real-time lighting overlays + quick room toggles.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* B: THE BRIEF */}
            <Section className="bg-[#050505] border-y border-white/5 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-lg">
                            <span className="text-[#C9A961] font-mono text-xs tracking-widest uppercase mb-4 block">01 / The Problem</span>
                            <h3 className="text-xl font-medium text-white/90 mb-4">Most smart homes need babysitting.</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                Tablets become remote controls. Apps multiply. Wi-Fi drops and the ‘smart’ part becomes theatre.
                            </p>
                        </div>
                        <div className="p-8 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.03)]">
                            <span className="text-[#C9A961] font-mono text-xs tracking-widest uppercase mb-4 block">02 / The Goal</span>
                            <h3 className="text-xl font-medium text-white/90 mb-4">The home should behave like staff.</h3>
                            <p className="text-white/70 text-sm leading-relaxed font-light">
                                Comfort when you arrive. Calm at night. Security when you leave. No daily tapping rituals.
                            </p>
                        </div>
                        <div className="p-8 border border-white/10 bg-[#0A0A0A] rounded-lg">
                            <span className="text-[#C9A961] font-mono text-xs tracking-widest uppercase mb-4 block">03 / Outcome</span>
                            <h3 className="text-xl font-medium text-white/90 mb-4">Wall panel is for refinement, not survival.</h3>
                            <p className="text-white/50 text-sm leading-relaxed font-light">
                                Daily life runs on automations + presence + context. The dashboard is a control deck, not the engine.
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
                            The house reacts before you ask.
                        </h2>
                        <ul className="space-y-6">
                            {[
                                "Presence-aware lighting + scenes (Living/Dining/Kitchen/Bedroom/Outdoor)",
                                "Contextual arrival logic (welcome + checks + gentle briefing)",
                                "Auto-arming security when away; auto-disarming on arrival",
                                "Presence simulation when away (anti-burglary realism)",
                                "Environmental awareness: weather, humidity, wind, energy, air quality (as available)",
                                "Voice assistants with status states (Listening / Thinking / Responding)"
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
                            { label: "Presence Sensors", icon: Eye },
                            { label: "Scene Engine", icon: Layers },
                            { label: "Local Voice", icon: Server },
                            { label: "Security Loop", icon: ShieldAlert },
                            { label: "Energy + Health Deck", icon: HeartPulse },
                            { label: "Manual override always available", icon: Lock }
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
                            The wall panel is the <em className="text-[#D4AF37] not-italic font-normal">cockpit</em>, not the <em className="text-[#D4AF37] not-italic font-normal border-b border-[#D4AF37]/50">pilot</em>.
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
                            {/* Divider line hidden on mobile */}
                            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                            <div>
                                <h4 className="text-[#C9A961] text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                                    <CheckCircle2 size={16} /> What it’s for
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Fine lighting control (brightness, quick scenes)",
                                        "Live floorplan (visual confirmation)",
                                        "Manual override during edge cases",
                                        "Quick access to security, locks, cameras",
                                        "“Beautiful control” for guests / convenience"
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
                                    <XCircle size={16} /> What it’s NOT
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Not required for daily operation",
                                        "Not a dependency for safety",
                                        "Not the main automation logic",
                                        "Not a single point of failure"
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
                                “If the tablet dies, the house still behaves.”
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* E: SCREENSHOT GALLERY / COMMAND INTERFACES DETAILED */}
            <Section className="bg-[#050505] py-32 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-light text-white/95 mb-4">Command Interfaces Deep Dive</h2>
                        <p className="text-white/50 font-light text-sm max-w-2xl mx-auto leading-relaxed">
                            The visual layer of the Ayanthiara estate is purpose-built. Each view is isolated to prevent cognitive overload while providing absolute precision control when automations need manual refinement.
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
                                                    <Eye size={16} /> INSPECT VIEW
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
                                        <CheckCircle2 size={16} /> Primary Uses
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
                        Why It Feels Like JARVIS in Malibu
                    </h2>
                    <p className="text-white/60 font-light text-lg max-w-3xl mx-auto leading-relaxed mb-16">
                        This is not just a standard Home Assistant installation. Home Assistant merely acts as the <strong className="text-[#C9A961] font-normal">State Engine</strong> and <strong className="text-[#C9A961] font-normal">Translation Core</strong>. The true intelligence and feel of Vœrynth Système operates primarily on our proprietary higher-level pillars: the <strong className="text-[#C9A961] font-normal">Reasoning Core</strong> and the <strong className="text-[#C9A961] font-normal">Vœrynth Interface</strong>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-lg hover:border-white/10 transition-colors">
                            <h4 className="text-[#C9A961] tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                                <Cpu size={16} /> 1. The Reasoning Core (Neural Layer)
                            </h4>
                            <p className="text-white/50 text-sm font-light leading-relaxed">
                                Our proprietary intelligence engine ingests live, unstructured data streams from all environmental and wearable sensors. Instead of relying solely on rigid YAML triggers, this Reasoning Core evaluates context. It dynamically computes micro-automations on the fly based on intent and real-world conditions, giving the residence its acute, "JARVIS" level of awareness and predictive reaction while remaining bounded and deterministic.
                            </p>
                        </div>

                        <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-lg hover:border-white/10 transition-colors flex flex-col items-start">
                            <h4 className="text-[#C9A961] tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                                <Layers size={16} /> 2. The Vœrynth Interface (OS Layer)
                            </h4>
                            <p className="text-white/50 text-sm font-light leading-relaxed">
                                Vœrynth's custom frontend operating system usually orchestrates the complete visual experience across the house—presenting only what is necessary, when it is necessary.
                            </p>
                            <div className="mt-4 p-4 border-l-2 border-white/20 bg-white/[0.02] rounded-r mb-8">
                                <p className="text-white/70 text-xs italic leading-relaxed">
                                    <strong>Dev-Build Note:</strong> Because Ayanthiara Chitrakoot serves as an early beta testbed in the developer's own home, the beautiful proprietary Vœrynth OS layer is intentionally bypassed here. We stress-tested the raw Reasoning Core directly against a heavily stripped-back Home Assistant Lovelace interface.
                                </p>
                            </div>

                            <SmartLink
                                to="/os"
                                className="mt-auto inline-flex items-center gap-3 px-6 py-3 border border-white/10 text-white/80 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:text-[#D4AF37] transition-all duration-300 text-xs tracking-widest uppercase group"
                            >
                                Meet Vœrynth OS 5.0.1
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
                        <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-6">REAL Technical Proof</h2>
                        <p className="text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                            A smart home is only as robust as its routing layer. Below is the architectural foundation and executing YAML logic powering the Ayanthiara residence.
                        </p>
                    </div>

                    {/* F.1 Architecture Diagram */}
                    <div className="mb-24">
                        <h3 className="text-xl font-light text-white/90 mb-8 border-b border-white/10 pb-4 inline-block">Architecture Flow</h3>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                            {[
                                { title: "Devices & Signals", desc: "Sensors, Cameras, States", icon: Activity },
                                { title: "Home Assistant", desc: "Local State Machine & Core", icon: Server },
                                { title: "Automations", desc: "YAML Logic & Context Evaluation", icon: Cpu },
                                { title: "Output / Control", desc: "Lighting, Relays & Voice TTS", icon: Layers }
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
                        <h3 className="text-xl font-light text-white/90 mb-8 border-b border-white/10 pb-4 inline-block">Technical Datasheet</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Server size={14} /> Core Platform</h4>
                                <ul className="space-y-3 text-sm font-light text-white/70">
                                    <li>• Home Assistant (OS/Core)</li>
                                    <li>• Lovelace UI (Sections layout)</li>
                                    <li>• Automations in YAML</li>
                                    <li>• Local media + TTS playback</li>
                                    <li>• Wall tablet dashboard (kiosk-style)</li>
                                </ul>
                            </div>

                            <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 p-8 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Layers size={14} /> Vœrynth Stack</h4>
                                <ul className="space-y-4 text-sm font-light text-white/70">
                                    <li className="flex flex-col gap-1">
                                        <span className="text-white/90 font-normal text-xs tracking-wider uppercase">Reasoning Core (Neural Layer)</span>
                                        <span className="text-white/50 text-xs leading-relaxed">Proprietary AI engine — ingests live sensor data, evaluates context, and computes micro-automations on the fly. Zero YAML triggers required for contextual responses.</span>
                                    </li>
                                    <li className="flex flex-col gap-1 pt-2 border-t border-white/5">
                                        <span className="text-white/90 font-normal text-xs tracking-wider uppercase">Vœrynth OS 5.0.1 (Interface Layer)</span>
                                        <span className="text-white/50 text-xs leading-relaxed">Custom neural interface OS — bypassed in this beta environment; stress-tested directly against raw HA Lovelace for resilience validation.</span>
                                    </li>
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a href="/os" className="inline-flex items-center gap-1.5 text-[10px] tracking-widest text-[#C9A961] border border-[#D4AF37]/20 px-3 py-1.5 rounded hover:bg-[#D4AF37]/5 transition-colors">VIEW OS →</a>
                                    <a href="https://github.com/kiranvenom1209/voerynth-os" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] tracking-widest text-white/40 border border-white/10 px-3 py-1.5 rounded hover:text-white/70 hover:border-white/20 transition-colors">GITHUB →</a>
                                </div>
                            </div>

                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Layers size={14} /> UI / Custom Cards Used</h4>
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
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Cpu size={14} /> Devices</h4>
                                <ul className="space-y-3 text-sm font-light text-white/70">
                                    <li><strong className="text-white/90 font-normal">Lighting:</strong> Philips Hue (multiple rooms + scenes)</li>
                                    <li><strong className="text-white/90 font-normal">Presence:</strong> Aqara FP2 zones (living/dining) + camera person detection sensors</li>
                                    <li><strong className="text-white/90 font-normal">Cameras:</strong> TC71 streams (living + entrance) + additional cams</li>
                                    <li><strong className="text-white/90 font-normal">Lock:</strong> Matter-enabled main lock + door sensor + battery monitoring</li>
                                    <li><strong className="text-white/90 font-normal">Plugs:</strong> Tapo power strip/smart plugs (workstation, signage, etc.)</li>
                                    <li><strong className="text-white/90 font-normal">Entertainment:</strong> Android TV + remote integration</li>
                                    <li><strong className="text-white/90 font-normal">Personal:</strong> Phone + watch health metrics</li>
                                </ul>
                            </div>

                            <div className="bg-[#050505] border border-white/5 p-8 rounded-lg">
                                <h4 className="text-[#C9A961] text-xs tracking-widest uppercase mb-6 flex items-center gap-2"><Activity size={14} /> Protocols & Transport</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Zigbee (Hue ecosystem)', 'Matter (door lock)', 'Wi-Fi / LAN', 'RTSP/streaming', 'Local TTS output', 'Cloud TTS (optional quality loop)'].map((p, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/70 rounded">{p}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#0A0A0A] border-l-2 border-[#D4AF37] p-8 rounded-r-lg">
                                <h4 className="text-white/90 text-sm mb-4">Core Design Principles</h4>
                                <ul className="space-y-2 text-xs font-light text-white/60">
                                    <li>• Local-first behavior</li>
                                    <li>• Manual fallback always available</li>
                                    <li>• Automations drive daily life; dashboard refines it</li>
                                    <li>• Security logic is stateful + persistent while armed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* F.3 REAL AUTOMATION SNIPPETS */}
                    <div>
                        <h3 className="text-xl font-light text-white/90 mb-8 border-b border-white/10 pb-4 inline-block">Real Automation Examples</h3>
                        <p className="text-white/50 text-sm font-light mb-8">Shortened, clean case study versions of the YAML logic running the residence.</p>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-white/80 font-medium mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9A961] font-mono">1</span>
                                    Welcome Home (Unlock → Lights + "I am home" state)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automation"
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
                                    Intrusion Alarm Loop (Armed → Red Scenes + Warnings)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automation"
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
                                    Auto Arm / Auto Disarm (Phone presence tracker)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automation"
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
                                    Presence Simulation (When Away & Armed)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automation"
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
                                    Assistant Persona Switching (Ammu ↔ Mycroft)
                                </h4>
                                <CodeSnippet
                                    title="YAML Automation"
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
                    <h2 className="text-3xl font-light text-white/95 leading-relaxed mb-6">Unpacking the Live View</h2>
                    <p className="text-white/50 leading-loose text-sm mb-12 max-w-2xl mx-auto">
                        A highly customized `picture-elements` card renders the physical layout accurately and interactively.
                    </p>
                    <div className="text-left bg-[#0A0A0A] border border-white/10 p-8 rounded-lg">
                        <ul className="space-y-4 text-white/70 font-light text-sm">
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> The base floorplan is a static high-contrast image.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> "Glow layers" are PNG overlays segmented per lighting zone.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Overlays appear <em>only</em> if the corresponding entity state is ON.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Overlay opacity is dynamically mapped to the physical `brightness` attribute of the bulb.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#C9A961]">•</span> Color tint is approximated using `hs_color` passing into live CSS filters.
                            </li>
                            <li className="flex gap-4 pt-4 border-t border-white/5 text-white/90">
                                <span className="text-[#D4AF37]">→</span> <strong>Visuals are not decorative — they’re wired to real entity state.</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* H: WHY THIS MATTERS */}
            <Section className="py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-12">
                        Luxury automation isn’t more gadgets. <br />
                        <span className="text-[#C9A961]">It’s fewer decisions.</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center">
                            <Layers size={24} className="text-white/20 mx-auto mb-4" />
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                Routines reduce cognitive load<br /> (home should carry the weight).
                            </p>
                        </div>
                        <div className="text-center">
                            <Shield size={24} className="text-white/20 mx-auto mb-4" />
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                Safety is absolutely stateful<br /> (armed means armed — continuously).
                            </p>
                        </div>
                        <div className="text-center">
                            <Terminal size={24} className="text-white/20 mx-auto mb-4" />
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                Manual overrides exist<br /> because reality exists (Wi-Fi, guests, edge cases).
                            </p>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-white/80 font-light italic">
                        “Good automation is invisible. Great automation is still there when things get messy.”
                    </p>
                </div>
            </Section>

            {/* I: FAQ */}
            <Section className="py-24 bg-[#050505] border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-center text-white/95 mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {[
                            {
                                q: "Is the tablet required for operation?",
                                a: "No. Automations handle daily behavior; the tablet is strictly a refinement tool and dashboard."
                            },
                            {
                                q: "What happens if the internet dies?",
                                a: "Core functions remain robustly local (lighting, scenes, locks, presence logic). External embeds like news or radar maps may degrade gracefully."
                            },
                            {
                                q: "Can guests use it easily?",
                                a: "Yes — the UI is intentionally designed as a clean, room-based control deck with no learning curve required."
                            },
                            {
                                q: "Is this secure?",
                                a: "Security is completely state-driven (armed/disarmed) layered with camera detection, local alerts, and local audio announcements, preventing unexpected external bypasses."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="border-b border-white/10 pb-8 hover:bg-white/[0.01] p-4 -mx-4 rounded transition-colors">
                                <h4 className="text-white/90 font-medium mb-2 tracking-wide text-lg">Q: {faq.q}</h4>
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
                        Want this level of infrastructure in your residence?
                    </h2>
                    <p className="text-lg text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Vœrynth Système commissions private installations built for reliability, privacy, and long-term calm.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-20">
                        <SmartLink to="/contact" className="inline-flex justify-center items-center bg-[#D4AF37] text-black px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-medium whitespace-nowrap shadow-lg shadow-[#D4AF37]/10">
                            REQUEST A PRIVATE DEMO
                        </SmartLink>
                        <a href="#blueprints" className="inline-flex justify-center items-center border border-white/20 text-white/90 px-8 py-4 text-xs md:text-sm tracking-widest uppercase hover:border-white/60 hover:bg-white/[0.02] transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                            SEE THE AUTOMATION BLUEPRINTS
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
