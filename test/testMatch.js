'use strict';
/*globals it, describe, should*/
const path = require('path')
const loader = require('../');
const utils = require('../testResources/utils.js')
const assert = require('assert');
let cv;

const init = async function() {
  if (cv) { return cv; }
  cv = await loader;
  console.log('got cv')
  return cv;
}

const imageToCv = async function(image) {
  const imageData = await utils.imageToBuffer(image);
  const mat = cv.matFromImageData(imageData);
  return mat;
}

describe('@testMatch', function() {
  it('Should Load Image', async function() {
    await init()
    let img1 = null;
    try {
      img1 = await imageToCv(path.join(__dirname, '../testResources/car1.jpg'))
    } catch (e) {
      console.error(e);
    }
    assert.equal(img1.rows, 680)
    assert.equal(img1.cols, 1024)
  });
})