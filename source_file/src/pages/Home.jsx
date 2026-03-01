import { Link } from 'react-router-dom';
import SmartLink from '../components/core/SmartLink';
import { motion } from 'framer-motion';
import { Server, Activity, Cpu, Shield } from 'lucide-react';
import { Section, Card, Tag, Hero } from '../components/ui';
const logo = '/assets/logo/logo.svg';

const BRAND_NAME = "Vœrynth Système";

import SEO from '../components/core/SEO';

export default function Home() {
    return (
        <>
            <SEO
                title="Estate Automation & Control Systems"
                description="Architecture built for environments that cannot afford drama. Vœrynth provides deterministic control systems for private estates, superyachts, and critical infrastructure."
                keywords="estate automation, luxury home automation, smart home control, deterministic control, home automation system, smart home technology, best home automation"
                canonical="/"
            />
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                {/* Hero Background Image with warm treatment */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/home_hero_bg.webp"
                        alt="Interior Ambiance"
                        className="w-full h-full object-cover opacity-50 saturate-[0.9] sepia-[0.05] brightness-90"
                        style={{ filter: 'saturate(0.9) sepia(0.05) brightness(0.9) contrast(1.05) hue-rotate(5deg)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
                    {/* Soft vignette */}
                    <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.15) 100%)' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
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
                        Your Estate, <span className="text-[#C9A961]">Thoughtfully Elevated.</span>
                    </p>

                    <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                        {BRAND_NAME} is a modular intelligence framework designed to govern complex environments with foresight, continuity, and restraint - from estate automation to high-availability control systems.
                    </p>

                    <div className="flex justify-center gap-4 mb-16 flex-wrap">
                        <Tag text="Local-First" />
                        <Tag text="Zero-Cloud Optional" />
                        <Tag text="Deterministic Logic" />
                        <Tag text="Adaptive Intelligence" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <SmartLink to="/contact" className="bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-700 w-full md:w-auto font-medium shadow-lg shadow-[#D4AF37]/10">
                            REQUEST PRIVATE DEMO
                        </SmartLink>
                        <SmartLink to="/platform" className="border border-white/15 text-white/90 px-8 py-3 text-sm tracking-widest hover:border-[#D4AF37]/40 hover:bg-white/[0.03] transition-all duration-700 w-full md:w-auto backdrop-blur-sm">
                            EXPLORE THE PLATFORM
                        </SmartLink>
                    </div>

                    <div className="mt-20 border-t border-[#D4AF37]/10 pt-8 inline-block">
                        <p className="text-[10px] text-white/25 tracking-widest uppercase leading-relaxed">
                            No hype. No noise. Just systems that don&apos;t fail when it matters.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* What is Vœrynth */}
            <Section className="border-t border-white/5" id="platform">
                <div className="grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-light mb-8">What {BRAND_NAME} Is</h2>
                        <p className="text-white/50 leading-loose text-sm">
                            {BRAND_NAME} is not a single product. It is a house name - a system language that can manifest as a platform, an interface, or a full automation stack. The brand remains constant; the form adapts to the domain.
                        </p>
                    </div>
                    <div className="md:col-span-8 grid md:grid-cols-2 gap-8 md:gap-6">
                        <SmartLink to="/systeme" className="block h-full">
                            <Card
                                title="Système"
                                description="The engineering foundation - architecture, reliability, deterministic orchestration."
                                icon={Server}
                                delay={0.1}
                                bgImage="/assets/home_card_systeme.webp"
                            />
                        </SmartLink>
                        <SmartLink to="/os" className="block h-full">
                            <Card
                                title="OS"
                                description="The human interface - a neural-style control layer built for clarity and restraint."
                                icon={Activity}
                                delay={0.2}
                                bgImage="/assets/home_card_os.webp"
                            />
                        </SmartLink>
                        <SmartLink to="/automations" className="block h-full">
                            <Card
                                title="Automations"
                                description="Integration and deployment across physical systems and environments."
                                icon={Cpu}
                                delay={0.3}
                                bgImage="/assets/home_card_auto.webp"
                            />
                        </SmartLink>
                    </div>
                </div>
            </Section>

            {/* Iceberg Architecture Teaser */}
            <section className="bg-gradient-to-b from-[#080808] to-[#0A0A0A] border-y border-[#D4AF37]/10 py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.015] rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-light mb-8 leading-relaxed">The Iceberg Architecture</h2>
                        <p className="text-white/40 leading-loose text-sm mb-12 max-w-2xl mx-auto">
                            Most systems show you a dashboard and call it intelligence. {BRAND_NAME} is built like a real machine - layered, separated, and failure-tolerant.
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
                            to="/platform"
                            className="inline-block border border-[#D4AF37]/30 text-[#C9A961] px-8 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-700"
                        >
                            VIEW PLATFORM ARCHITECTURE
                        </SmartLink>
                    </motion.div>
                </div>
            </section>

            {/* Where Vœrynth Belongs - Teaser */}
            <Section>
                <h2 className="text-3xl font-light mb-16 text-center leading-relaxed">Where {BRAND_NAME} Belongs</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "Private Estates", link: "/private-estates" },
                        { title: "Penthouses", link: "/penthouses" },
                        { title: "Superyachts", link: "/superyachts" },
                        { title: "Industrial Suites", link: "/industrial-suites" },
                        { title: "Security & Surveillance", link: "/security" },
                        { title: "Energy Orchestration", link: "/energy" }
                    ].map((item, idx) => (
                        <SmartLink to={item.link} key={idx} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.9 }}
                                className="p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/20 hover:bg-white/[0.015] transition-all duration-700 text-center h-full flex items-center justify-center cursor-pointer"
                            >
                                <h3 className="text-base font-normal text-white/90 leading-relaxed">{item.title}</h3>
                            </motion.div>
                        </SmartLink>
                    ))}
                </div>
                <div className="text-center">
                    <SmartLink
                        to="/solutions"
                        className="inline-block border border-[#D4AF37]/30 text-[#C9A961] px-8 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-700"
                    >
                        EXPLORE SOLUTIONS
                    </SmartLink>
                </div>
            </Section>

            {/* Mid-Page Pricing CTA */}
            <Section className="border-t border-white/5 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/95 mb-6 leading-relaxed">A Considered Approach to Investment</h2>
                    <p className="text-white/50 leading-loose text-sm font-light mb-8 max-w-2xl mx-auto">
                        Every {BRAND_NAME} system is designed around its environment. <br />
                        Pricing reflects scope, responsibility, and longevity - not feature lists.
                    </p>
                    <SmartLink
                        to="/pricing"
                        className="text-[#C9A961] hover:text-white transition-colors duration-500 text-sm tracking-wide border-b border-[#C9A961]/30 pb-1"
                    >
                        View Pricing Approach →
                    </SmartLink>
                </div>
            </Section>

            {/* Security Teaser */}
            <Section className="mb-24">
                <div className="bg-gradient-to-br from-[#0D0D0D] to-[#0A0A0A] border border-[#D4AF37]/15 p-12 relative overflow-hidden shadow-2xl text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6 text-[#C9A961]/80">
                            <Shield size={20} strokeWidth={1.25} />
                            <span className="text-xs tracking-widest uppercase">Security & Privacy</span>
                        </div>
                        <h2 className="text-3xl font-light mb-6 leading-relaxed">Privacy Is Not a Setting. <br />It&apos;s the Default.</h2>
                        <SmartLink
                            to="/security"
                            className="inline-block border border-[#D4AF37]/30 text-[#C9A961] px-8 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-700"
                        >
                            SECURITY & PRIVACY
                        </SmartLink>
                    </div>
                </div>
            </Section>

            {/* Bottom CTA Band */}
            <section className="py-24 border-t border-[#D4AF37]/10 bg-gradient-to-b from-[#0A0A0A] to-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-light text-white/95 mb-12 lead-relaxed">Considering a {BRAND_NAME} system for your estate?</h2>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <SmartLink
                            to="/contact"
                            className="bg-[#D4AF37] text-black px-8 py-4 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-700 font-medium rounded shadow-lg shadow-[#D4AF37]/10 w-full md:w-auto"
                        >
                            REQUEST A PRIVATE DEMO
                        </SmartLink>
                        <SmartLink
                            to="/pricing"
                            className="text-white/60 hover:text-[#C9A961] transition-colors duration-500 text-sm tracking-widest px-8 py-4"
                        >
                            VIEW PRICING
                        </SmartLink>
                    </div>
                </div>
            </section >
            {/* Private Access Subtle Link */}
            <div className="flex justify-center pb-8 pt-4">
                <SmartLink
                    to="/private-access"
                    className="text-[10px] text-white/20 tracking-wider hover:text-white/40 transition-colors duration-500 font-light"
                >
                    Vœrynth is privately developed. Strategic conversations are welcomed.
                </SmartLink>
            </div>
        </>
    );
}
