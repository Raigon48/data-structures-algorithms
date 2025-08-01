"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLeftByOnePlace = rotateLeftByOnePlace;
function rotateLeftByOnePlace(arr) {
    for (let i = 1; i < arr.length; i++) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
    return arr;
}
