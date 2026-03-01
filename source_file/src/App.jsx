import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import './index.css';

// Lazy Loaded Pages via routes
import { routes } from './config/routes';

// Helper to wrap components
const getElement = (path) => {
    const config = routes[path];
    if (!config) return null;
    const Component = config.component;
    return <Component />;
};

export default function App() {
    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen bg-gradient-to-br from-[#0C0C0C] via-[#0A0A0A] to-[#080808] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-x-hidden font-sans relative">
                {/* Warm ambient glow - museum lighting effect */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#C9A961]/[0.015] rounded-full blur-[100px]" />
                </div>

                {/* External Font Import */}
                {/* Noise Overlay */}
                <div className="noise-overlay" />

                <div className="noise-overlay" />

                <Navigation />

                <Routes>
                    <Route path="/" element={getElement('/')} />
                    {Object.keys(routes).map(path => {
                        if (path === '/' || path === '*') return null;
                        return <Route key={path} path={path} element={getElement(path)} />;
                    })}
                    {/* 404 Route */}
                    <Route path="*" element={getElement('*')} />
                </Routes>

                <Footer />
            </div>
        </>
    );
}
