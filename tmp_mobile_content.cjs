const fs = require('fs');
const path = require('path');

async function run() {
    const jimpReq = require('jimp');
    const Jimp = jimpReq.Jimp || jimpReq;
    const intToRGBA = Jimp.intToRGBA || jimpReq.intToRGBA;

    const mobileDir = path.join(__dirname, 'public/assets/os/mobile');
    const files = fs.readdirSync(mobileDir)
        .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
        .map(f => path.join(mobileDir, f));

    let minContentRatio = 999;
    let maxContentRatio = 0;

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
        let maxY = 0;

        outer: for (let y = h - 1; y >= 0; y--) {
            for (let x = 0; x < w; x++) {
                const hex = img.getPixelColor(x, y);

                let rgb;
                if (typeof intToRGBA === 'function') {
                    rgb = intToRGBA(hex);
                } else {
                    rgb = {
                        r: (hex >> 24) & 255,
                        g: (hex >> 16) & 255,
                        b: (hex >> 8) & 255,
                        a: hex & 255
                    };
                }

                // Content threshold (mobile backgrounds might have a slight gradient, 
                // so let's allow up to #151515, which is rgb(21, 21, 21)
                // Actually the background is #0A0A0A or similar.
                if (rgb.r > 20 || rgb.g > 20 || rgb.b > 20) {
                    maxY = y;
                    break outer;
                }
            }
        }

        // Let's print the actual content height and its ratio
        const contentHeight = Math.min(maxY + 40, h); // add 40px padding
        const ratio = w / contentHeight;

        console.log(`${path.basename(file)}: ${w}x${contentHeight} (Ratio: ${ratio.toFixed(4)})`);

        if (ratio > maxContentRatio) maxContentRatio = ratio;
        if (ratio < minContentRatio) minContentRatio = ratio;
    }

    console.log('\nShortest content proportion (largest W/H ratio):', maxContentRatio.toFixed(4));
}

run().catch(console.error);
