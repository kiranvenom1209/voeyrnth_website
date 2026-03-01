
import Home from '../pages/Home';
import Platform from '../pages/Platform';
import Solutions from '../pages/Solutions';
import Design from '../pages/Design';
import Security from '../pages/Security';
import About from '../pages/About';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Systeme from '../pages/Systeme';
import OS from '../pages/OS';
import Automations from '../pages/Automations';
import PrivateEstates from '../pages/PrivateEstates';
import Penthouses from '../pages/Penthouses';
import Superyachts from '../pages/Superyachts';
import IndustrialSuites from '../pages/IndustrialSuites';
import Energy from '../pages/Energy';
import PrivateAccess from '../pages/PrivateAccess';
import DataSovereignty from '../pages/DataSovereignty';
import Process from '../pages/Process';
import Specs from '../pages/Specs';
import Architecture from '../pages/Architecture';
import ProofCommissioning from '../pages/ProofCommissioning';
import ProofIndex from '../pages/ProofIndex';
import ProofReleasePolicy from '../pages/ProofReleasePolicy';
import ProofAuditLog from '../pages/ProofAuditLog';
import Hardware from '../pages/Hardware';
import Protocols from '../pages/Protocols';
import SecurityModel from '../pages/SecurityModel';
import Pilot from '../pages/Pilot';
import NotFound from '../pages/NotFound';

export const routes = {
    '/': { component: Home, preload: ['/assets/home_hero_bg.webp'] },
    '/platform': { component: Platform, preload: ['/assets/platform_hero_bg.webp'] },
    '/solutions': { component: Solutions, preload: ['/assets/solutions_hero_bg.webp'] },
    '/design': { component: Design, preload: ['/assets/design_hero_bg.webp'] },
    '/security': { component: Security, preload: ['/assets/security_hero.webp'] },
    '/about': { component: About, preload: ['/assets/about_hero_bg.webp'] },
    '/pricing': { component: Pricing, preload: ['/assets/pricing_hero_bg.webp'] },
    '/contact': { component: Contact, preload: ['/assets/contact_hero_bg.webp'] },
    '/systeme': { component: Systeme, preload: ['/assets/systeme_hero_bg.webp'] },
    '/os': { component: OS, preload: ['/assets/os_hero_bg.webp'] },
    '/automations': { component: Automations, preload: ['/assets/automations_hero_bg.webp'] },
    '/private-estates': { component: PrivateEstates, preload: ['/assets/estates_hero.webp'] },
    '/penthouses': { component: Penthouses, preload: ['/assets/penthouse_hero.webp'] },
    '/superyachts': { component: Superyachts, preload: ['/assets/yacht_hero.webp'] },
    '/industrial-suites': { component: IndustrialSuites, preload: ['/assets/industrial_hero.webp'] },
    '/energy': { component: Energy, preload: ['/assets/energy_hero.webp'] },
    '/private-access': { component: PrivateAccess, preload: ['/assets/private_access_hero.webp'] },
    '/data-sovereignty': { component: DataSovereignty, preload: ['/assets/sovereignty_hero_bg.webp'] },
    '/process': { component: Process, preload: ['/assets/process_hero_bg.webp'] },
    '/specs': { component: Specs, preload: ['/assets/specs_hero_bg.webp'] },
    '/architecture': { component: Architecture, preload: [] },
    '/proof/commissioning': { component: ProofCommissioning, preload: [] },
    '/proof': { component: ProofIndex, preload: [] },
    '/proof/release-policy': { component: ProofReleasePolicy, preload: [] },
    '/proof/audit-log': { component: ProofAuditLog, preload: [] },
    '/hardware': { component: Hardware, preload: [] },
    '/protocols': { component: Protocols, preload: [] },
    '/security/model': { component: SecurityModel, preload: [] },
    '/pilot': { component: Pilot, preload: [] },
    '*': { component: NotFound, preload: ['/assets/home_hero_bg.webp'] }
};
