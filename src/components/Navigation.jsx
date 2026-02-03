import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/assets/logo/logo.svg';

const BRAND_NAME = "Vœrynth Système";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

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
        { label: 'PLATFORM', path: '/platform' },
        { label: 'SOLUTIONS', path: '/solutions' },
        { label: 'DESIGN', path: '/design' },
        { label: 'SECURITY', path: '/security' },
        { label: 'ABOUT', path: '/about' },
        { label: 'PRICING', path: '/pricing' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-1000 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl py-4' : 'py-6 md:py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 select-none z-50">
                        <img
                            src={logo}
                            alt={BRAND_NAME}
                            className="h-6 md:h-8 w-auto"
                            style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%)' }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex gap-12 text-xs tracking-widest text-white/50">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`transition-colors duration-700 ${location.pathname === item.path
                                        ? 'text-[#C9A961]'
                                        : 'hover:text-[#C9A961]'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Invest - Subtle/Far Right */}
                        <Link
                            to="/private-access"
                            className="text-[10px] tracking-[0.15em] text-white/20 hover:text-white/40 transition-colors duration-500 uppercase border-l border-white/5 pl-8"
                        >
                            Invest
                        </Link>

                        {/* Desktop Contact Button */}
                        <Link
                            to="/contact"
                            className="hidden md:block text-xs bg-[#D4AF37] text-black px-6 py-2 hover:bg-[#C9A961] transition-all duration-700 font-medium rounded shadow-lg shadow-[#D4AF37]/10 tracking-wider"
                        >
                            REQUEST PRIVATE DEMO
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white/80 z-50 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center items-center md:hidden"
                        style={{ height: '100dvh' }}
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-xl tracking-[0.2em] font-light ${location.pathname === item.path
                                        ? 'text-[#C9A961]'
                                        : 'text-white/70'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/private-access"
                                className="text-xl tracking-[0.2em] font-light text-white/70 mt-4"
                            >
                                Invest
                            </Link>
                            <Link
                                to="/contact"
                                className="mt-8 text-sm bg-[#D4AF37] text-black px-8 py-3 tracking-widest hover:bg-[#C9A961] transition-all duration-700 font-medium rounded shadow-lg shadow-[#D4AF37]/10"
                            >
                                REQUEST PRIVATE DEMO
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


