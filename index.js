'use strict'

let target = process.version.match(/^v(\d+)/)[1];
const cvloader = target < 14 ? require('./src/opencvasm') : require('./src/opencvwasmthreads')
let cv;
// eslint-disable-next-line no-unused-vars
const Module = { // this is required by opencv.js
  onRuntimeInitialized() {
    console.log('runtime initialized')
  }
}
const initialize = async function() {
  if (!cv) { cv = await cvloader; }
  return cv;
}

module.exports = initialize();