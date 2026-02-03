
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/assets/logo/logo.svg';

export default function SuccessModal({ isOpen, onClose, title = "Transmission Received", message = "We have received your coordinates. Expect a secure response shortly." }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-[#0A0A0A] border border-[#D4AF37]/20 p-8 md:p-12 max-w-md w-full shadow-2xl text-center"
                    >
                        {/* Decorative Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/50" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]/50" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]/50" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/50" />

                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                {/* Glow behind logo */}
                                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[25px] rounded-full scale-150" />
                                <img
                                    src={logo}
                                    alt="Vœrynth"
                                    className="h-16 w-auto relative z-10"
                                    style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(548%) hue-rotate(8deg) brightness(93%) contrast(87%) drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-light text-white/95 mb-4 tracking-wide">
                            {title}
                        </h3>

                        <p className="text-white/50 text-sm leading-loose font-light mb-8">
                            {message}
                        </p>

                        <button
                            onClick={onClose}
                            className="text-[#C9A961] text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-500 border-b border-[#C9A961]/30 pb-1"
                        >
                            Close Transmission
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
