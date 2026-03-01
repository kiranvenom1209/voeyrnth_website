import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, hoverText, icon: Icon, delay = 0, bgImage = null }) => {
    // Helper to generate WebP paths
    const getWebP = (path) => path?.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp');
    const getMobile = (path) => path?.replace(/\.(png|jpg|jpeg|webp)$/i, '_mobile.webp');

    return (
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
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 saturate-[0.85] sepia-[0.05] brightness-85 contrast-105"
                                style={{ filter: 'saturate(0.85) sepia(0.05) brightness(0.85) contrast(1.05) hue-rotate(5deg)' }}
                            />
                        </picture>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/35 to-transparent" />
                    </div>
                </>
            )}

            <div className="relative z-10 h-full flex flex-col justify-start">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="text-[#C9A961]/70 mb-6">
                    {Icon && <Icon size={22} strokeWidth={1.25} />}
                </div>

                <div className="transform transition-transform duration-700 hover:-translate-y-1">
                    <h3 className="text-xl font-medium text-white/95 mb-4 tracking-wide leading-relaxed min-h-[3.5rem] flex items-center">{title}</h3>
                    <p className="text-white/45 leading-loose text-sm font-light min-h-[4.5rem]">{description}</p>
                    {/* Always visible if text exists */}
                    {hoverText && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                            <p className="text-[#C9A961]/80 leading-relaxed text-xs font-light">
                                {hoverText}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
