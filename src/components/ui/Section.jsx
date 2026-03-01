import React from 'react';
import { m } from 'framer-motion';

const Section = ({ children, className = "", ...props }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32 relative z-10 ${className}`}
            {...props}
        >
            {children}
        </m.div>
    );
};

export default Section;
