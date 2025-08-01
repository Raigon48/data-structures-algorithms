"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort_1 = __importDefault(require("./mergeSort"));
describe("mergeSort", () => {
    it("should sort an array of positive numbers", () => {
        expect((0, mergeSort_1.default)([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });
    it("should sort an array with negative numbers", () => {
        expect((0, mergeSort_1.default)([3, -1, 0, -5, 8, 2])).toEqual([-5, -1, 0, 2, 3, 8]);
    });
    it("should handle an empty array", () => {
        expect((0, mergeSort_1.default)([])).toEqual([]);
    });
    it("should handle an array with one element", () => {
        expect((0, mergeSort_1.default)([42])).toEqual([42]);
    });
    it("should handle an array with all equal elements", () => {
        expect((0, mergeSort_1.default)([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
    it("should handle an already sorted array", () => {
        expect((0, mergeSort_1.default)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle a reverse sorted array", () => {
        expect((0, mergeSort_1.default)([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should sort an array with duplicate values", () => {
        expect((0, mergeSort_1.default)([4, 2, 5, 2, 3, 4, 1])).toEqual([1, 2, 2, 3, 4, 4, 5]);
    });
    it("should not mutate the input array (if a copy is made)", () => {
        const arr = [3, 1, 2];
        const result = (0, mergeSort_1.default)([...arr]);
        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([3, 1, 2]);
    });
});
