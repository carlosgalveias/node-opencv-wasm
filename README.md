# OpenCV ASM or WASM Wrapper

OpenCV in pure ASM and WASM that can be used without c++ bindings

# Installation

npm install https://eu-de.git.cloud.ibm.com/bluedarwin_public/opencv-asm-or-wasm-wrapper.git

# Usage

```
const cvLoader = require('node-opencv-wasm');
let cv;

// initialize it first
const init = async function(){
    if(cv){
        return cv;
    }
    cv = await cvLoader;
    return cv;
}

// do something
const myCvFunction = async function(){
    await init();
    cv.xxx
    ...
}

```
