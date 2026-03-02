
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routesToPrerender = [
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
    '/de/case-studies/ayanthiara-chitrakoot',
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
    '/proof/audit-log',
    '/case-studies/ayanthiara-chitrakoot',
    '/404'
];

async function prerender() {
    const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    const { render } = await import('../dist/server/entry-server.js');

    console.log(`Prerendering ${routesToPrerender.length} routes...`);

    for (const url of routesToPrerender) {
        try {
            // helmetContext is the object HelmetProvider writes into during SSR.
            // After render(), helmetContext.helmet holds all the meta tags.
            const helmetContext = {};
            const appHtml = await render(url, helmetContext);
            const { helmet } = helmetContext;

            let html = template.replace(`<!--app-html-->`, appHtml);

            // Inject Helmet metadata into <head>
            if (helmet) {
                const helmetTitle = helmet.title.toString();
                const helmetMeta = helmet.meta.toString();
                const helmetLink = helmet.link.toString();
                const helmetScript = helmet.script.toString();
                const helmetHtmlAttr = helmet.htmlAttributes.toString();

                html = html.replace('</head>', `${helmetTitle}${helmetMeta}${helmetLink}${helmetScript}</head>`);

                if (helmetHtmlAttr) {
                    html = html.replace(/<html[^>]*>/, `<html ${helmetHtmlAttr}>`);
                }
            }

            let filePath;
            if (url === '/') {
                filePath = '../dist/index.html';
            } else if (url === '/404') {
                filePath = '../dist/404.html';
            } else {
                filePath = `../dist${url}/index.html`;
            }
            const fullPath = path.resolve(__dirname, filePath);
            const dir = path.dirname(fullPath);

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(fullPath, html);
            console.log(`  ✓ ${url}`);
        } catch (e) {
            console.error(`  ✗ ${url}:`, e.message);
        }
    }

    console.log('Prerendering complete.');
}

prerender();
