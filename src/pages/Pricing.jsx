// React import removed
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero, Section } from '../components/ui';

import SEO from '../components/core/SEO';

export default function Pricing() {
    return (
        <>
            <SEO
                title="Pricing Strategy"
                description="Transparent, scope-based pricing for architecture, integration, and ongoing stewardship. No fixed packages, no hidden costs."
                keywords="transparent pricing, automation cost, estate integration, system pricing"
                canonical="/pricing"
            />
            {/* Hero Section */}
            <Hero
                className="pt-28"
                title="Pricing"
                subtitle="Considered systems are never off-the-shelf."
                body="Every Vœrynth system is designed around the environment it serves. Pricing reflects scope, complexity, and long-term responsibility - not feature bundles."
                bgImage="/assets/pricing_hero_bg_v2.webp"
            >
                <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-20">
                    We do not offer fixed packages. <br />
                    We offer considered systems.
                </p>
            </Hero>

            {/* How Pricing Works */}
            <Section className="border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-light text-white/90 mb-8 leading-relaxed">How Pricing Works</h2>
                    <p className="text-white/50 leading-loose text-base font-light mb-8">
                        Vœrynth pricing is based on three primary factors:
                    </p>
                    <ul className="space-y-4 text-white/70 font-light mb-12 text-left md:text-center max-w-xl mx-auto">
                        <li className="flex items-center gap-3 md:justify-center">
                            <span className="w-1.5 h-1.5 bg-[#C9A961]/50 rounded-full"></span>
                            The scale and nature of the environment
                        </li>
                        <li className="flex items-center gap-3 md:justify-center">
                            <span className="w-1.5 h-1.5 bg-[#C9A961]/50 rounded-full"></span>
                            The level of integration and reliability required
                        </li>
                        <li className="flex items-center gap-3 md:justify-center">
                            <span className="w-1.5 h-1.5 bg-[#C9A961]/50 rounded-full"></span>
                            The desired longevity and operational model
                        </li>
                    </ul>
                    <p className="text-white/40 leading-loose text-sm font-light">
                        Each project begins with a private consultation to understand intent, constraints, and expectations. From there, a tailored scope is defined. <br /><br />
                        No surprises. No hidden costs. No unnecessary complexity.
                    </p>
                </div>
            </Section>

            {/* Engagement Models */}
            <Section>
                <h2 className="text-2xl font-light text-white/90 mb-12 text-center leading-relaxed">Engagement Models</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Design & Architecture */}
                    <div className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200">
                        <h3 className="text-lg text-[#C9A961] mb-2 tracking-wide">Design & Architecture</h3>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-6">For new builds or major renovations.</p>
                        <ul className="space-y-3 text-white/60 text-sm font-light leading-relaxed mb-8">
                            <li>System architecture and layering</li>
                            <li>Integration planning</li>
                            <li>Technology selection</li>
                            <li>Documentation and handover</li>
                        </ul>
                        <p className="text-white/40 text-xs italic">Engagement begins from the design phase.</p>
                    </div>

                    {/* Deployment & Integration */}
                    <div className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200">
                        <h3 className="text-lg text-[#C9A961] mb-2 tracking-wide">Deployment & Integration</h3>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-6">For existing estates or environments.</p>
                        <ul className="space-y-3 text-white/60 text-sm font-light leading-relaxed mb-8">
                            <li>On-site system integration</li>
                            <li>Automation logic and orchestration</li>
                            <li>Interface configuration</li>
                            <li>Reliability and failover design</li>
                        </ul>
                        <p className="text-white/40 text-xs italic">Executed with minimal disruption.</p>
                    </div>

                    {/* Ongoing Stewardship */}
                    <div className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200">
                        <h3 className="text-lg text-[#C9A961] mb-2 tracking-wide">Ongoing Stewardship</h3>
                        <p className="text-white/30 text-xs tracking-widest uppercase mb-6">For long-term continuity.</p>
                        <ul className="space-y-3 text-white/60 text-sm font-light leading-relaxed mb-8">
                            <li>System monitoring</li>
                            <li>Controlled updates</li>
                            <li>Periodic reviews</li>
                            <li>Priority support</li>
                        </ul>
                        <p className="text-white/40 text-xs italic">Optional, but recommended.</p>
                    </div>
                </div>
            </Section>

            {/* Typical Investment Ranges */}
            <Section className="bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D] border-y border-[#D4AF37]/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-light text-white/90 mb-4 text-center leading-relaxed">Typical Investment Ranges</h2>
                    <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-12">(These are indicative, not binding.)</p>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
                            <span className="text-white/70 font-light text-lg">Private Residences & Penthouses</span>
                            <span className="text-[#C9A961] text-xl font-light mt-2 md:mt-0">€25,000 – €75,000+</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
                            <span className="text-white/70 font-light text-lg">Large Estates & Compounds</span>
                            <span className="text-[#C9A961] text-xl font-light mt-2 md:mt-0">€75,000 – €250,000+</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
                            <span className="text-white/70 font-light text-lg">Yachts & Mobile Environments</span>
                            <span className="text-[#C9A961] text-xl font-light mt-2 md:mt-0">€50,000 – €150,000+</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <span className="text-white/70 font-light text-lg">Specialized or Industrial Environments</span>
                            <span className="text-white/40 text-lg font-light mt-2 md:mt-0 italic">By assessment</span>
                        </div>
                    </div>
                    <p className="text-center text-white/30 text-xs mt-12 font-light">Final scope and investment are determined after consultation.</p>
                </div>
            </Section>

            {/* Included & Not Included */}
            <Section>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Includes Card */}
                    <div className="p-10 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200 flex flex-col h-full">
                        <div className="flex-1">
                            <h2 className="text-xl font-light text-white/95 mb-8 leading-relaxed text-center">What Pricing Includes</h2>
                            <ul className="space-y-4 text-white/70 font-light text-sm leading-loose">
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                    <span>System architecture and design</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                    <span>Integration logic and orchestration</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                    <span>Interface configuration</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                    <span>Documentation and auditability</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                    <span>Deployment oversight</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#C9A961] mt-1.5 text-xs shrink-0">●</span>
                                    <span>Post-deployment validation</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-white/30 text-xs mt-8 italic text-center border-t border-white/5 pt-6">We prioritise clarity, reliability, and long-term maintainability.</p>
                    </div>

                    {/* Don't Do Card */}
                    <div className="p-10 border border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-200 flex flex-col h-full">
                        <div className="flex-1">
                            <h2 className="text-xl font-light text-white/95 mb-8 leading-relaxed text-center">What We Don&apos;t Do</h2>
                            <ul className="space-y-4 text-white/70 font-light text-sm leading-loose">
                                <li className="flex gap-4 items-start">
                                    <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                    <span className="opacity-80">No off-the-shelf packages</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                    <span className="opacity-80">No feature-based pricing</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                    <span className="opacity-80">No rushed installations</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                    <span className="opacity-80">No unnecessary cloud dependencies</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-white/20 mt-1.5 text-xs shrink-0">✕</span>
                                    <span className="opacity-80">No &quot;set and forget&quot; systems</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-white/30 text-xs mt-8 italic text-center border-t border-white/5 pt-6">Every system is expected to endure.</p>
                    </div>
                </div>
            </Section>

            {/* Closing CTA */}
            <Section className="mb-12">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-white/80 font-light mb-8 leading-relaxed">
                        Vœrynth is not priced to be accessible to everyone. <br />
                        It is priced to be responsible to those who expect permanence.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#D4AF37] text-black px-8 py-3 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium rounded shadow-lg shadow-[#D4AF37]/10 mb-6"
                    >
                        REQUEST A PRIVATE CONSULTATION
                    </Link>
                    <p className="text-white/30 text-xs tracking-wide">
                        We respond personally. No sales calls. No pressure.
                    </p>
                </div>
            </Section>
        </>
    );
}
