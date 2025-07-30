import { rotateLeftByOnePlace } from "./rotateArray";
describe("rotateLeftByOnePlace", () => {
  test("should rotate array left by one place", () => {
    expect(rotateLeftByOnePlace([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
  });

  test("should handle array with two elements", () => {
    expect(rotateLeftByOnePlace([1, 2])).toEqual([2, 1]);
  });

  test("should handle single element array", () => {
    expect(rotateLeftByOnePlace([1])).toEqual([1]);
  });

  test("should handle empty array", () => {
    expect(rotateLeftByOnePlace([])).toEqual([]);
  });

  test("should handle array with duplicate elements", () => {
    expect(rotateLeftByOnePlace([1, 1, 1])).toEqual([1, 1, 1]);
  });

  test("should handle array with negative numbers", () => {
    expect(rotateLeftByOnePlace([-1, -2, -3])).toEqual([-2, -3, -1]);
  });

  test("should handle array with mixed positive and negative numbers", () => {
    expect(rotateLeftByOnePlace([-1, 2, -3, 4])).toEqual([2, -3, 4, -1]);
  });

  test("should handle array with zeros", () => {
    expect(rotateLeftByOnePlace([0, 1, 0, 2])).toEqual([1, 0, 2, 0]);
  });

  test("should mutate original array", () => {
    const arr = [1, 2, 3];
    const result = rotateLeftByOnePlace(arr);
    expect(arr).toBe(result);
    expect(arr).toEqual([2, 3, 1]);
  });
});
