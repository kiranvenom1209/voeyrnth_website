import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

export default function SmartLink({ to, children, ...props }) {
    const prefetch = () => {
        // Only prefetch if the current page is fully loaded
        if (document.readyState !== 'complete') return;

        const route = routes[to];
        if (route) {
            // 1. Prefetch Code (JS Chunk)
            // Note: Currently in routes.js, English pages are imported synchronously, 
            // so they are already in the main bundle. Calling route.component() directly
            // throws an Invalid Hook Call error because it executes a functional component
            // outside of the React render cycle. If you ever switch to lazy() for English pages,
            // you'd prefetch like this: if (route.preloadChunk) route.preloadChunk()

            // 2. Prefetch Assets (Images)
            if (route.preload && route.preload.length > 0) {
                const isMobile = window.innerWidth <= 768;

                route.preload.forEach(assetPath => {
                    let finalPath = assetPath;

                    // Intelligent mobile switch
                    // If we are on mobile, and the asset is a known large webp, try to fetch the mobile variant
                    // This relies on the convention that we created _mobile.webp files
                    if (isMobile && assetPath.endsWith('.webp') && !assetPath.includes('_mobile')) {
                        // Insert _mobile before version suffix (e.g., _v2.webp → _mobile_v2.webp)
                        finalPath = assetPath.replace(/(_v\d+)?\.webp$/i, '_mobile$1.webp');
                    }

                    // Create a link tag for preload (preferred modern method)
                    // or just new Image() instantiation
                    const img = new Image();
                    img.src = finalPath;
                    // We don't need to append it to DOM, just processing src warms the cache
                    // especially if cache-control headers are set correctly.
                });
            }
        }
    };

    return (
        <Link
            to={to}
            onMouseEnter={prefetch}
            onTouchStart={prefetch} /* For mobile tap start (faster than click) */
            {...props}
        >
            {children}
        </Link>
    );
}
