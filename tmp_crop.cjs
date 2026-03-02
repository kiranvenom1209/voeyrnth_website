const fs = require('fs');
const path = require('path');

async function run() {
    const jimpReq = require('jimp');
    const Jimp = jimpReq.Jimp || jimpReq;

    const tabletDir = path.join(__dirname, 'public/assets/os/tablet');
    const files = fs.readdirSync(tabletDir)
        .filter(f => f.endsWith('.png'))
        .map(f => path.join(tabletDir, f));
    files.push(path.join(__dirname, 'public/assets/os/Security.png'));

    let maxRatio = 0; // max width/height ratio (shortest image)
    let minRatio = 999;

    for (const file of files) {
        let img;
        try {
            img = await Jimp.read(file);
        } catch (e) {
            continue;
        }

        const w = img.bitmap.width;
        const h = img.bitmap.height;
        const ratio = w / h;

        console.log(`${path.basename(file)}: ${w}x${h} (AspectRatio: ${ratio.toFixed(3)})`);

        if (ratio > maxRatio) maxRatio = ratio;
        if (ratio < minRatio) minRatio = ratio;
    }

    console.log('\nShortest image (largest W/H ratio):', maxRatio.toFixed(3));
    console.log('Tallest image (smallest W/H ratio):', minRatio.toFixed(3));
}

run().catch(console.error);
