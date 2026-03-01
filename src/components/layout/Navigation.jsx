import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SmartLink from '../core/SmartLink'; // Use SmartLink for prefetching
import { Menu, X, Globe } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageTransition } from '../../context/LanguageTransitionContext';

const logo = '/assets/logo/logo.svg';

const BRAND_NAME = "Vœrynth Système";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const { triggerTransition } = useLanguageTransition();

    const isGerman = location.pathname === '/de' || location.pathname.startsWith('/de/');

    // Helper to get localized path for navigation items
    const getLocalizedPath = (path) => {
        if (path.startsWith('http')) return path;
        // Strip existing locale if any (just only for safety)
        const purePath = path.replace(/^\/de(\/|$)/, '$1');
        return isGerman ? `/de${purePath === '/' ? '' : purePath}` : purePath;
    };

    // Helper to switch language path
    const getSwitchPath = () => {
        if (isGerman) {
            // Switch to EN: strip /de
            return location.pathname.replace(/^\/de(\/|$)/, '$1') || '/';
        } else {
            // Switch to DE: prepend /de
            const p = location.pathname === '/' ? '' : location.pathname;
            return `/de${p}`;
        }
    };

    const handleLangSwitch = () => {
        const target = getSwitchPath();
        const label = isGerman ? 'English' : 'Deutsch';
        triggerTransition(target, label);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { label: t('nav.platform'), path: '/platform' },
        { label: t('nav.solutions'), path: '/solutions' },
        { label: t('nav.architecture'), path: '/architecture' },
        { label: t('nav.design'), path: '/design' },
        { label: t('nav.security'), path: '/security' },
        { label: t('nav.about'), path: '/about' },
        { label: t('nav.pricing'), path: '/pricing' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-200 pointer-events-none ${scrolled ? 'bg-[#0A0A0A]/98 backdrop-blur-md py-4' : 'py-6 md:py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <SmartLink to={getLocalizedPath("/")} className="flex items-center gap-2 select-none z-50 pointer-events-auto">
                        <img
                            src={logo}
                            alt={BRAND_NAME}
                            className="h-6 md:h-8 w-auto"
                            style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%)' }}
                        />
                    </SmartLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8 pointer-events-auto">
                        <div className={`flex items-center text-[10px] lg:text-xs tracking-widest text-white/50 ${isGerman ? 'gap-4 lg:gap-6 tracking-wider' : 'gap-6 lg:gap-10'}`}>
                            {navItems.map((item) => (
                                <SmartLink
                                    key={item.path}
                                    to={getLocalizedPath(item.path)}
                                    className={`whitespace-nowrap transition-colors duration-200 uppercase ${location.pathname.endsWith(item.path)
                                        ? 'text-[#C9A961]'
                                        : 'hover:text-[#C9A961]'
                                        }`}
                                >
                                    {item.label}
                                </SmartLink>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className={`flex items-center ${isGerman ? 'gap-3' : 'gap-6'}`}>
                            {/* Language Switcher */}
                            <button
                                onClick={handleLangSwitch}
                                className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-white hover:text-[#D4AF37] transition-colors duration-300 uppercase font-medium border border-white/20 hover:border-[#D4AF37]/50 px-3 py-1.5 rounded-sm whitespace-nowrap cursor-pointer"
                                aria-label="Switch Language"
                            >
                                <Globe size={10} className="opacity-70" />
                                {isGerman ? 'EN' : 'DE'}
                            </button>

                            {/* Invest - Subtle */}
                            <SmartLink
                                to={getLocalizedPath("/private-access")}
                                className="text-[10px] tracking-[0.15em] text-white/20 hover:text-white/40 transition-colors duration-200 uppercase border-l border-white/5 pl-4 whitespace-nowrap"
                            >
                                {t('nav.invest')}
                            </SmartLink>

                            {/* Desktop Contact Button */}
                            <SmartLink
                                to={getLocalizedPath("/contact")}
                                className="hidden md:block text-[10px] lg:text-xs bg-[#D4AF37] text-black px-5 py-2 hover:bg-[#C9A961] transition-all duration-200 font-medium rounded shadow-lg shadow-[#D4AF37]/10 tracking-wider whitespace-nowrap"
                            >
                                {t('nav.request_demo')}
                            </SmartLink>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white/80 z-50 p-2 transform scale-90 pointer-events-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <m.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center items-center md:hidden"
                        style={{ height: '100dvh' }}
                    >
                        <div className="flex flex-col gap-8 text-center px-6">
                            {/* Mobile Language Switcher */}
                            <div className="flex justify-center mb-4">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setTimeout(() => handleLangSwitch(), 150);
                                    }}
                                    className="text-sm tracking-[0.2em] border border-white/10 px-6 py-2 text-white/60 hover:border-white/30 transition-all uppercase cursor-pointer"
                                >
                                    {isGerman ? t('nav.switch_to_english', 'English') : t('nav.switch_to_german', 'German')}
                                </button>
                            </div>

                            {navItems.map((item) => (
                                <SmartLink
                                    key={item.path}
                                    to={getLocalizedPath(item.path)}
                                    className={`text-xl tracking-[0.2em] font-light uppercase ${location.pathname.endsWith(item.path)
                                        ? 'text-[#C9A961]'
                                        : 'text-white/70'
                                        }`}
                                >
                                    {item.label}
                                </SmartLink>
                            ))}
                            <SmartLink
                                to={getLocalizedPath("/private-access")}
                                className="text-xl tracking-[0.2em] font-light text-white/70 mt-4 uppercase"
                            >
                                {t('nav.invest')}
                            </SmartLink>

                            <SmartLink
                                to={getLocalizedPath("/contact")}
                                className="mt-8 text-sm bg-[#D4AF37] text-black px-8 py-3 tracking-widest hover:bg-[#C9A961] transition-all duration-200 font-medium rounded shadow-lg shadow-[#D4AF37]/10"
                            >
                                {t('nav.request_demo')}
                            </SmartLink>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}


