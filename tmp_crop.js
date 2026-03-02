const fs = require('fs');
const path = require('path');

async function run() {
    const jimpReq = require('jimp');

    // Support Jimp v1+ or v0.x
    const Jimp = jimpReq.Jimp || jimpReq;
    const intToRGBA = Jimp.intToRGBA || jimpReq.intToRGBA;

    const tabletDir = path.join(__dirname, 'public/assets/os/tablet');
    const files = fs.readdirSync(tabletDir)
        .filter(f => f.endsWith('.png'))
        .map(f => path.join(tabletDir, f));
    files.push(path.join(__dirname, 'public/assets/os/Security.png'));

    let globalMaxY = 0;

    // Pass 1: find max Y across all images
    for (const file of files) {
        console.log('Analyzing', path.basename(file));
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

                // Content threshold
                if (rgb.r > 15 || rgb.g > 15 || rgb.b > 15) {
                    maxY = y;
                    break outer;
                }
            }
        }

        console.log(' -> Content ends at y =', maxY);
        if (maxY > globalMaxY) globalMaxY = maxY;
    }

    // Add 80 pixels padding to the bottom
    const cropHeight = globalMaxY + 80;
    console.log('\nGlobal max UI Y:', globalMaxY);
    console.log('New uniform crop height:', cropHeight, '\n');

    // Pass 2: crop
    for (const file of files) {
        const img = await Jimp.read(file);
        if (img.bitmap.height > cropHeight) {
            console.log('Cropping & Saving', path.basename(file));

            // v0 crop takes (x, y, w, h)
            // v1 crop takes { x, y, w, h }
            try {
                img.crop(0, 0, img.bitmap.width, cropHeight);
            } catch (e) {
                // fall back to v1 syntax
                img.crop({ x: 0, y: 0, w: img.bitmap.width, h: cropHeight });
            }

            if (typeof img.writeAsync === 'function') {
                await img.writeAsync(file);
            } else {
                img.write(file);
                // in v0 `.write` uses a callback, but we can just use writeAsync
                // if it's not defined, it might be an older callback version, 
                // but jimp v0.22 has writeAsync.
            }
        } else {
            console.log('Skipping', path.basename(file), '- height is already', img.bitmap.height);
        }
    }
    console.log('Done!');
}

run().catch(console.error);
