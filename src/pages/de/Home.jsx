import { Link } from 'react-router-dom';
import SmartLink from '../../components/core/SmartLink';
import { m } from 'framer-motion';
import { Server, Activity, Cpu, Shield } from 'lucide-react';
import { Section, Card, Tag } from '../../components/ui';
import SEO from '../../components/core/SEO';

const logo = '/assets/logo/logo.svg';
const BRAND_NAME = "Vœrynth Système";

export default function DeHome() {
    return (
        <>
            <SEO
                title="Anwesen-Automatisierung & Steuerungssysteme"
                description="Architektur für Umgebungen, die keine Fehler erlauben. Vœrynth bietet deterministische Steuerungssysteme für private Anwesen, Superjachten und kritische Infrastruktur."
                keywords="Anwesen Automatisierung, Gebäudeautomation Luxus, Smart Home Steuerung, deterministische Steuerung, Hausautomation System"
            />

            {/* Hero */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/home_hero_bg_v2.webp"
                        alt="Interieur Ambiente"
                        className="w-full h-full object-cover opacity-60"
                        style={{ mixBlendMode: 'luminosity' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
                    <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.15) 100%)' }} />
                </div>

                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="z-10 max-w-4xl"
                >
                    <div className="flex flex-col items-center justify-center mb-4 mt-64 md:mt-64">
                        <img
                            src={logo}
                            alt={BRAND_NAME}
                            className="h-20 md:h-32 w-auto mb-6 opacity-95"
                            style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%)' }}
                        />
                        <h1 className="text-2xl md:text-5xl font-light tracking-[0.1em] text-white/95">{BRAND_NAME}</h1>
                    </div>

                    <p className="text-lg md:text-2xl text-white/65 font-light tracking-wide mb-4 leading-relaxed">
                        Ihr Anwesen, durchdacht erhöht.
                    </p>

                    <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                        Vœrynth Système ist ein modulares Intelligenz-Framework, das entwickelt wurde, um komplexe Umgebungen mit Weitsicht, Kontinuität und Zurückhaltung zu steuern – von der Gebäudeautomation bis hin zu hochverfügbaren Kontrollsystemen.
                    </p>

                    <div className="flex justify-center gap-4 mb-16 flex-wrap">
                        <Tag text="Local-First" />
                        <Tag text="Zero-Cloud Optional" />
                        <Tag text="Deterministische Logik" />
                        <Tag text="Adaptive Intelligenz" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <SmartLink
                            to="/de/contact"
                            className="bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 w-full md:w-auto font-medium shadow-lg shadow-[#D4AF37]/10"
                        >
                            PRIVATE DEMO ANFRAGEN
                        </SmartLink>
                        <SmartLink
                            to="/de/platform"
                            className="border border-white/15 text-white/90 px-8 py-3 text-sm tracking-widest hover:border-[#D4AF37]/40 hover:bg-white/[0.03] transition-all duration-200 w-full md:w-auto backdrop-blur-sm"
                        >
                            PLATTFORM ERKUNDEN
                        </SmartLink>
                    </div>

                    <div className="mt-20 border-t border-[#D4AF37]/10 pt-8 inline-block">
                        <p className="text-[10px] text-white/25 tracking-widest uppercase leading-relaxed">
                            Kein Hype. Kein Lärm. Nur Systeme, die nicht versagen, wenn es darauf ankommt.
                        </p>
                    </div>
                </m.div>
            </section>

            {/* Was ist Vœrynth */}
            <Section className="border-t border-white/5" id="plattform">
                <div className="grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-light mb-8">Was {BRAND_NAME} ist</h2>
                        <p className="text-white/50 leading-loose text-sm">
                            {BRAND_NAME} ist kein einzelnes Produkt. Es ist ein Systemrahmen – eine Steuerungssprache, die als Plattform, Interface oder vollständiger Automatisierungsstack auftreten kann. Die Marke bleibt konstant; die Form passt sich der Umgebung an.
                        </p>
                    </div>
                    <div className="md:col-span-8 grid md:grid-cols-2 gap-8 md:gap-6">
                        <SmartLink to="/de/systeme" className="block h-full">
                            <Card
                                title="Système"
                                description="Das ingenieurtechnische Fundament – Architektur, Verlässlichkeit, deterministische Orchestrierung."
                                icon={Server}
                                delay={0.1}
                                bgImage="/assets/home_card_systeme_v2.webp"
                            />
                        </SmartLink>
                        <SmartLink to="/de/os" className="block h-full">
                            <Card
                                title="OS"
                                description="Die menschliche Schnittstelle – eine Steuerungsebene für Klarheit und Zurückhaltung."
                                icon={Activity}
                                delay={0.2}
                                bgImage="/assets/home_card_os_v2.webp"
                            />
                        </SmartLink>
                        <SmartLink to="/de/automations" className="block h-full">
                            <Card
                                title="Automatisierungen"
                                description="Integration und Deployment über physische Systeme und Umgebungen hinweg."
                                icon={Cpu}
                                delay={0.3}
                                bgImage="/assets/home_card_auto_v2.webp"
                            />
                        </SmartLink>
                    </div>
                </div>
            </Section>

            {/* Eisberg-Architektur */}
            <section className="bg-gradient-to-b from-[#080808] to-[#0A0A0A] border-y border-[#D4AF37]/10 py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, rgba(212,175,55,0) 70%)' }} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-light mb-8 leading-relaxed">Die Eisberg-Architektur</h2>
                        <p className="text-white/40 leading-loose text-sm mb-12 max-w-2xl mx-auto">
                            Die meisten Systeme zeigen ein Dashboard und nennen es Intelligenz. {BRAND_NAME} ist wie eine echte Maschine aufgebaut – geschichtet, entkoppelt und ausfallsicher.
                        </p>

                        <div className="space-y-4 text-sm font-light max-w-xl mx-auto mb-16">
                            {[
                                { label: "Hard Metal", color: "text-white/25" },
                                { label: "Translation Core", color: "text-white/35" },
                                { label: "State Engine", color: "text-white/50" },
                                { label: "Reasoning Core", color: "text-white/70" },
                                { label: "Vœrynth Interface", color: "text-[#C9A961]" },
                            ].map((layer, i) => (
                                <div key={i} className="flex items-center justify-center gap-4">
                                    <div className={`${layer.color} text-xs tracking-widest uppercase`}>{layer.label}</div>
                                </div>
                            ))}
                        </div>

                        <SmartLink
                            to="/de/platform"
                            className="inline-block border border-[#D4AF37]/30 text-[#C9A961] px-8 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-200"
                        >
                            PLATTFORM-ARCHITEKTUR ANSEHEN
                        </SmartLink>
                    </m.div>
                </div>
            </section>

            {/* Wo Vœrynth wirkt */}
            <Section>
                <h2 className="text-3xl font-light mb-16 text-center leading-relaxed">Wo {BRAND_NAME} wirkt</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "Private Anwesen", link: "/de/private-estates" },
                        { title: "Penthäuser", link: "/de/penthouses" },
                        { title: "Superjachten", link: "/de/superyachts" },
                        { title: "Industrielle Suiten", link: "/de/industrial-suites" },
                        { title: "Sicherheit & Überwachung", link: "/de/security" },
                        { title: "Energieorchestrierung", link: "/de/energy" }
                    ].map((item, idx) => (
                        <SmartLink to={item.link} key={idx} className="block h-full">
                            <m.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.2 }}
                                className="p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/20 hover:bg-white/[0.015] transition-all duration-200 text-center h-full flex items-center justify-center cursor-pointer"
                            >
                                <h3 className="text-base font-normal text-white/90 leading-relaxed">{item.title}</h3>
                            </m.div>
                        </SmartLink>
                    ))}
                </div>
                <div className="text-center">
                    <SmartLink
                        to="/de/solutions"
                        className="inline-block border border-[#D4AF37]/30 text-[#C9A961] px-8 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-200"
                    >
                        ALLE LÖSUNGEN ENTDECKEN
                    </SmartLink>
                </div>
            </Section>

            {/* Investitions-CTA */}
            <Section className="border-t border-white/5 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">Ein durchdachter Ansatz zur Investition</h2>
                    <p className="text-white/50 leading-loose text-sm font-light mb-8 max-w-2xl mx-auto">
                        Jedes {BRAND_NAME}-System wird für seine Umgebung entworfen. <br />
                        Die Investition spiegelt Umfang, Verantwortung und Langlebigkeit wider – keine Feature-Listen.
                    </p>
                    <SmartLink
                        to="/de/pricing"
                        className="text-[#C9A961] hover:text-white transition-colors duration-200 text-sm tracking-wide border-b border-[#C9A961]/30 pb-1"
                    >
                        Investitionsrahmen ansehen →
                    </SmartLink>
                </div>
            </Section>

            {/* Sicherheits-Teaser */}
            <Section className="mb-24">
                <div className="bg-gradient-to-br from-[#0D0D0D] to-[#0A0A0A] border border-[#D4AF37]/15 p-12 relative overflow-hidden shadow-2xl text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 70%)' }} />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6 text-[#C9A961]/80">
                            <Shield size={20} strokeWidth={1.25} />
                            <span className="text-xs tracking-widest uppercase">Sicherheit & Privatsphäre</span>
                        </div>
                        <h2 className="text-3xl font-light mb-6 leading-relaxed">
                            Privatsphäre ist keine Einstellung. <br />Sie ist der Standard.
                        </h2>
                        <SmartLink
                            to="/de/security"
                            className="inline-block border border-[#D4AF37]/30 text-[#C9A961] px-8 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-200"
                        >
                            SICHERHEIT & PRIVATSPHÄRE
                        </SmartLink>
                    </div>
                </div>
            </Section>

            {/* Bottom CTA */}
            <section className="py-24 border-t border-[#D4AF37]/10 bg-gradient-to-b from-[#0A0A0A] to-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-light text-white/95 mb-12 leading-relaxed">
                        Erwägen Sie ein {BRAND_NAME}-System für Ihr Anwesen?
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <SmartLink
                            to="/de/contact"
                            className="bg-[#D4AF37] text-black px-8 py-4 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium rounded shadow-lg shadow-[#D4AF37]/10 w-full md:w-auto"
                        >
                            PRIVATE DEMO ANFRAGEN
                        </SmartLink>
                        <SmartLink
                            to="/de/pricing"
                            className="text-white/60 hover:text-[#C9A961] transition-colors duration-200 text-sm tracking-widest px-8 py-4"
                        >
                            PREISE ANSEHEN
                        </SmartLink>
                    </div>
                </div>
            </section>

            {/* Private Access subtle link */}
            <div className="flex justify-center pb-8 pt-4">
                <SmartLink
                    to="/de/private-access"
                    className="text-[10px] text-white/20 tracking-wider hover:text-white/40 transition-colors duration-200 font-light"
                >
                    Vœrynth wird privat entwickelt. Strategische Gespräche sind willkommen.
                </SmartLink>
            </div>
        </>
    );
}
