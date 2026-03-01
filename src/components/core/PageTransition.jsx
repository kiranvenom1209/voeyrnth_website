import React from 'react';
import { m } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] // Elegant deceleration curve
            }}
            className="w-full min-h-[100dvh]"
        >
            {children}
        </m.div>
    );
};

export default PageTransition;
