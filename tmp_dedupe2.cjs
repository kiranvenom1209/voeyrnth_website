const fs = require('fs');
const path = require('path');

async function run() {
    const jimpReq = require('jimp');
    const Jimp = jimpReq.Jimp || jimpReq;
    const intToRGBA = Jimp.intToRGBA || jimpReq.intToRGBA;

    const mobileDir = path.join(__dirname, 'public/assets/os/mobile');
    const files = fs.readdirSync(mobileDir)
        .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
        .sort();

    console.log('Reading ' + files.length + ' images...');
    const images = [];
    for (const f of files) {
        let img = await Jimp.read(path.join(mobileDir, f));

        // Resize them to 200x200 for extremely fast rough comparison
        if (typeof img.resize === 'function') {
            img.resize(200, 200);
        } else {
            console.log("cannot resize");
        }

        images.push({
            name: f,
            img: img
        });
    }

    const toRemove = new Set();

    for (let i = 0; i < images.length; i++) {
        if (toRemove.has(images[i].name)) continue;

        for (let j = i + 1; j < images.length; j++) {
            if (toRemove.has(images[j].name)) continue;

            // Calculate pixel diff percentage manual
            let diffPixels = 0;
            const w = 200;
            const h = 200;

            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const hex1 = images[i].img.getPixelColor(x, y);
                    const hex2 = images[j].img.getPixelColor(x, y);

                    let rgb1 = typeof intToRGBA === 'function' ? intToRGBA(hex1) : { r: (hex1 >> 24) & 255, g: (hex1 >> 16) & 255, b: (hex1 >> 8) & 255 };
                    let rgb2 = typeof intToRGBA === 'function' ? intToRGBA(hex2) : { r: (hex2 >> 24) & 255, g: (hex2 >> 16) & 255, b: (hex2 >> 8) & 255 };

                    const diffR = Math.abs(rgb1.r - rgb2.r);
                    const diffG = Math.abs(rgb1.g - rgb2.g);
                    const diffB = Math.abs(rgb1.b - rgb2.b);

                    if (diffR > 10 || diffG > 10 || diffB > 10) diffPixels++;
                }
            }

            const diffPercent = diffPixels / (w * h);

            if (diffPercent < 0.05) { // less than 5% different pixels
                console.log(`[DUPLICATE MATCH] ${images[j].name} is ${(100 - diffPercent * 100).toFixed(2)}% identical to ${images[i].name}`);
                toRemove.add(images[j].name);
            }
        }
    }

    console.log('\n--- Keep files ---');
    files.filter(f => !toRemove.has(f)).forEach(f => console.log(f));

    console.log('\n--- Removing files ---');
    toRemove.forEach(f => console.log(f));
}

run().catch(console.error);
