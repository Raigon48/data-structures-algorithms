"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotateArray_1 = require("./rotateArray");
describe("rotateLeftByOnePlace", () => {
    test("should rotate array left by one place", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
    });
    test("should handle array with two elements", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([1, 2])).toEqual([2, 1]);
    });
    test("should handle single element array", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([1])).toEqual([1]);
    });
    test("should handle empty array", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([])).toEqual([]);
    });
    test("should handle array with duplicate elements", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([1, 1, 1])).toEqual([1, 1, 1]);
    });
    test("should handle array with negative numbers", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([-1, -2, -3])).toEqual([-2, -3, -1]);
    });
    test("should handle array with mixed positive and negative numbers", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([-1, 2, -3, 4])).toEqual([2, -3, 4, -1]);
    });
    test("should handle array with zeros", () => {
        expect((0, rotateArray_1.rotateLeftByOnePlace)([0, 1, 0, 2])).toEqual([1, 0, 2, 0]);
    });
    test("should mutate original array", () => {
        const arr = [1, 2, 3];
        const result = (0, rotateArray_1.rotateLeftByOnePlace)(arr);
        expect(arr).toBe(result);
        expect(arr).toEqual([2, 3, 1]);
    });
});
