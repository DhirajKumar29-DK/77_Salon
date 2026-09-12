const Jimp = require('jimp');

async function removeBg() {
  try {
    const image = await Jimp.read('c:/Users/dhira/OneDrive/Desktop/Salon/public/logo-new.png');
    
    // Sample the top-left pixel as the background color
    const bgHex = image.getPixelColor(0, 0);
    const bgR = (bgHex >> 24) & 255;
    const bgG = (bgHex >> 16) & 255;
    const bgB = (bgHex >> 8) & 255;

    const threshold = 40; // Tolerance for dark blue background

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Check if pixel is close to background color
      if (Math.abs(r - bgR) <= threshold && Math.abs(g - bgG) <= threshold && Math.abs(b - bgB) <= threshold) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
      }
    });

    await image.writeAsync('c:/Users/dhira/OneDrive/Desktop/Salon/public/logo-transparent.png');
    console.log("Background removed successfully!");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBg();
