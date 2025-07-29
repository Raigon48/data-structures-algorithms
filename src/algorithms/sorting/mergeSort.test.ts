import mergeSort from "./mergeSort";
describe("mergeSort", () => {
    it("should sort an array of positive numbers", () => {
        expect(mergeSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it("should sort an array with negative numbers", () => {
        expect(mergeSort([3, -1, 0, -5, 8, 2])).toEqual([-5, -1, 0, 2, 3, 8]);
    });

    it("should handle an empty array", () => {
        expect(mergeSort([])).toEqual([]);
    });

    it("should handle an array with one element", () => {
        expect(mergeSort([42])).toEqual([42]);
    });

    it("should handle an array with all equal elements", () => {
        expect(mergeSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });

    it("should handle an already sorted array", () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle a reverse sorted array", () => {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it("should sort an array with duplicate values", () => {
        expect(mergeSort([4, 2, 5, 2, 3, 4, 1])).toEqual([1, 2, 2, 3, 4, 4, 5]);
    });

    it("should not mutate the input array (if a copy is made)", () => {
        const arr = [3, 1, 2];
        const result = mergeSort([...arr]);
        expect(result).toEqual([1, 2, 3]);
        expect(arr).toEqual([3, 1, 2]);
    });
});
