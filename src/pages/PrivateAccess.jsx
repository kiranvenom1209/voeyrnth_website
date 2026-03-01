import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Hero, Section } from '../components/ui';
import SEO from '../components/core/SEO';
import SuccessModal from '../components/core/SuccessModal';

export default function PrivateAccess() {
    const [formState, setFormState] = useState({
        name: '',
        organization: '',
        email: '',
        interest: 'Strategic',
        message: ''
    });
    const [interestOpen, setInterestOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "private-access", ...formState })
        })
            .then(async () => {
                setShowSuccess(true);
                setFormState({ name: '', organization: '', email: '', interest: 'Strategic', message: '' });
            })
            .catch(error => alert("Secure Handshake Failed. Please retry."));
    };

    return (
        <>
            <SEO
                title="Strategic Capital & Private Access"
                description="Information for strategic investors and technical collaborators. Vœrynth is not a public offering."
                keywords="strategic capital, private investment, voerynth partners, family office investment"
                canonical="/private-access"
            />
            <Hero
                title="Strategic Capital"
                subtitle="For those who build quietly."
                bgImage="/assets/private_access_hero_v2.webp"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">
                        Vœrynth is not a product launched at scale. It is a system grown deliberately.
                    </p>
                    <p className="mb-4">
                        We are at an early stage - by design. Not because we lack ambition, but because restraint is part of our philosophy.
                    </p>
                    <p>
                        This page exists for individuals and institutions who recognize that some systems should mature before they expand.
                    </p>
                </div>
            </Hero>

            {/* What Vœrynth Is Building */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">What Vœrynth Is Building</h2>
                        <p className="text-white/50 leading-loose text-base font-light mb-8">
                            Vœrynth is developing a private-grade infrastructure and control ecosystem for environments where failure, noise, and dependency are unacceptable.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-white/80 font-normal mb-4">Focus Areas</h3>
                                <ul className="space-y-3">
                                    {[
                                        "High-value private estates",
                                        "Penthouses and complex residential structures",
                                        "Superyachts and mobile environments",
                                        "Industrial and technical facilities",
                                        "Energy and security orchestration"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-sm font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white/80 font-normal mb-4">Why We Are Selective</h3>
                                <p className="text-white/50 leading-loose text-sm font-light mb-4">
                                    Growth is not our constraint. Integrity is our priority. We choose:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Fewer deployments, executed properly",
                                        "Long-term relationships over rapid expansion",
                                        "Capital that understands patience and systems thinking"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-sm font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-white/60 text-lg font-light italic border-l border-[#C9A961]/30 pl-6 py-2">
                            Vœrynth is designed to outlast trends - not chase them.
                        </p>
                    </m.div>
                </div>
            </Section>

            {/* Mid-page image: Detail */}
            <div className="w-full h-[60vh] relative overflow-hidden my-12">
                <img
                    src="/assets/private_access_detail_v2.webp"
                    alt="Private Access Detail"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/20" />
            </div>

            {/* Strategic Partners */}
            <Section className="bg-[#0D0D0D] border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">What We Are Open To</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <p className="text-white/50 leading-loose text-base font-light mb-6">
                                    We are currently open to:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Strategic investors",
                                        "Family offices",
                                        "Long-term partners with aligned values",
                                        "Technical or industrial collaborators"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-white/40 text-sm italic">
                                    We are not conducting public fundraising.
                                </p>
                            </div>
                            <div>
                                <p className="text-white/50 leading-loose text-base font-light mb-6">
                                    We look for partners who understand:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Infrastructure over interfaces",
                                        "Quiet reliability over visible spectacle",
                                        "Long-term ownership over short-term exit"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-white/50 leading-relaxed text-base font-light">
                                            <span className="text-[#C9A961]/50 mt-1.5 text-[10px]">■</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </m.div>
                </div>
            </Section>

            {/* Request Private Access Form */}
            <Section className="border-t border-[#D4AF37]/10" id="contact">
                <div className="max-w-xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-2xl font-light text-white/95 mb-2 leading-relaxed text-center">Request a Private Conversation</h2>
                        <p className="text-white/40 text-center text-sm mb-12 font-light">
                            Submissions are reviewed selectively. Not all requests receive a response.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                            name="private-access"
                            method="POST"
                            data-netlify="true"
                        >
                            <input type="hidden" name="form-name" value="private-access" />
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light"
                                    placeholder="Full Name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Organization / Family Office</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light"
                                    placeholder="Optional"
                                    value={formState.organization}
                                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Email Coordinates</label>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light"
                                    placeholder="Secure contact email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2 relative">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Area of Interest</label>
                                <button
                                    type="button"
                                    onClick={() => setInterestOpen(!interestOpen)}
                                    className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 text-left focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light flex justify-between items-center"
                                >
                                    <span>{formState.interest === 'Capital' ? 'Capital / Investment' : formState.interest === 'Strategic' ? 'Strategic Engagement' : 'Technical Collaboration'}</span>
                                    <span className={`transform transition-transform duration-200 ${interestOpen ? 'rotate-180' : ''}`}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30" />
                                        </svg>
                                    </span>
                                </button>

                                {interestOpen && (
                                    <m.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute z-50 w-full mt-1 bg-[#0A0A0A] border border-white/10 shadow-2xl"
                                    >
                                        {[
                                            { value: 'Capital', label: 'Capital / Investment' },
                                            { value: 'Strategic', label: 'Strategic Engagement' },
                                            { value: 'Technical', label: 'Technical Collaboration' }
                                        ].map((option) => (
                                            <div
                                                key={option.value}
                                                onClick={() => {
                                                    setFormState({ ...formState, interest: option.value });
                                                    setInterestOpen(false);
                                                }}
                                                className={`px-6 py-4 cursor-pointer transition-colors duration-300 ${formState.interest === option.value
                                                    ? 'bg-[#C9A961]/10 text-[#C9A961]'
                                                    : 'text-white/70 hover:bg-white/[0.02] hover:text-white'
                                                    }`}
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </m.div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#C9A961]/70 block pl-1">Message</label>
                                <textarea
                                    className="w-full bg-white/[0.03] border border-white/10 p-4 text-white/80 placeholder-white/20 focus:outline-none focus:border-[#C9A961]/50 transition-colors font-light h-32 resize-none"
                                    placeholder="Briefly describe your interest..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    className="border border-[#D4AF37]/30 text-[#C9A961] px-10 py-3 text-sm tracking-widest hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50 transition-all duration-200"
                                >
                                    REQUEST PRIVATE ACCESS
                                </button>
                            </div>
                        </form>
                    </m.div>
                </div>
            </Section>

            {/* Closing */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="text-[#C9A961] text-lg font-light tracking-wide">
                            Vœrynth grows by intention, not acceleration.
                        </p>
                    </m.div>
                </div>
            </section>
            {/* Modal */}
            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Welcome to the Fold"
                message="Your credentials have been securely archived. We will verify your request, and should our paths align, you shall hear from us."
            />
        </>
    );
}
