"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("./bubbleSort"));
describe("bubbleSort", () => {
    it("should sort an array of positive numbers", () => {
        expect((0, bubbleSort_1.default)([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });
    it("should sort an array with negative numbers", () => {
        expect((0, bubbleSort_1.default)([3, -1, 0, -7, 8])).toEqual([-7, -1, 0, 3, 8]);
    });
    it("should handle an already sorted array", () => {
        expect((0, bubbleSort_1.default)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle an array sorted in reverse order", () => {
        expect((0, bubbleSort_1.default)([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle an array with duplicate values", () => {
        expect((0, bubbleSort_1.default)([2, 3, 2, 1, 1])).toEqual([1, 1, 2, 2, 3]);
    });
    it("should handle an empty array", () => {
        expect((0, bubbleSort_1.default)([])).toEqual([]);
    });
    it("should handle an array with a single element", () => {
        expect((0, bubbleSort_1.default)([42])).toEqual([42]);
    });
});
