import React from 'react';
import { m } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1] // Apple-style luxury easing
            }}
            className="w-full min-h-[100dvh]"
        >
            {children}
        </m.div>
    );
};

export default PageTransition;
