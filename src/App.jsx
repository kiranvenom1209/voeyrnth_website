import React, { lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PageTransition from './components/core/PageTransition';
import LanguageModal from './components/core/LanguageModal';
import LanguageTransition from './components/core/LanguageTransition';
import ReloadPrompt from './components/core/ReloadPrompt';
import CacheBuster from './components/core/CacheBuster';
import { LanguageTransitionProvider } from './context/LanguageTransitionContext';
import './index.css';

// Lazy Loaded Pages via routes
import { routes } from './config/routes';

// German-specific page components
const DeHome = lazy(() => import('./pages/de/Home'));
const DeAbout = lazy(() => import('./pages/de/About'));
const DePlatform = lazy(() => import('./pages/de/Platform'));
const DeSolutions = lazy(() => import('./pages/de/Solutions'));
const DeSecurity = lazy(() => import('./pages/de/Security'));
const DePricing = lazy(() => import('./pages/de/Pricing'));
const DeContact = lazy(() => import('./pages/de/Contact'));
const DePrivateEstates = lazy(() => import('./pages/de/PrivateEstates'));
const DePenthouses = lazy(() => import('./pages/de/Penthouses'));
const DeSuperyachts = lazy(() => import('./pages/de/Superyachts'));
const DeIndustrialSuites = lazy(() => import('./pages/de/IndustrialSuites'));
const DeEnergy = lazy(() => import('./pages/de/Energy'));
const DeArchitecture = lazy(() => import('./pages/de/Architecture'));
const DeDesign = lazy(() => import('./pages/de/Design'));
const DeSysteme = lazy(() => import('./pages/de/Systeme'));
const DeOS = lazy(() => import('./pages/de/OS'));
const DeAutomations = lazy(() => import('./pages/de/Automations'));
const DePrivateAccess = lazy(() => import('./pages/de/PrivateAccess'));
const DeDataSovereignty = lazy(() => import('./pages/de/DataSovereignty'));
const DeProcess = lazy(() => import('./pages/de/Process'));
const DeSpecs = lazy(() => import('./pages/de/Specs'));
const DeHardware = lazy(() => import('./pages/de/Hardware'));
const DeProtocols = lazy(() => import('./pages/de/Protocols'));
const DeSecurityModel = lazy(() => import('./pages/de/SecurityModel'));
const DePilot = lazy(() => import('./pages/de/Pilot'));
const DeProofIndex = lazy(() => import('./pages/de/proof/ProofIndex'));
const DeProofCommissioning = lazy(() => import('./pages/de/proof/ProofCommissioning'));
const DeProofReleasePolicy = lazy(() => import('./pages/de/proof/ProofReleasePolicy'));
const DeProofAuditLog = lazy(() => import('./pages/de/proof/ProofAuditLog'));

// Helper to wrap components
const getElement = (path) => {
    const config = routes[path];
    if (!config) return null;
    const Component = config.component;
    return <PageTransition><Component /></PageTransition>;
};

// Component to handle language switching based on URL
function LanguageSync() {
    const { pathname } = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const isGerman = pathname === '/de' || pathname.startsWith('/de/');
        if (isGerman && i18n.language !== 'de') {
            i18n.changeLanguage('de');
        } else if (!isGerman && i18n.language !== 'en') {
            i18n.changeLanguage('en');
        }
    }, [pathname, i18n]);

    return null;
}

export default function App() {
    const [mounted, setMounted] = useState(false);
    const location = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleExitComplete = () => {
        // Only scroll to top on new navigations. On POP (back/forward), let the browser preserve scroll position.
        if (navType !== 'POP') {
            window.scrollTo(0, 0);
        }
    };

    return (
        <LanguageTransitionProvider>
            <LazyMotion features={domAnimation}>
                <div className="min-h-[100dvh] bg-gradient-to-br from-[#0C0C0C] via-[#0A0A0A] to-[#080808] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-x-hidden font-sans relative">
                    {/* Warm ambient glows removed due to banding issues without a noise filter */}
                    <div className="fixed inset-0 pointer-events-none z-0" />

                    {/* Noise Overlay removed per user request */}
                    <Navigation />
                    <LanguageSync />
                    <LanguageModal />
                    <LanguageTransition />
                    {mounted && <ReloadPrompt />}
                    <CacheBuster />

                    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={getElement('/')} />
                            <Route path="/de" element={<PageTransition><DeHome /></PageTransition>} />
                            <Route path="/de/" element={<PageTransition><DeHome /></PageTransition>} />

                            {/* German-specific pages — must be declared before the auto-mirror loop */}
                            <Route path="/de/about" element={<PageTransition><DeAbout /></PageTransition>} />
                            <Route path="/de/platform" element={<PageTransition><DePlatform /></PageTransition>} />
                            <Route path="/de/solutions" element={<PageTransition><DeSolutions /></PageTransition>} />
                            <Route path="/de/security" element={<PageTransition><DeSecurity /></PageTransition>} />
                            <Route path="/de/pricing" element={<PageTransition><DePricing /></PageTransition>} />
                            <Route path="/de/contact" element={<PageTransition><DeContact /></PageTransition>} />
                            <Route path="/de/private-estates" element={<PageTransition><DePrivateEstates /></PageTransition>} />
                            <Route path="/de/penthouses" element={<PageTransition><DePenthouses /></PageTransition>} />
                            <Route path="/de/superyachts" element={<PageTransition><DeSuperyachts /></PageTransition>} />
                            <Route path="/de/industrial-suites" element={<PageTransition><DeIndustrialSuites /></PageTransition>} />
                            <Route path="/de/energy" element={<PageTransition><DeEnergy /></PageTransition>} />
                            <Route path="/de/architecture" element={<PageTransition><DeArchitecture /></PageTransition>} />
                            <Route path="/de/design" element={<PageTransition><DeDesign /></PageTransition>} />
                            <Route path="/de/systeme" element={<PageTransition><DeSysteme /></PageTransition>} />
                            <Route path="/de/os" element={<PageTransition><DeOS /></PageTransition>} />
                            <Route path="/de/automations" element={<PageTransition><DeAutomations /></PageTransition>} />
                            <Route path="/de/private-access" element={<PageTransition><DePrivateAccess /></PageTransition>} />
                            <Route path="/de/data-sovereignty" element={<PageTransition><DeDataSovereignty /></PageTransition>} />
                            <Route path="/de/process" element={<PageTransition><DeProcess /></PageTransition>} />
                            <Route path="/de/specs" element={<PageTransition><DeSpecs /></PageTransition>} />
                            <Route path="/de/hardware" element={<PageTransition><DeHardware /></PageTransition>} />
                            <Route path="/de/protocols" element={<PageTransition><DeProtocols /></PageTransition>} />
                            <Route path="/de/security/model" element={<PageTransition><DeSecurityModel /></PageTransition>} />
                            <Route path="/de/pilot" element={<PageTransition><DePilot /></PageTransition>} />
                            <Route path="/de/proof" element={<PageTransition><DeProofIndex /></PageTransition>} />
                            <Route path="/de/proof/commissioning" element={<PageTransition><DeProofCommissioning /></PageTransition>} />
                            <Route path="/de/proof/release-policy" element={<PageTransition><DeProofReleasePolicy /></PageTransition>} />
                            <Route path="/de/proof/audit-log" element={<PageTransition><DeProofAuditLog /></PageTransition>} />

                            {Object.keys(routes).map(path => {
                                if (path === '/' || path === '*') return null;
                                const enRoute = <Route key={path} path={path} element={getElement(path)} />;
                                // Mirror remaining EN routes under /de/* — German-specific pages above take precedence
                                const deRoute = <Route key={`de-${path}`} path={`/de${path}`} element={getElement(path)} />;
                                return [enRoute, deRoute];
                            })}
                            {/* 404 Route */}
                            <Route path="*" element={getElement('*')} />
                        </Routes>
                    </AnimatePresence>

                    <Footer />
                </div>
            </LazyMotion>
        </LanguageTransitionProvider >
    );
}
