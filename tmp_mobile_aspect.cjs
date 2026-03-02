const fs = require('fs');
const path = require('path');

async function run() {
    const jimpReq = require('jimp');
    const Jimp = jimpReq.Jimp || jimpReq;

    const mobileDir = path.join(__dirname, 'public/assets/os/mobile');
    const files = fs.readdirSync(mobileDir)
        .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
        .map(f => path.join(mobileDir, f));

    let maxRatio = 0; // max width/height ratio (shortest image)
    let minRatio = 999;

    for (const file of files) {
        let img;
        try {
            img = await Jimp.read(file);
        } catch (e) {
            console.error('Failed to read', file);
            continue;
        }

        const w = img.bitmap.width;
        const h = img.bitmap.height;
        const ratio = w / h;

        console.log(`${path.basename(file)}: ${w}x${h} (AspectRatio: ${ratio.toFixed(4)})`);

        if (ratio > maxRatio) maxRatio = ratio;
        if (ratio < minRatio) minRatio = ratio;
    }

    console.log('\nShortest image (largest W/H ratio):', maxRatio.toFixed(4));
    console.log('Tallest image (smallest W/H ratio):', minRatio.toFixed(4));
}

run().catch(console.error);
