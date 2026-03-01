import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { useNavigationType } from 'react-router-dom';

let globalHasMounted = false;

const variants = {
    initial: (isPop) => isPop ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: (isPop) => isPop
        ? { opacity: 1, y: 0, transition: { duration: 0 } }
        : { opacity: 0, y: -10, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

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
            custom={isPop}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-[100dvh] will-change-[opacity,transform]"
        >
            {children}
        </m.div>
    );
};

export default PageTransition;
