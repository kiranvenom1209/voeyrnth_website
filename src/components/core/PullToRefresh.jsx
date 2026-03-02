import React, { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

export default function PullToRefresh({ children }) {
    const [pullDistance, setPullDistance] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isAnimatingBack, setIsAnimatingBack] = useState(false);

    const pullThreshold = 80;
    const startY = useRef(0);
    const currentY = useRef(0);
    const isPulling = useRef(false);
    const containerRef = useRef(null);

    const clearAllCacheAndReload = async () => {
        setIsRefreshing(true);
        try {
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (let registration of registrations) {
                    await registration.unregister();
                }
            }
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
            }

            const currentLang = localStorage.getItem('i18nextLng');

            localStorage.clear();
            sessionStorage.clear();

            if (currentLang) {
                localStorage.setItem('i18nextLng', currentLang);
            }

            setTimeout(() => {
                window.location.reload(true);
            }, 500);
        } catch (error) {
            console.error('Error clearing cache:', error);
            window.location.reload(true);
        }
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleTouchStart = (e) => {
            if (window.scrollY === 0) {
                startY.current = e.touches[0].clientY;
                isPulling.current = true;
                setIsAnimatingBack(false);
            } else {
                isPulling.current = false;
            }
        };

        const handleTouchMove = (e) => {
            if (!isPulling.current || window.scrollY > 0) return;

            currentY.current = e.touches[0].clientY;
            const distance = currentY.current - startY.current;

            if (distance > 0) {
                // Apply resistance
                const pull = Math.min(distance * 0.4, pullThreshold + 20);
                setPullDistance(pull);

                // Prevent scrolling while pulling down
                if (e.cancelable) {
                    e.preventDefault();
                }
            } else {
                setPullDistance(0);
            }
        };

        const handleTouchEnd = () => {
            if (!isPulling.current) return;
            isPulling.current = false;

            setPullDistance(prev => {
                if (prev >= pullThreshold) {
                    clearAllCacheAndReload();
                    return pullThreshold;
                }
                setIsAnimatingBack(true);
                return 0;
            });
        };

        el.addEventListener('touchstart', handleTouchStart, { passive: true });
        el.addEventListener('touchmove', handleTouchMove, { passive: false });
        el.addEventListener('touchend', handleTouchEnd, { passive: true });

        // Disable native pull-to-refresh
        document.body.style.overscrollBehaviorY = 'none';
        document.documentElement.style.overscrollBehaviorY = 'none';

        return () => {
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('touchmove', handleTouchMove);
            el.removeEventListener('touchend', handleTouchEnd);
            document.body.style.overscrollBehaviorY = 'auto';
            document.documentElement.style.overscrollBehaviorY = 'auto';
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full relative min-h-[100dvh]">
            <AnimatePresence>
                {(pullDistance > 0 || isRefreshing) && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 w-full flex items-end justify-center z-[9999] pointer-events-none"
                        style={{ height: isRefreshing ? pullThreshold : pullDistance, paddingBottom: '1.5rem' }}
                    >
                        <m.div
                            style={{ opacity: Math.min(pullDistance / (pullThreshold * 0.5), 1) }}
                            className="flex flex-col items-center gap-3"
                        >
                            <m.div
                                animate={isRefreshing ? { rotate: 360 } : { rotate: pullDistance * 3 }}
                                transition={isRefreshing ? { repeat: Infinity, duration: 1, ease: "linear" } : { duration: 0 }}
                                className="text-[#C9A961]"
                            >
                                <RefreshCw size={24} className="opacity-80" />
                            </m.div>
                            <span className="text-[10px] uppercase tracking-widest text-[#C9A961]/80 font-light drop-shadow-md">
                                {isRefreshing ? 'Purging Cache...' : 'Pull to refresh'}
                            </span>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>

            <div
                style={{
                    transform: `translateY(${isRefreshing ? pullThreshold : pullDistance}px)`,
                    transition: isAnimatingBack ? 'transform 0.3s ease-out' : 'none',
                    willChange: 'transform'
                }}
                className="w-full h-full relative"
            >
                {children}
            </div>
        </div>
    );
}
