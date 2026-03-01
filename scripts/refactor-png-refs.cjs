const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/pages');

function processDirectory(directory) {
    if (!fs.existsSync(directory)) return;

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (path.extname(file) === '.jsx') {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Regex to find /assets/....png and replace with .webp
            // We be careful not to touch SEO.jsx which is in components, but this script only scans pages.

            // Check if file has png refs
            if (content.includes('.png')) {
                console.log(`Updating refs in ${file}...`);
                const newContent = content.replace(/\/assets\/([^"']*)\.png/g, '/assets/$1.webp');
                if (newContent !== content) {
                    fs.writeFileSync(fullPath, newContent, 'utf8');
                }
            }
        }
    }
}

console.log('Starting refactor of PNG references in pages...');
processDirectory(srcDir);

// Also handle Home.jsx specifically if it was missed or other paths
const homePath = path.join(srcDir, 'Home.jsx');
// (It's covered by loop, but good to double check via logs).

console.log('Refactor complete.');
