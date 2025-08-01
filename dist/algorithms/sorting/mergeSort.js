"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mergeSort;
function merge(arr, left, mid, right) {
    let leftPointer = left;
    let rightPointer = mid + 1;
    const auxArray = [];
    while (leftPointer <= mid && rightPointer <= right) {
        if (arr[leftPointer] <= arr[rightPointer]) {
            auxArray.push(arr[leftPointer]);
            leftPointer++;
        }
        else {
            auxArray.push(arr[rightPointer]);
            rightPointer++;
        }
    }
    while (leftPointer <= mid) {
        auxArray.push(arr[leftPointer]);
        leftPointer++;
    }
    while (rightPointer <= right) {
        auxArray.push(arr[rightPointer]);
        rightPointer++;
    }
    for (let i = left; i <= right; i++) {
        arr[i] = auxArray[i - left];
    }
}
function recursion(arr, left, right) {
    if (left >= right) {
        return;
    }
    let mid = Math.floor((left + right) / 2);
    recursion(arr, left, mid);
    recursion(arr, mid + 1, right);
    merge(arr, left, mid, right);
}
function mergeSort(arr) {
    recursion(arr, 0, arr.length - 1);
    return arr;
}
// Divide and Conquer, Multiple Recursion
// Time complexity = O(nlog(n))
// Space Complexity = O(n)
