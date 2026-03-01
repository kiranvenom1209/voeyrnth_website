import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { useLanguageTransition } from '../../context/LanguageTransitionContext';

const logo = '/assets/logo/logo.svg';

export default function LanguageTransition() {
    const { registerTrigger } = useLanguageTransition();
    const navigate = useNavigate();

    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [exiting, setExiting] = useState(false);
    const pathRef = useRef('/');
    const labelRef = useRef('');

    // Only run on client — prevents SSR/hydration mismatch
    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        registerTrigger((targetPath, langLabel) => {
            pathRef.current = targetPath;
            labelRef.current = langLabel;
            setVisible(true);
            setExiting(false);
            setShowContent(false);
        });
    }, [registerTrigger]);

    // All timers fire from the SAME effect run — no phase-based re-running
    useEffect(() => {
        if (!visible) return;

        // All timeouts set at once; cleanup only fires when visible→false
        const t1 = setTimeout(() => navigate(pathRef.current), 1200);   // Navigate when curtain is fully closed
        const t2 = setTimeout(() => setShowContent(true), 400);         // Show content logo over curtain
        const t3 = setTimeout(() => { setShowContent(false); setExiting(true); }, 2200); // Begin exit phase
        const t4 = setTimeout(() => setVisible(false), 3800);           // Fully unmount

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!mounted || !visible) return null;

    return (
        <div className="fixed inset-0 z-[9998] overflow-hidden">

            {/* Dark backdrop — always present while visible */}
            <m.div
                className="absolute inset-0 bg-[#050505]"
                initial={{ opacity: 0 }}
                animate={{ opacity: exiting ? 0 : 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            {/* Sliding curtain panel */}
            <m.div
                className="absolute inset-0 bg-[#080808] flex items-center justify-center"
                initial={{ x: '-100%' }}
                animate={{ x: exiting ? '100%' : '0%' }}
                transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            >
                {/* Gold edge line — left on entry, right on exit */}
                <div
                    className="absolute inset-y-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#D4AF37]/80 to-transparent"
                    style={{ [exiting ? 'right' : 'left']: 0 }}
                />

                {/* Center branding */}
                <AnimatePresence>
                    {showContent && (
                        <m.div
                            key="lang-center"
                            className="flex flex-col items-center gap-5"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <m.div
                                className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8 }}
                            />

                            <img
                                src={logo}
                                alt="Vœrynth"
                                className="h-7 w-auto"
                                style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%)' }}
                            />

                            <div className="flex flex-col items-center gap-1.5">
                                <span className="text-[9px] tracking-[0.35em] text-white/30 uppercase">Language</span>
                                <span className="text-xl font-light tracking-[0.25em] text-white uppercase">
                                    {labelRef.current}
                                </span>
                            </div>

                            <m.div
                                className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            />
                        </m.div>
                    )}
                </AnimatePresence>
            </m.div>
        </div>
    );
}
