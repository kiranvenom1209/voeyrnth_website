import { useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Hero, Section } from '../../components/ui';
import SEO from '../../components/core/SEO';
import SuccessModal from '../../components/core/SuccessModal';

export default function DeContact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
        contactMethod: 'E-Mail'
    });
    const [contactMethodOpen, setContactMethodOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const encode = (data) =>
            Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setShowSuccess(true);
                setFormData({ name: '', company: '', email: '', message: '', contactMethod: 'E-Mail' });
            })
            .catch(() => alert("Verbindungsfehler. Bitte erneut versuchen."));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <SEO
                title="Private Demo anfragen"
                description="Nehmen Sie Kontakt zu Vœrynth auf – für eine diskrete Beratung zu Ihrem Anwesen oder Ihrer Umgebung."
                keywords="private Demo, Beratung Anwesensautomation, Kontakt Vœrynth"
            />
            <Hero
                title="Private Demo anfragen"
                subtitle="Wir antworten persönlich. Keine Verteiler. Kein Lärm."
                bgImage="/assets/contact_hero_bg_v2.webp"
            />

            <div className="text-center py-8">
                <Link to="/de/process" className="text-xs font-light text-white/40 hover:text-[#C9A961] transition-colors duration-200 tracking-widest uppercase border-b border-transparent hover:border-[#C9A961]/30 pb-1">
                    Unser Engagement-Prozess
                </Link>
            </div>

            <Section>
                <div className="max-w-2xl mx-auto">
                    <m.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-white/40 mb-3">Name</label>
                            <input
                                type="text" id="name" name="name"
                                value={formData.name} onChange={handleChange} required
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-200 placeholder:text-white/20"
                                placeholder="Ihr Name"
                            />
                        </div>

                        {/* Unternehmen / Anwesen */}
                        <div>
                            <label htmlFor="company" className="block text-xs tracking-widest uppercase text-white/40 mb-3">Unternehmen / Anwesen</label>
                            <input
                                type="text" id="company" name="company"
                                value={formData.company} onChange={handleChange}
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-200 placeholder:text-white/20"
                                placeholder="Organisation oder Immobilienbezeichnung"
                            />
                        </div>

                        {/* E-Mail */}
                        <div>
                            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-white/40 mb-3">E-Mail</label>
                            <input
                                type="email" id="email" name="email"
                                value={formData.email} onChange={handleChange} required
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-200 placeholder:text-white/20"
                                placeholder="ihre@email.com"
                            />
                        </div>

                        {/* Vorhaben */}
                        <div>
                            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-white/40 mb-3">Was planen Sie?</label>
                            <textarea
                                id="message" name="message"
                                value={formData.message} onChange={handleChange} required
                                rows="6"
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-200 placeholder:text-white/20 resize-none"
                                placeholder="Beschreiben Sie Ihr Projekt oder Ihre Umgebung..."
                            />
                        </div>

                        {/* Bevorzugte Kontaktart */}
                        <div>
                            <label htmlFor="contactMethod" className="block text-xs tracking-widest uppercase text-white/40 mb-3">Bevorzugte Kontaktart</label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setContactMethodOpen(!contactMethodOpen)}
                                    className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 text-left focus:border-[#C9A961]/40 focus:outline-none transition-all duration-200 flex justify-between items-center"
                                >
                                    <span>{formData.contactMethod}</span>
                                    <span className={`transform transition-transform duration-200 ${contactMethodOpen ? 'rotate-180' : ''}`}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30" />
                                        </svg>
                                    </span>
                                </button>
                                {contactMethodOpen && (
                                    <m.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute z-50 w-full mt-1 bg-[#0A0A0A] border border-white/10 shadow-2xl"
                                    >
                                        {['E-Mail', 'Telefon', 'Videogespräch'].map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => { setFormData({ ...formData, contactMethod: option }); setContactMethodOpen(false); }}
                                                className={`px-6 py-4 cursor-pointer transition-colors duration-300 ${formData.contactMethod === option ? 'bg-[#C9A961]/10 text-[#C9A961]' : 'text-white/70 hover:bg-white/[0.02] hover:text-white'}`}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </m.div>
                                )}
                            </div>
                        </div>

                        {/* Absenden */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-[#D4AF37] text-black px-8 py-4 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium shadow-lg shadow-[#D4AF37]/10"
                            >
                                ANFRAGE EINREICHEN
                            </button>
                        </div>
                    </m.form>

                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0}}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/30 text-xs leading-loose font-light">
                            Ihre Angaben werden vertraulich behandelt. <br />
                            Wir geben keine Kontaktdaten weiter, verkaufen oder verteilen sie nicht.
                        </p>
                    </m.div>
                </div>
            </Section>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Anfrage eingegangen"
                message="Ihre Nachricht wurde sicher übermittelt. Unser Team prüft Ihre Anfrage mit der gebotenen Diskretion und meldet sich zeitnah persönlich bei Ihnen."
            />
        </>
    );
}
