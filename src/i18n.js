import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
    en: {
        translation: en
    },
    de: {
        translation: de
    }
};

const getInitialLanguage = () => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        if (path === '/de' || path.startsWith('/de/')) {
            return 'de';
        }
    }
    return 'en'; // Default
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getInitialLanguage(),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already safes from XSS
        },
        react: {
            useSuspense: false // Important for SSG
        }
    });

export default i18n;
