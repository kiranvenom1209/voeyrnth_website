

const BRAND_NAME = "Vœrynth Système";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[#D4AF37]/10 text-center relative z-10">
            <div className="text-[#C9A961] text-lg tracking-widest mb-4">{BRAND_NAME}</div>
            <div className="text-[10px] text-white/20 uppercase tracking-widest">
                © {new Date().getFullYear()} Vœrynth Systems. All Rights Reserved.
            </div>
        </footer>
    );
}
