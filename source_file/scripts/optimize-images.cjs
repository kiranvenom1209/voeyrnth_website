const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '../public/assets');

async function processImages() {
    if (!fs.existsSync(assetsDir)) {
        console.error('Assets directory not found:', assetsDir);
        return;
    }

    const files = fs.readdirSync(assetsDir);

    for (const file of files) {
        if (path.extname(file).toLowerCase() === '.png') {
            const inputPath = path.join(assetsDir, file);
            const fileName = path.parse(file).name;

            // 1. Convert to WebP (Desktop/Default)
            // Quality 85 is usually a good balance.
            const webpPath = path.join(assetsDir, `${fileName}.webp`);

            if (!fs.existsSync(webpPath)) {
                console.log(`Converting ${file} to WebP...`);
                await sharp(inputPath)
                    .webp({ quality: 85 })
                    .toFile(webpPath);
            } else {
                console.log(`Skipping ${file} -> WebP (already exists)`);
            }

            // 2. Generate Mobile Version (WebP, resized)
            // Focus on background images and cards which are usually large.
            // A width of 600px is decent for mobile backgrounds/cards.
            const mobileWebpPath = path.join(assetsDir, `${fileName}_mobile.webp`);

            // Only generate mobile for larger images to save time/space
            const metadata = await sharp(inputPath).metadata();

            if (metadata.width > 600) {
                if (!fs.existsSync(mobileWebpPath)) {
                    console.log(`Generated mobile version for ${file}...`);
                    await sharp(inputPath)
                        .resize({ width: 600, withoutEnlargement: true })
                        .webp({ quality: 80 })
                        .toFile(mobileWebpPath);
                } else {
                    console.log(`Skipping mobile version for ${file} (already exists)`);
                }
            }
        }
    }
    console.log('Image optimization complete.');
}

processImages().catch(err => {
    console.error('Error processing images:', err);
    process.exit(1);
});
