import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero, Section } from '../components/UI';
import SEO from '../components/SEO';
import SuccessModal from '../components/SuccessModal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
        contactMethod: 'email'
    });
    const [contactMethodOpen, setContactMethodOpen] = useState(false);
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
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(async () => {
                // Trigger the email notification
                await fetch("/.netlify/functions/trigger-email", {
                    method: "POST",
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        formName: "contact"
                    })
                });

                setShowSuccess(true);
                setFormData({ name: '', company: '', email: '', message: '', contactMethod: 'email' });
            })
            .catch(() => alert("Signal Failed. Please retry."));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <SEO
                title="Request Private Demo"
                description="Contact Vœrynth for a private consultation regarding your estate or high-compliance environment."
                canonical="/contact"
            />
            <Hero
                title="Request a Private Demo"
                subtitle="We respond personally. No mailing lists. No noise."
                bgImage="/assets/contact_hero_bg.png"
            />

            <Section>
                <div className="max-w-2xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                    >
                        {/* Netlify Form Detection */}
                        <input type="hidden" name="form-name" value="contact" />
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-white/40 mb-3">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-700 placeholder:text-white/20"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Company / Estate */}
                        <div>
                            <label htmlFor="company" className="block text-xs tracking-widest uppercase text-white/40 mb-3">
                                Company / Estate
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-700 placeholder:text-white/20"
                                placeholder="Organization or property name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-white/40 mb-3">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-700 placeholder:text-white/20"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* What are you building? */}
                        <div>
                            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-white/40 mb-3">
                                What are you building?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 focus:border-[#C9A961]/40 focus:bg-white/[0.03] focus:outline-none transition-all duration-700 placeholder:text-white/20 resize-none"
                                placeholder="Tell us about your project or environment..."
                            />
                        </div>

                        {/* Preferred Contact Method */}
                        <div>
                            <label htmlFor="contactMethod" className="block text-xs tracking-widest uppercase text-white/40 mb-3">
                                Preferred Contact Method
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setContactMethodOpen(!contactMethodOpen)}
                                    className="w-full bg-white/[0.02] border border-white/10 px-6 py-4 text-white/90 text-left focus:border-[#C9A961]/40 focus:bg-[#0A0A0A] focus:outline-none transition-all duration-700 flex justify-between items-center"
                                >
                                    <span className="capitalize">{formData.contactMethod}</span>
                                    <span className={`transform transition-transform duration-500 ${contactMethodOpen ? 'rotate-180' : ''}`}>
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30" />
                                        </svg>
                                    </span>
                                </button>

                                {contactMethodOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute z-50 w-full mt-1 bg-[#0A0A0A] border border-white/10 shadow-2xl"
                                    >
                                        {['email', 'phone', 'video'].map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => {
                                                    setFormData({ ...formData, contactMethod: option });
                                                    setContactMethodOpen(false);
                                                }}
                                                className={`px-6 py-4 cursor-pointer transition-colors duration-300 capitalize ${formData.contactMethod === option
                                                    ? 'bg-[#C9A961]/10 text-[#C9A961]'
                                                    : 'text-white/70 hover:bg-white/[0.02] hover:text-white'
                                                    }`}
                                            >
                                                {option === 'video' ? 'Video Call' : option}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-[#D4AF37] text-black px-8 py-4 text-sm tracking-widest hover:bg-[#C9A961] transition-all duration-700 font-medium shadow-lg shadow-[#D4AF37]/10"
                            >
                                INITIATE REQUEST
                            </button>
                        </div>
                    </motion.form>

                    {/* Privacy Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-white/30 text-xs leading-loose font-light">
                            Your information is handled with discretion. <br />
                            We do not share, sell, or distribute contact details.
                        </p>
                    </motion.div>
                </div>
            </Section>
            {/* Modal */}
            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Request Acknowledged"
                message="Your correspondence has been securely logged. Our team will review your inquiry with the appropriate discretion and respond shortly."
            />
        </>
    );
}
