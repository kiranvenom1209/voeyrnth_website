const fs = require('fs');
const path = require('path');

async function run() {
    const jimpReq = require('jimp');
    const Jimp = jimpReq.Jimp || jimpReq;

    const mobileDir = path.join(__dirname, 'public/assets/os/mobile');
    const files = fs.readdirSync(mobileDir)
        .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
        .sort(); // sort alphabetically to compare in sequential capture order

    const images = [];
    for (const f of files) {
        images.push({
            name: f,
            path: path.join(mobileDir, f),
            img: await Jimp.read(path.join(mobileDir, f))
        });
    }

    const toRemove = new Set();

    for (let i = 0; i < images.length; i++) {
        if (toRemove.has(images[i].name)) continue;

        for (let j = i + 1; j < images.length; j++) {
            if (toRemove.has(images[j].name)) continue;

            // Check dimension match first to speed up
            if (images[i].img.bitmap.width !== images[j].img.bitmap.width ||
                images[i].img.bitmap.height !== images[j].img.bitmap.height) {
                continue;
            }

            // Calculate distance/diff
            try {
                // Jimp.diff compares two images of the same size
                const diff = Jimp.diff(images[i].img, images[j].img, 0.1);
                // diff.percent is between 0 and 1. If it's very small (< 0.05), they are very similar.

                if (diff.percent < 0.05) {
                    console.log(`[SIMILAR MATCH] ${images[i].name} is ${((1 - diff.percent) * 100).toFixed(2)}% similar to ${images[j].name}`);
                    toRemove.add(images[j].name);
                }
            } catch (e) {
                // Ignore errors if size mismatch slipped through
            }
        }
    }

    console.log('\n--- Duplicate files to exclude from gallery ---');
    toRemove.forEach(f => console.log(f));

    console.log('\n--- Keep files ---');
    files.filter(f => !toRemove.has(f)).forEach(f => console.log(f));
}

run().catch(console.error);
