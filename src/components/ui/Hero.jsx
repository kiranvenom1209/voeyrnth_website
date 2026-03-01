import React from 'react';
import { m } from 'framer-motion';

const Hero = ({ title, subtitle, body, children, className = "", bgImage = null }) => {
    // Helper to generate WebP paths
    const getWebP = (path) => path?.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp');
    const getMobile = (path) => {
        if (!path) return path;
        return path.replace(/(_v\d+)?\.(png|jpg|jpeg|webp)$/i, '_mobile$1.$2');
    };

    return (
        <section className={`relative min-h-[70vh] flex flex-col justify-center items-center text-center px-8 md:px-12 overflow-hidden ${className}`}>
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet={getMobile(bgImage)}
                            type="image/webp"
                        />
                        <source
                            srcSet={getWebP(bgImage)}
                            type="image/webp"
                        />
                        <img
                            src={getWebP(bgImage)}
                            alt=""
                            fetchpriority="high"
                            decoding="async"
                            className="w-full h-full object-cover opacity-60"
                            style={{ mixBlendMode: 'luminosity' }}
                        />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
                    <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.15) 100%)' }} />
                </div>
            )}
            <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="z-10 max-w-4xl mt-32 md:mt-40"
            >
                {title && <h1 className="text-3xl md:text-6xl font-light tracking-wide text-white/95 mb-4 md:mb-6 leading-tight">{title}</h1>}
                {subtitle && <p className="text-lg md:text-2xl text-white/65 font-light tracking-wide mb-8 leading-relaxed">{subtitle}</p>}
                {body && <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">{body}</p>}
                {children}
            </m.div>
        </section>
    );
};

export default Hero;
