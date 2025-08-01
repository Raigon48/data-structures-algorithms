"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insertionSort_1 = __importDefault(require("./insertionSort"));
describe("insertionSort", () => {
    it("should sort an array of positive numbers in ascending order", () => {
        expect((0, insertionSort_1.default)([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });
    it("should handle an empty array", () => {
        expect((0, insertionSort_1.default)([])).toEqual([]);
    });
    it("should handle an array with one element", () => {
        expect((0, insertionSort_1.default)([42])).toEqual([42]);
    });
    it("should sort an array with negative numbers in ascending order", () => {
        expect((0, insertionSort_1.default)([-3, -1, -7, -4])).toEqual([-7, -4, -3, -1]);
    });
    it("should sort an array with mixed positive and negative numbers", () => {
        expect((0, insertionSort_1.default)([3, -2, 7, 0, -5, 2])).toEqual([-5, -2, 0, 2, 3, 7]);
    });
    it("should handle an array with duplicate numbers", () => {
        expect((0, insertionSort_1.default)([4, 2, 4, 2, 1])).toEqual([1, 2, 2, 4, 4]);
    });
    it("should not modify an already sorted (ascending) array", () => {
        expect((0, insertionSort_1.default)([1, 2, 5, 8, 10])).toEqual([1, 2, 5, 8, 10]);
    });
    it("should sort an array with all identical elements", () => {
        expect((0, insertionSort_1.default)([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
});
