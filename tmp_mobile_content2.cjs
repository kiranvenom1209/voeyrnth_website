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

        // Skip bottom 70 pixels to avoid Android Navigation Bar
        const searchStartY = h - 70;

        outer: for (let y = searchStartY; y >= 0; y--) {
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

                // Content threshold - allow up to rgb(30, 30, 30) for noise
                if (rgb.r > 30 || rgb.g > 30 || rgb.b > 30) {
                    maxY = y;
                    break outer;
                }
            }
        }

        console.log(`${path.basename(file)}:\tOrig: ${w}x${h}\tContent End: y=${maxY}`);
    }
}

run().catch(console.error);
