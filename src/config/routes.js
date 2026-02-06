export const routes = {
    '/': {
        component: () => import('../pages/Home'),
        preload: ['/assets/home_hero_bg.webp']
    },
    '/platform': {
        component: () => import('../pages/Platform'),
        preload: ['/assets/platform_hero_bg.webp']
    },
    '/solutions': {
        component: () => import('../pages/Solutions'),
        preload: ['/assets/solutions_hero_bg.webp']
    },
    '/design': {
        component: () => import('../pages/Design'),
        preload: ['/assets/design_hero_bg.webp']
    },
    '/security': {
        component: () => import('../pages/Security'),
        preload: ['/assets/security_hero.webp']
    },
    '/about': {
        component: () => import('../pages/About'),
        preload: ['/assets/about_hero_bg.webp']
    },
    '/pricing': {
        component: () => import('../pages/Pricing'),
        preload: ['/assets/pricing_hero_bg.webp']
    },
    '/contact': {
        component: () => import('../pages/Contact'),
        preload: ['/assets/contact_hero_bg.webp']
    },
    '/systeme': {
        component: () => import('../pages/Systeme'),
        preload: ['/assets/systeme_hero_bg.webp']
    },
    '/os': {
        component: () => import('../pages/OS'),
        preload: ['/assets/os_hero_bg.webp']
    },
    '/automations': {
        component: () => import('../pages/Automations'),
        preload: ['/assets/automations_hero_bg.webp']
    },
    '/private-estates': {
        component: () => import('../pages/PrivateEstates'),
        preload: ['/assets/estates_hero.webp']
    },
    '/penthouses': {
        component: () => import('../pages/Penthouses'),
        preload: ['/assets/penthouse_hero.webp']
    },
    '/superyachts': {
        component: () => import('../pages/Superyachts'),
        preload: ['/assets/yacht_hero.webp']
    },
    '/industrial-suites': {
        component: () => import('../pages/IndustrialSuites'),
        preload: ['/assets/industrial_hero.webp']
    },
    '/energy': {
        component: () => import('../pages/Energy'),
        preload: ['/assets/energy_hero.webp']
    },
    '/private-access': {
        component: () => import('../pages/PrivateAccess'),
        preload: ['/assets/private_access_hero.webp']
    },
    '/data-sovereignty': {
        component: () => import('../pages/DataSovereignty'),
        preload: ['/assets/sovereignty_hero_bg.webp']
    },
    '/process': {
        component: () => import('../pages/Process'),
        preload: ['/assets/process_hero_bg.webp']
    },
    '/specs': {
        component: () => import('../pages/Specs'),
        preload: ['/assets/specs_hero_bg.webp']
    },
    '*': {
        component: () => import('../pages/NotFound'),
        preload: ['/assets/home_hero_bg.webp'] // Fallback
    }
};
