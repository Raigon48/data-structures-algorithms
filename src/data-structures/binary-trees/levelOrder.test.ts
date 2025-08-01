import { levelOrder, levelOrder2 } from "./leveOrder";
import { TreeNode } from "./Node";
describe("levelOrder", () => {
  test("should return empty array for null root", () => {
    expect(levelOrder(null)).toEqual([]);
  });

  test("should return single node for tree with only root", () => {
    const root = new TreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  test("should return correct level order for complete binary tree", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  test("should handle left-skewed tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);

    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });

  test("should handle right-skewed tree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);

    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });

  test("should handle tree with missing nodes", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [5]]);
  });

  test("should handle larger tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });
});

describe("levelOrder2", () => {
  test("should return empty array for null root", () => {
    expect(levelOrder2(null)).toEqual([]);
  });

  test("should return single node for tree with only root", () => {
    const root = new TreeNode(1);
    expect(levelOrder2(root)).toEqual([1]);
  });

  test("should return correct level order for complete binary tree", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(levelOrder2(root)).toEqual([3, 9, 20, 15, 7]);
  });

  test("should handle left-skewed tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);

    expect(levelOrder2(root)).toEqual([1, 2, 3]);
  });

  test("should handle right-skewed tree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);

    expect(levelOrder2(root)).toEqual([1, 2, 3]);
  });

  test("should handle tree with missing nodes", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);

    expect(levelOrder2(root)).toEqual([1, 2, 3, 5]);
  });

  test("should handle larger tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(levelOrder2(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);

    expect(levelOrder2(root)).toEqual([-1, -2, -3]);
  });

  test("should handle tree with duplicate values", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(5);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(5);

    expect(levelOrder2(root)).toEqual([5, 5, 5, 5]);
  });

  test("should handle deep unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);

    expect(levelOrder2(root)).toEqual([1, 2, 3, 4, 5]);
  });
});
