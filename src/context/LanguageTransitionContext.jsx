import React, { createContext, useContext, useRef } from 'react';

const LanguageTransitionContext = createContext(null);

export function LanguageTransitionProvider({ children }) {
    // triggerRef holds the function exposed by the overlay component
    const triggerRef = useRef(null);

    const triggerTransition = (targetPath, newLangLabel) => {
        if (triggerRef.current) {
            triggerRef.current(targetPath, newLangLabel);
        }
    };

    const registerTrigger = (fn) => {
        triggerRef.current = fn;
    };

    return (
        <LanguageTransitionContext.Provider value={{ triggerTransition, registerTrigger }}>
            {children}
        </LanguageTransitionContext.Provider>
    );
}

export function useLanguageTransition() {
    return useContext(LanguageTransitionContext);
}
