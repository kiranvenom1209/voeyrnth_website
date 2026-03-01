import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SmartLink from '../core/SmartLink';

const BRAND_NAME = "Vœrynth Système";

export default function Footer() {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const isGerman = pathname === '/de' || pathname.startsWith('/de/');

    const pfx = (path) => isGerman ? `/de${path}` : path;

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
                    {t('footer.tagline')}
                </div>
            </div>

            <ul className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8 text-xs tracking-widest uppercase text-white/40 font-light p-0 w-full flex-wrap max-w-5xl mx-auto">
                <li>
                    <SmartLink to={pfx('/pricing')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.pricing')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/architecture')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.architecture')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/proof/commissioning')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.commissioning')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/hardware')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.hardware')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/contact')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.request_demo')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/proof/audit-log')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.audit')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/security/model')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.security_model')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <SmartLink to={pfx('/pilot')} className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.pilot')}</SmartLink>
                </li>
                <li className="hidden md:block"><span className="text-white/20">|</span></li>
                <li>
                    <a href="/llms.txt" className="hover:text-[#C9A961] transition-colors duration-200">{t('footer.links.llm')}</a>
                </li>
            </ul>

            <div className="text-[10px] text-white/20 uppercase tracking-widest font-light">
                © {new Date().getFullYear()} Vœrynth Systems. {t('footer.copyright')}
            </div>
        </footer>
    );
}
