import { useEffect } from 'react';

/**
 * CacheBuster — rides the new JS bundle (which propagates automatically
 * via hashed filenames) to programmatically purge all stale Service Worker
 * caches. This forces the browser to re-fetch images from the server.
 *
 * Bump CACHE_VERSION on every deploy that changes static assets.
 * The component runs once per version, then sets a localStorage flag
 * to prevent reload loops.
 */
const CACHE_VERSION = '2026-02-27-v3';

export default function CacheBuster() {
    useEffect(() => {
        const storedVersion = localStorage.getItem('voerynth-cache-v');
        if (storedVersion === CACHE_VERSION) return; // Already up to date

        // Purge ALL Service Worker caches (assets-cache, images-cache, precache, etc.)
        if ('caches' in window) {
            caches.keys().then(names => {
                Promise.all(names.map(name => caches.delete(name))).then(() => {
                    localStorage.setItem('voerynth-cache-v', CACHE_VERSION);
                    // Force a clean reload so the browser fetches fresh images
                    // from the server (now served with must-revalidate headers)
                    window.location.reload();
                });
            });
        } else {
            // Browser doesn't support Cache API — just mark as done
            localStorage.setItem('voerynth-cache-v', CACHE_VERSION);
        }
    }, []);

    return null; // No visible UI
}
