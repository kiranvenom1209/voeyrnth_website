import React from 'react';

const Tag = ({ text }) => (
    <span className="px-4 py-1.5 border border-white/10 text-[10px] tracking-[0.15em] text-white/40 uppercase bg-white/[0.02] backdrop-blur-sm hover:border-[#C9A961]/30 hover:text-[#C9A961]/60 transition-all duration-200">
        {text}
    </span>
);

export default Tag;
