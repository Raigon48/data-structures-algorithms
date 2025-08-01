"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLargest = findLargest;
exports.findSmallest = findSmallest;
function findLargest(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
function findSmallest(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i];
        }
    }
    return result;
}
