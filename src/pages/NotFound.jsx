import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/UI';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <>
            <SEO
                title="404 - Signal Lost"
                description="The requested frequency does not exist."
                canonical="/404"
            />
            <Hero
                title="404"
                subtitle="Signal Lost."
                bgImage="/assets/home_hero_bg.png"
            >
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-8">
                        The frequency you are looking for is silent.
                    </p>
                    <Link
                        to="/"
                        className="border-b border-[#D4AF37]/30 pb-1 text-[#C9A961] hover:text-white transition-colors duration-500 tracking-widest uppercase text-xs"
                    >
                        Return to Signal
                    </Link>
                </div>
            </Hero>
        </>
    );
}
