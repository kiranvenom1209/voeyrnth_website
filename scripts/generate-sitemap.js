import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOMAIN = 'https://voerynth.de';

const routes = [
    '/',
    '/de',
    '/de/about',
    '/de/platform',
    '/de/solutions',
    '/de/security',
    '/de/pricing',
    '/de/contact',
    '/de/private-estates',
    '/de/penthouses',
    '/de/superyachts',
    '/de/industrial-suites',
    '/de/energy',
    '/de/architecture',
    '/de/design',
    '/de/systeme',
    '/de/os',
    '/de/automations',
    '/de/private-access',
    '/de/data-sovereignty',
    '/de/process',
    '/de/specs',
    '/de/hardware',
    '/de/protocols',
    '/de/security/model',
    '/de/pilot',
    '/de/proof',
    '/de/proof/commissioning',
    '/de/proof/release-policy',
    '/de/proof/audit-log',
    '/platform',
    '/solutions',
    '/design',
    '/security',
    '/about',
    '/pricing',
    '/contact',
    '/systeme',
    '/os',
    '/automations',
    '/private-estates',
    '/penthouses',
    '/superyachts',
    '/industrial-suites',
    '/energy',
    '/private-access',
    '/data-sovereignty',
    '/process',
    '/specs',
    '/architecture',
    '/hardware',
    '/protocols',
    '/security/model',
    '/pilot',
    '/proof',
    '/proof/commissioning',
    '/proof/release-policy',
    '/proof/audit-log'
];

function generateSitemap() {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
        // Ensure trailing slash for all non-root routes
        const path = route === '/' ? '/' : `${route}/`;
        const url = `${DOMAIN}${path}`;
        const today = new Date().toISOString().split('T')[0];

        // Assign priorities based on depth/core pages
        let priority = '0.8';
        if (route === '/' || route === '/de') priority = '1.0';
        else if (['/platform', '/solutions', '/pricing', '/contact', '/private-access', '/pilot'].includes(route)) priority = '0.9';
        else if (['/de/about', '/de/platform', '/de/solutions', '/de/pricing', '/de/contact', '/de/security'].includes(route)) priority = '0.85';
        else if (route.startsWith('/de/')) priority = '0.75';
        else if (route.startsWith('/proof')) priority = '0.7';

        return `    <url>
        <loc>${url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route === '/' || route === '/pricing' ? 'daily' : 'weekly'}</changefreq>
        <priority>${priority}</priority>
    </url>`;
    }).join('\n')}
</urlset>`;

    const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemapContent);
    console.log(`Sitemap generated at ${outputPath}`);
}

generateSitemap();
