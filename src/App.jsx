import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Design = lazy(() => import('./pages/Design'));
const Security = lazy(() => import('./pages/Security'));
const About = lazy(() => import('./pages/About'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Systeme = lazy(() => import('./pages/Systeme'));
const OS = lazy(() => import('./pages/OS'));
const Automations = lazy(() => import('./pages/Automations'));
const PrivateEstates = lazy(() => import('./pages/PrivateEstates'));
const Penthouses = lazy(() => import('./pages/Penthouses'));
const Superyachts = lazy(() => import('./pages/Superyachts'));
const IndustrialSuites = lazy(() => import('./pages/IndustrialSuites'));
const Energy = lazy(() => import('./pages/Energy'));
const PrivateAccess = lazy(() => import('./pages/PrivateAccess'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading Fallback
const Loading = () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#080808]">
        <div className="w-16 h-[1px] bg-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#C9A961] animate-loading-bar" />
        </div>
    </div>
);

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen bg-gradient-to-br from-[#0C0C0C] via-[#0A0A0A] to-[#080808] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-x-hidden font-sans relative">
                {/* Warm ambient glow - museum lighting effect */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C9A961]/[0.015] rounded-full blur-[100px]" />
                </div>

                {/* External Font Import */}
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;500;600&display=swap');
                    
                    :root {
                      --font-kumbh: 'Kumbh Sans', sans-serif;
                    }

                    body {
                      font-family: var(--font-kumbh);
                      background: linear-gradient(135deg, #0C0C0C 0%, #0A0A0A 50%, #080808 100%);
                    }

                    /* Refined Noise Texture - more subtle */
                    .noise-overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      pointer-events: none;
                      z-index: 50;
                      opacity: 0.025;
                      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                    }
                `}</style>

                <div className="noise-overlay" />

                <Navigation />

                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/platform" element={<Platform />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/design" element={<Design />} />
                        <Route path="/security" element={<Security />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/systeme" element={<Systeme />} />
                        <Route path="/os" element={<OS />} />
                        <Route path="/automations" element={<Automations />} />
                        <Route path="/private-estates" element={<PrivateEstates />} />
                        <Route path="/penthouses" element={<Penthouses />} />
                        <Route path="/superyachts" element={<Superyachts />} />
                        <Route path="/industrial-suites" element={<IndustrialSuites />} />

                        <Route path="/energy" element={<Energy />} />
                        <Route path="/private-access" element={<PrivateAccess />} />

                        {/* 404 Route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>

                <Footer />
            </div>
        </BrowserRouter>
    );
}
