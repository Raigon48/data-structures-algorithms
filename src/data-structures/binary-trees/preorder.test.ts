import { preorder } from "./preorder";
import { TreeNode } from "./Node";

describe("preorder", () => {
  test("should return empty array for null node", () => {
    expect(preorder(null)).toEqual([]);
  });

  test("should return single element for single node", () => {
    const node = new TreeNode(5);
    expect(preorder(node)).toEqual([5]);
  });

  test("should traverse simple tree in preorder", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(preorder(root)).toEqual([1, 2, 3]);
  });

  test("should traverse complex tree in preorder", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(preorder(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  test("should handle left-skewed tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    expect(preorder(root)).toEqual([1, 2, 3, 4]);
  });

  test("should handle right-skewed tree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    expect(preorder(root)).toEqual([1, 2, 3, 4]);
  });

  test("should handle tree with only left children", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.left.left = new TreeNode(3);
    expect(preorder(root)).toEqual([10, 5, 3]);
  });

  test("should handle tree with only right children", () => {
    const root = new TreeNode(10);
    root.right = new TreeNode(15);
    root.right.right = new TreeNode(20);
    expect(preorder(root)).toEqual([10, 15, 20]);
  });

  test("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    expect(preorder(root)).toEqual([-1, -2, -3]);
  });

  test("should handle tree with duplicate values", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(5);
    root.right = new TreeNode(5);
    expect(preorder(root)).toEqual([5, 5, 5]);
  });

  test("should handle tree with zero values", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(0);
    root.right = new TreeNode(1);
    expect(preorder(root)).toEqual([0, 0, 1]);
  });
});
