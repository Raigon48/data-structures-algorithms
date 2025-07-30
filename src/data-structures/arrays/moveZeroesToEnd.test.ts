import { moveZeroesToEnd } from "./moveZeroesToEnd";
describe("moveZeroesToEnd", () => {
  it("should move all zeros to the end while maintaining order of non-zero elements", () => {
    expect(moveZeroesToEnd([1, 0, 2, 0, 3, 0])).toEqual([1, 2, 3, 0, 0, 0]);
    expect(moveZeroesToEnd([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  it("should handle array with no zeros", () => {
    expect(moveZeroesToEnd([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle array with all zeros", () => {
    expect(moveZeroesToEnd([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  });

  it("should handle empty array", () => {
    expect(moveZeroesToEnd([])).toEqual([]);
  });

  it("should handle single element array with zero", () => {
    expect(moveZeroesToEnd([0])).toEqual([0]);
  });

  it("should handle single element array with non-zero", () => {
    expect(moveZeroesToEnd([5])).toEqual([5]);
  });

  it("should handle array with zeros at the beginning", () => {
    expect(moveZeroesToEnd([0, 0, 1, 2, 3])).toEqual([1, 2, 3, 0, 0]);
  });

  it("should handle array with zeros at the end", () => {
    expect(moveZeroesToEnd([1, 2, 3, 0, 0])).toEqual([1, 2, 3, 0, 0]);
  });

  it("should handle array with negative numbers", () => {
    expect(moveZeroesToEnd([-1, 0, -2, 0, 3])).toEqual([-1, -2, 3, 0, 0]);
  });

  it("should handle array with consecutive zeros", () => {
    expect(moveZeroesToEnd([1, 0, 0, 0, 2, 3])).toEqual([1, 2, 3, 0, 0, 0]);
  });
});
