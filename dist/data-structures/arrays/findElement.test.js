"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findElement_1 = require("./findElement");
describe("findLargest", () => {
    test("should find the largest number in a positive array", () => {
        expect((0, findElement_1.findLargest)([1, 5, 3, 9, 2])).toBe(9);
    });
    test("should find the largest number in a negative array", () => {
        expect((0, findElement_1.findLargest)([-5, -1, -3, -9, -2])).toBe(-1);
    });
    test("should find the largest number in a mixed array", () => {
        expect((0, findElement_1.findLargest)([-5, 10, -3, 2, -1])).toBe(10);
    });
    test("should return the single element when array has one element", () => {
        expect((0, findElement_1.findLargest)([42])).toBe(42);
    });
    test("should handle array with duplicate largest values", () => {
        expect((0, findElement_1.findLargest)([5, 5, 3, 5, 1])).toBe(5);
    });
    test("should handle array with zeros", () => {
        expect((0, findElement_1.findLargest)([0, 0, 0])).toBe(0);
    });
});
describe("findSmallest", () => {
    test("should find the smallest number in a positive array", () => {
        expect((0, findElement_1.findSmallest)([1, 5, 3, 9, 2])).toBe(1);
    });
    test("should find the smallest number in a negative array", () => {
        expect((0, findElement_1.findSmallest)([-5, -1, -3, -9, -2])).toBe(-9);
    });
    test("should find the smallest number in a mixed array", () => {
        expect((0, findElement_1.findSmallest)([-5, 10, -3, 2, -1])).toBe(-5);
    });
    test("should return the single element when array has one element", () => {
        expect((0, findElement_1.findSmallest)([42])).toBe(42);
    });
    test("should handle array with duplicate smallest values", () => {
        expect((0, findElement_1.findSmallest)([5, 1, 3, 1, 9])).toBe(1);
    });
    test("should handle array with zeros", () => {
        expect((0, findElement_1.findSmallest)([0, 0, 0])).toBe(0);
    });
});
