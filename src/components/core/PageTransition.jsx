import React from 'react';
import { m } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] // Smooth luxury ease-out
            }}
            className="w-full min-h-[100dvh] will-change-[opacity,transform]"
        >
            {children}
        </m.div>
    );
};

export default PageTransition;
