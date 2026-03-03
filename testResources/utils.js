const sharp = require('sharp');

imageToBuffer = async function(image) {
  console.log('loading image', image)
  image = await sharp(image);
  let meta = await image.metadata();
  let buffer = await image.ensureAlpha().raw().toBuffer();
  return { data: buffer, width: meta.width, height: meta.height }
}

module.exports = {
  imageToBuffer
}