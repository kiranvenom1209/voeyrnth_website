import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Cpu, Server, Layers, Home, Eye, Lock, Moon, Music, Zap, CheckCircle2, ChevronRight, Anchor, Building2, Battery, RefreshCw, Tablet, Smartphone } from 'lucide-react';
import { Hero, Section } from '../components/ui';
import SEO from '../components/core/SEO';

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

export default function OS() {
    return (
        <>
            <SEO
                title="Vœrynth OS 5.0.1 - Neural Interface"
                description="A human interface layer built for clarity and restraint. Not another dashboard—a command deck for estates and superyachts."
                keywords="voerynth os, human interface, control panel, smart home os, neural interface"
                canonical="/os"
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
                                Luxury is silence <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">that obeys.</span>
                            </h1>
                            <div className="text-white/50 text-base leading-loose font-light space-y-6 max-w-2xl mx-auto lg:mx-0">
                                <p>
                                    Vœrynth OS 5.0.1 is a local-first Neural Interface built for estates and superyachts — where reliability matters more than “smart gadgets.”
                                </p>
                                <p>
                                    It’s designed for owners and staff: clear status, fast control, and calm operations, even when the internet is irrelevant.
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
                                    View on GitHub
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
                title="Not another dashboard—"
                subtitle="a command deck."
                description="Vœrynth OS is built to reduce decision-fatigue. It surfaces only what matters—presence, climate, security, energy, and modes—so owners and staff act fast without hunting through apps."
                items={[
                    "Local-first, always — core control works on the LAN, not on hope",
                    "Real-time response — instant feedback, no cloud round-trips",
                    "Clarity over clutter — the right signals, not a wall of toggles",
                    "Role-ready UI — owner view, staff view, engineering view (without chaos)"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_29_48.png"
                icon={Layers}
            />

            {/* Room Control (Chambers) */}
            <FeatureBlock
                title="Room control, unified."
                subtitle="Chambers"
                description="Chambers puts lighting, climate, and scenes for every space in one disciplined layout—fast to read, faster to act. It doesn't fight the interiors; it supports them. The technology stays behind the curtain, and what you feel is calm."
                items={[
                    "Ambience-first — lighting and climate tuned like a hotel suite",
                    "Scenes, not switches — “Evening”, “Hosting”, “Night”, “Away” in one tap",
                    "Staff-ready — simple, safe controls without exposing complexity",
                    "Always composed — the system feels quiet even when it’s doing a lot"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_00.png"
                reverse={true}
                icon={Home}
            />

            {/* Security */}
            <FeatureBlock
                title="Quiet vigilance."
                subtitle="Security is a system, not a panic button."
                description="Vœrynth OS brings cameras, access, and perimeter signals into a single, disciplined view—so owners and staff can understand what’s happening in seconds and act without guesswork. Live feeds are prioritized by relevance, and critical events surface immediately."
                items={[
                    "Live feeds prioritized by relevance",
                    "Lock states, zones, and alerts stay consistent",
                    "Daily “all clear” stays unobtrusive",
                    "Role-safe views across owner, crew, and engineering levels"
                ]}
                image="/assets/os/Security.png"
                icon={Shield}
            />

            {/* Resilience / Energy */}
            <FeatureBlock
                title="Resilience is the new luxury."
                subtitle="Energy isn't a statistic—it's continuity."
                description="Vœrynth OS monitors the heartbeat of your estate, keeps critical systems visible, and makes power events boring. When the grid wobbles, your home doesn’t."
                items={[
                    "Live flow — grid / solar / battery at a glance",
                    "Critical-load awareness — what matters stays protected",
                    "Efficiency, not obsession — patterns you can actually act on",
                    "Outage-ready visibility — status before panic"
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
                        <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-6">Built for motion. Trusted at sea.</h2>
                        <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                            Vœrynth OS brings estate-grade reliability to premium environments where uptime is non-negotiable.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Yacht/Marine */}
                        <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-lg hover:border-white/10 transition-colors">
                            <Anchor className="text-[#C9A961] mb-8 opacity-80" size={32} />
                            <h3 className="text-xl text-white/90 font-light mb-4">Command at sea</h3>
                            <p className="text-white/50 text-sm leading-loose font-light mb-8">
                                On a yacht, the cloud is a luxury you don’t always have. Vœrynth reads vessel signals through NMEA 2000 and Signal K, turning raw telemetry into safety-aware context. Offline behaviour is first-class.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Modes for life onboard: Docked, Underway, Night",
                                    "Real-time holding tanks, climate, and energy",
                                    "Zero cloud dependency"
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
                            <h3 className="text-xl text-white/90 font-light mb-4">A workplace that anticipates</h3>
                            <p className="text-white/50 text-sm leading-loose font-light mb-8">
                                For premium workplaces where meetings can’t be interrupted by “apps,” and facilities can’t depend on the internet. Real-time control, clear status, and role-safe access for reception, IT, and facility teams.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Meeting modes: Boardroom, Presentation, After Hours",
                                    "Role-safe access: Reception vs IT",
                                    "Local-first uptime for facility managers"
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
                title="Secure updates. Zero leakage."
                subtitle="The Updater"
                description="Vœrynth OS pulls updates inbound only—your estate never uploads operational data to any cloud. Only Vœrynth-tested firmware is delivered, so reliability stays intact and “random vendor surprises” don’t enter your system."
                items={[
                    "Vœrynth-tested firmware only",
                    "If Auto-Update is enabled, the local LLM schedules updates during the quietest window",
                    "Never gossips outside the house"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_42.png"
                icon={RefreshCw}
            />

            {/* Advanced Engineering / Telemetry */}
            <FeatureBlock
                title="Quiet power, measured."
                subtitle="Engineering Views"
                description="Vœrynth OS keeps the estate’s nervous system visible without turning it into a control-room circus. In one glance, owners and engineers can confirm the backbone is healthy—compute headroom, memory margin, and network throughput."
                items={[
                    "Predictable performance when the house is busy",
                    "Fewer mysteries, faster diagnosis",
                    "System stays composed even under heavy load"
                ]}
                image="/assets/os/tablet/screencapture-192-168-153-1-5173-2026-03-02-11_30_54.png"
                reverse={true}
                icon={Activity}
            />

            {/* Tablet Experience */}
            <Section className="py-32 bg-[#0A0A0A] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <Tablet className="text-[#C9A961] mb-6 opacity-80 mx-auto" size={32} />
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-4">The Setup & Wall Display</h2>
                    <p className="text-white/50 text-base leading-loose font-light max-w-2xl mx-auto">
                        Precision engineering for dedicated control surfaces. Whether initiating standard commissioning or commanding a suite via a wall-mounted tablet, the OS adapts to horizontal dominance without compromising its minimalist discipline.
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
                    <h2 className="text-3xl lg:text-4xl font-light text-white/95 leading-relaxed mb-4">Command in the palm of your hand.</h2>
                    <p className="text-white/50 text-base leading-loose font-light max-w-2xl mx-auto">
                        The same disciplined luxury and real-time control, perfectly scaled for mobile. No hunting through settings—just immediate authority over your estate from anywhere in the world.
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
                        <h2 className="text-2xl text-white/90 font-light mb-6">Keyed to your estate.</h2>
                        <p className="text-white/50 text-base leading-loose font-light max-w-2xl mx-auto mb-10">
                            Vœrynth OS isn’t an app you “set up.” It’s a system that’s commissioned. Each deployment is keyed to its hardware and signed components, so it can’t be cloned, exported, or casually replicated.
                        </p>

                        <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent">
                            <div className="bg-[#050505] px-12 py-6">
                                <p className="text-[#C9A961] text-lg font-light tracking-wide">
                                    Luxury, made reliable.
                                </p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </Section>
        </>
    );
}
