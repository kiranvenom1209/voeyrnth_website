import React from 'react';
import { m } from 'framer-motion';
import { useNavigationType } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const navType = useNavigationType();
    const isPop = navType === 'POP';

    return (
        <m.div
            initial={isPop ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isPop ? { opacity: 1, y: 0, transition: { duration: 0 } } : { opacity: 0, y: -10 }}
            transition={{
                duration: isPop ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1] // Smooth luxury ease-out
            }}
            className="w-full min-h-[100dvh] will-change-[opacity,transform]"
        >
            {children}
        </m.div>
    );
};

export default PageTransition;
