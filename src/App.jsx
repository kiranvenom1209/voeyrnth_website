import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import './index.css';

// Lazy Loaded Pages via routes
import { routes } from './config/routes';

// Helper to wrap lazy imports
const getElement = (path) => {
    const config = routes[path];
    if (!config) return null;
    const Component = lazy(config.component);
    return <Component />;
};

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
                        <Route path="/" element={getElement('/')} />
                        {Object.keys(routes).map(path => {
                            if (path === '/' || path === '*') return null;
                            return <Route key={path} path={path} element={getElement(path)} />;
                        })}
                        {/* 404 Route */}
                        <Route path="*" element={getElement('*')} />
                    </Routes>
                </Suspense>

                <Footer />
            </div>
        </BrowserRouter>
    );
}
