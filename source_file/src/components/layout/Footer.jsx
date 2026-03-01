import React from 'react';
import SmartLink from '../core/SmartLink';

const BRAND_NAME = "Vœrynth Système";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[#D4AF37]/10 text-center relative z-10 bg-[#060606]">
            <div className="flex justify-center mb-6 opacity-95">
                <img
                    src="/assets/logo/logo.svg"
                    alt="Vœrynth Logo"
                    className="h-16 w-auto"
                    style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%)' }}
                />
            </div>
            <div className="flex flex-col items-center mb-10">
                <div className="text-[#C9A961] text-xl tracking-[0.2em] mb-2 font-light">{BRAND_NAME}</div>
                <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-light">
                    From the House of Ayanthiara
                </div>
            </div>

            <ul className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8 text-xs tracking-widest uppercase text-white/40 font-light p-0 w-full flex-wrap max-w-5xl mx-auto">
                <li>
                    <SmartLink to="/pricing" className="hover:text-[#C9A961] transition-colors duration-500">Pricing</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/architecture" className="hover:text-[#C9A961] transition-colors duration-500">Architecture</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/proof/commissioning" className="hover:text-[#C9A961] transition-colors duration-500">Commissioning</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/hardware" className="hover:text-[#C9A961] transition-colors duration-500">Hardware</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/contact" className="hover:text-[#C9A961] transition-colors duration-500">Request Demo</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/proof/audit-log" className="hover:text-[#C9A961] transition-colors duration-500">Audit Example</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/security/model" className="hover:text-[#C9A961] transition-colors duration-500">Security Model</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to="/pilot" className="hover:text-[#C9A961] transition-colors duration-500">Pilot</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <a href="/llms.txt" className="hover:text-[#C9A961] transition-colors duration-500">LLM Instructions</a>
                </li>
            </ul>

            <div className="text-[10px] text-white/20 uppercase tracking-widest font-light">
                © {new Date().getFullYear()} Vœrynth Systems. All Rights Reserved.
            </div>
        </footer>
    );
}
