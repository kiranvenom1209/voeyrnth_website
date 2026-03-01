import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { useNavigationType } from 'react-router-dom';

let globalHasMounted = false;

const PageTransition = ({ children }) => {
    const navType = useNavigationType();

    // On the very first load, navType is 'POP' but we want the default entrance animation.
    // So we only disable animation on POP if the app has already mounted.
    const isPop = navType === 'POP' && globalHasMounted;

    useEffect(() => {
        globalHasMounted = true;
    }, []);

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
