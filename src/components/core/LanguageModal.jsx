import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'voerynth_lang_selected';
const logo = '/assets/logo/logo.svg';

export default function LanguageModal() {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Client-only: prevents SSR/hydration mismatch
    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        // Only show if the user hasn't chosen before
        const already = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
        if (!already) {
            // Small delay so the hero has time to start rendering behind the modal
            const t = setTimeout(() => setVisible(true), 500);
            return () => clearTimeout(t);
        }
    }, []);

    const choose = (lang) => {
        setLeaving(true);
        localStorage.setItem(STORAGE_KEY, lang);
        sessionStorage.setItem(STORAGE_KEY, lang);

        setTimeout(() => {
            setVisible(false);
            if (lang === 'de') {
                // Mirror current path under /de
                const currentPath = location.pathname;
                const isAlreadyDE = currentPath === '/de' || currentPath.startsWith('/de/');
                if (!isAlreadyDE) {
                    const dePath = currentPath === '/' ? '/de' : `/de${currentPath}`;
                    navigate(dePath);
                }
            }
            // For EN we just leave the path as-is
        }, 400);
    };

    if (!mounted || !visible) return null;

    return (
        <AnimatePresence>
            {visible && (
                <m.div
                    key="lang-modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: leaving ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]/90 backdrop-blur-md"
                >
                    <m.div
                        key="lang-modal-card"
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: leaving ? 0 : 1, y: leaving ? -10 : 0, scale: leaving ? 0.98 : 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-md mx-6 bg-[#0C0C0C] border border-white/[0.07] shadow-2xl"
                    >
                        {/* Top gold accent */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

                        <div className="px-12 py-14 flex flex-col items-center text-center">
                            {/* Logo */}
                            <img
                                src={logo}
                                alt="Vœrynth Système"
                                className="h-8 w-auto mb-10 opacity-90"
                                style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%)' }}
                            />

                            {/* Headline */}
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Select your language</p>
                            <h2 className="text-2xl font-light text-white tracking-wide mb-2">
                                Vœrynth Système
                            </h2>
                            <p className="text-xs text-white/25 font-light mb-12 tracking-wider">
                                Architecture for environments that cannot afford drama.
                            </p>

                            {/* Language Buttons */}
                            <div className="w-full flex flex-col gap-3">
                                <button
                                    onClick={() => choose('en')}
                                    className="group w-full border border-white/10 hover:border-[#D4AF37]/50 bg-white/[0.02] hover:bg-[#D4AF37]/5 transition-all duration-200 px-8 py-5 flex items-center justify-between"
                                >
                                    <div className="text-left">
                                        <span className="block text-xs tracking-[0.25em] text-white/80 group-hover:text-white transition-colors uppercase font-medium">English</span>
                                        <span className="block text-[10px] text-white/25 group-hover:text-white/40 transition-colors mt-0.5">International</span>
                                    </div>
                                    <span className="text-[11px] tracking-widest text-white/20 group-hover:text-[#D4AF37]/70 transition-colors font-light uppercase">EN →</span>
                                </button>

                                <button
                                    onClick={() => choose('de')}
                                    className="group w-full border border-white/10 hover:border-[#D4AF37]/50 bg-white/[0.02] hover:bg-[#D4AF37]/5 transition-all duration-200 px-8 py-5 flex items-center justify-between"
                                >
                                    <div className="text-left">
                                        <span className="block text-xs tracking-[0.25em] text-white/80 group-hover:text-white transition-colors uppercase font-medium">Deutsch</span>
                                        <span className="block text-[10px] text-white/25 group-hover:text-white/40 transition-colors mt-0.5">Deutschland · Österreich · Schweiz</span>
                                    </div>
                                    <span className="text-[11px] tracking-widest text-white/20 group-hover:text-[#D4AF37]/70 transition-colors font-light uppercase">DE →</span>
                                </button>
                            </div>

                            {/* Footer note */}
                            <p className="mt-10 text-[9px] tracking-widest text-white/15 uppercase">
                                You can switch language at any time
                            </p>
                        </div>

                        {/* Bottom gold accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
