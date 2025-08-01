"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moveZeroesToEnd_1 = require("./moveZeroesToEnd");
describe("moveZeroesToEnd", () => {
    it("should move all zeros to the end while maintaining order of non-zero elements", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([1, 0, 2, 0, 3, 0])).toEqual([1, 2, 3, 0, 0, 0]);
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    });
    it("should handle array with no zeros", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle array with all zeros", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    });
    it("should handle empty array", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([])).toEqual([]);
    });
    it("should handle single element array with zero", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([0])).toEqual([0]);
    });
    it("should handle single element array with non-zero", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([5])).toEqual([5]);
    });
    it("should handle array with zeros at the beginning", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([0, 0, 1, 2, 3])).toEqual([1, 2, 3, 0, 0]);
    });
    it("should handle array with zeros at the end", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([1, 2, 3, 0, 0])).toEqual([1, 2, 3, 0, 0]);
    });
    it("should handle array with negative numbers", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([-1, 0, -2, 0, 3])).toEqual([-1, -2, 3, 0, 0]);
    });
    it("should handle array with consecutive zeros", () => {
        expect((0, moveZeroesToEnd_1.moveZeroesToEnd)([1, 0, 0, 0, 2, 3])).toEqual([1, 2, 3, 0, 0, 0]);
    });
});
