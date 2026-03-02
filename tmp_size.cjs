const fs = require('fs');
const path = require('path');

const mobileDir = path.join(__dirname, 'public/assets/os/mobile');
const files = fs.readdirSync(mobileDir)
    .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
    .sort();

console.log("Analyzing file sizes to find duplicates...");

let lastSize = 0;
for (const file of files) {
    const stats = fs.statSync(path.join(mobileDir, file));
    const size = stats.size;

    // If the file size is within 3% of the last file, it's likely a duplicate frame
    let isDupe = false;
    if (lastSize > 0) {
        const diff = Math.abs(size - lastSize) / lastSize;
        if (diff < 0.03) {
            isDupe = true;
        }
    }

    console.log(`${file}: ${size} bytes ${isDupe ? ' [DUPLICATE]' : ''}`);
    lastSize = size;
}
