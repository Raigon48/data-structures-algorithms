import insertionSort from "./insertionSort";

describe("insertionSort", () => {
    it("should sort an array of positive numbers in ascending order", () => {
        expect(insertionSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it("should handle an empty array", () => {
        expect(insertionSort([])).toEqual([]);
    });

    it("should handle an array with one element", () => {
        expect(insertionSort([42])).toEqual([42]);
    });

    it("should sort an array with negative numbers in ascending order", () => {
        expect(insertionSort([-3, -1, -7, -4])).toEqual([-7, -4, -3, -1]);
    });

    it("should sort an array with mixed positive and negative numbers", () => {
        expect(insertionSort([3, -2, 7, 0, -5, 2])).toEqual([-5, -2, 0, 2, 3, 7]);
    });

    it("should handle an array with duplicate numbers", () => {
        expect(insertionSort([4, 2, 4, 2, 1])).toEqual([1, 2, 2, 4, 4]);
    });

    it("should not modify an already sorted (ascending) array", () => {
        expect(insertionSort([1, 2, 5, 8, 10])).toEqual([1, 2, 5, 8, 10]);
    });

    it("should sort an array with all identical elements", () => {
        expect(insertionSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
});
