import selectionSort from "./selectionSort";

describe("selectionSort", () => {
    it("sorts an array of positive numbers", () => {
        expect(selectionSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it("sorts an array with negative numbers", () => {
        expect(selectionSort([0, -1, -3, 2, 1])).toEqual([-3, -1, 0, 1, 2]);
    });

    it("returns an empty array when input is empty", () => {
        expect(selectionSort([])).toEqual([]);
    });

    it("returns the same array when input has one element", () => {
        expect(selectionSort([42])).toEqual([42]);
    });

    it("sorts an array with duplicate values", () => {
        expect(selectionSort([3, 3, 2, 1, 2])).toEqual([1, 2, 2, 3, 3]);
    });

    it("sorts an already sorted array", () => {
        expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it("sorts a reverse sorted array", () => {
        expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it("sorts an array with all identical elements", () => {
        expect(selectionSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
});
