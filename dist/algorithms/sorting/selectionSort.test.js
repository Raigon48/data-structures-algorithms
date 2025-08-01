"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort_1 = __importDefault(require("./selectionSort"));
describe("selectionSort", () => {
    it("sorts an array of positive numbers", () => {
        expect((0, selectionSort_1.default)([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });
    it("sorts an array with negative numbers", () => {
        expect((0, selectionSort_1.default)([0, -1, -3, 2, 1])).toEqual([-3, -1, 0, 1, 2]);
    });
    it("returns an empty array when input is empty", () => {
        expect((0, selectionSort_1.default)([])).toEqual([]);
    });
    it("returns the same array when input has one element", () => {
        expect((0, selectionSort_1.default)([42])).toEqual([42]);
    });
    it("sorts an array with duplicate values", () => {
        expect((0, selectionSort_1.default)([3, 3, 2, 1, 2])).toEqual([1, 2, 2, 3, 3]);
    });
    it("sorts an already sorted array", () => {
        expect((0, selectionSort_1.default)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it("sorts a reverse sorted array", () => {
        expect((0, selectionSort_1.default)([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it("sorts an array with all identical elements", () => {
        expect((0, selectionSort_1.default)([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
});
