"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quickSort_1 = require("./quickSort");
describe("quickSortUsingAuxArray", () => {
    it("should sort an array of positive numbers", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    });
    it("should sort an array with negative numbers", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([-1, -3, 2, 0, 5])).toEqual([-3, -1, 0, 2, 5]);
    });
    it("should handle an empty array", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([])).toEqual([]);
    });
    it("should handle an array with one element", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([42])).toEqual([42]);
    });
    it("should handle an array with duplicate elements", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([4, 2, 4, 3, 2])).toEqual([2, 2, 3, 4, 4]);
    });
    it("should handle an already sorted array", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle a reverse sorted array", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle an array with all identical elements", () => {
        expect((0, quickSort_1.quickSortUsingAuxArray)([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
    it("should not mutate the original array", () => {
        const arr = [3, 1, 2];
        (0, quickSort_1.quickSortUsingAuxArray)(arr);
        expect(arr).toEqual([3, 1, 2]);
    });
});
describe("quickSortInPlace", () => {
    it("should sort an array of positive numbers", () => {
        const arr = [5, 3, 8, 4, 2];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([2, 3, 4, 5, 8]);
    });
    it("should sort an array with negative numbers", () => {
        const arr = [-1, -3, 2, 0, 5];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([-3, -1, 0, 2, 5]);
    });
    it("should handle an empty array", () => {
        const arr = [];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([]);
    });
    it("should handle an array with one element", () => {
        const arr = [42];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([42]);
    });
    it("should handle an array with duplicate elements", () => {
        const arr = [4, 2, 4, 3, 2];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([2, 2, 3, 4, 4]);
    });
    it("should handle an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle a reverse sorted array", () => {
        const arr = [5, 4, 3, 2, 1];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle an array with all identical elements", () => {
        const arr = [7, 7, 7, 7];
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual([7, 7, 7, 7]);
    });
    it("should mutate the original array to be sorted", () => {
        const arr = [3, 1, 2];
        (0, quickSort_1.quickSortInPlace)(arr);
        expect(arr).toEqual([1, 2, 3]);
    });
    it("should handle large arrays", () => {
        const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        const sorted = [...arr].sort((a, b) => a - b);
        expect((0, quickSort_1.quickSortInPlace)([...arr])).toEqual(sorted);
    });
    it("should handle array with two elements", () => {
        expect((0, quickSort_1.quickSortInPlace)([2, 1])).toEqual([1, 2]);
        expect((0, quickSort_1.quickSortInPlace)([1, 2])).toEqual([1, 2]);
    });
    it("should handle array with negative and positive numbers", () => {
        expect((0, quickSort_1.quickSortInPlace)([0, -2, 5, -1, 3])).toEqual([-2, -1, 0, 3, 5]);
    });
});
