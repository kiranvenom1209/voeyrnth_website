import { useRegisterSW } from 'virtual:pwa-register/react';
import { useEffect } from 'react';

function ReloadPrompt() {
    const {
        needRefresh: [needRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl, r) {
            // Periodically check for updates every 60 minutes in production
            if (r && import.meta.env.PROD) {
                setInterval(() => r.update(), 60 * 60 * 1000);
            }
        },
        onRegisterError(error) {
            console.error('SW registration error', error);
        },
    });

    // Auto-apply updates silently whenever a new version is detected
    useEffect(() => {
        if (needRefresh) {
            updateServiceWorker(true);
        }
    }, [needRefresh, updateServiceWorker]);

    return null; // No visible UI
}

export default ReloadPrompt;
