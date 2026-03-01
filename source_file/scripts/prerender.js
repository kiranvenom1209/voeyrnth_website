
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routesToPrerender = [
    '/',
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
    '/404'
];

async function prerender() {
    const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    const { render } = await import('../dist/server/entry-server.js');

    console.log(`Prerendering ${routesToPrerender.length} routes...`);

    for (const url of routesToPrerender) {
        try {
            const context = {};
            const appHtml = await render(url, context);
            const { helmet } = context;

            let html = template.replace(`<!--app-html-->`, appHtml);

            // Inject Helmet metadata if available
            if (helmet) {
                const helmetTitle = helmet.title.toString();
                const helmetMeta = helmet.meta.toString();
                const helmetLink = helmet.link.toString();

                html = html.replace('</head>', `${helmetTitle}${helmetMeta}${helmetLink}</head>`);
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
            console.log(`Rendered: ${url}`);
        } catch (e) {
            console.error(`Error rendering ${url}:`, e);
        }
    }
}

prerender();
