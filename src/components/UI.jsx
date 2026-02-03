import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ children, className = "", ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const Card = ({ title, description, hoverText, icon: Icon, delay = 0, bgImage = null }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="group relative border border-white/10 bg-gradient-to-br from-[#0D0D0D] to-[#0A0A0A] p-8 overflow-hidden h-full flex flex-col justify-between shadow-2xl"
    >
        {bgImage && (
            <>
                <div className="absolute inset-0 z-0">
                    <img
                        src={bgImage}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 saturate-[0.85] sepia-[0.05] brightness-85 contrast-105"
                        style={{ filter: 'saturate(0.85) sepia(0.05) brightness(0.85) contrast(1.05) hue-rotate(5deg)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/35 to-transparent" />
                </div>
            </>
        )}

        <div className="relative z-10 h-full flex flex-col justify-end pb-4">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="mb-auto text-[#C9A961]/70">
                {Icon && <Icon size={22} strokeWidth={1.25} />}
            </div>

            <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                <h3 className="text-xl font-medium text-white/95 mb-4 tracking-wide leading-relaxed">{title}</h3>
                <p className="text-white/45 leading-loose text-sm font-light">{description}</p>
                {/* Reveal on hover */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <p className="text-[#C9A961]/80 leading-relaxed text-xs font-light mt-4 pt-4 border-t border-white/5">
                        {hoverText}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

export const Tag = ({ text }) => (
    <span className="px-4 py-1.5 border border-white/10 text-[10px] tracking-[0.15em] text-white/40 uppercase bg-white/[0.02] backdrop-blur-sm hover:border-[#C9A961]/30 hover:text-[#C9A961]/60 transition-all duration-700">
        {text}
    </span>
);

export const Hero = ({ title, subtitle, body, children, className = "", bgImage = null }) => (
    <section className={`relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden ${className}`}>
        {bgImage && (
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt=""
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover opacity-50 saturate-[0.9] sepia-[0.05] brightness-90"
                    style={{ filter: 'saturate(0.9) sepia(0.05) brightness(0.9) contrast(1.05) hue-rotate(5deg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
                <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.15) 100%)' }} />
            </div>
        )}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 max-w-4xl mt-32 md:mt-40"
        >
            {title && <h1 className="text-3xl md:text-6xl font-light tracking-wide text-white/95 mb-4 md:mb-6 leading-tight">{title}</h1>}
            {subtitle && <p className="text-lg md:text-2xl text-white/65 font-light tracking-wide mb-8 leading-relaxed">{subtitle}</p>}
            {body && <p className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">{body}</p>}
            {children}
        </motion.div>
    </section>
);
