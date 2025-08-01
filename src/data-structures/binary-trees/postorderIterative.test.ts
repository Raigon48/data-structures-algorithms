import { postorderIterative } from "./postorderIterative";
import { TreeNode } from "./Node";

describe("postorderIterative", () => {
  test("should return empty array for null root", () => {
    expect(postorderIterative(null)).toEqual([]);
  });

  test("should return single element for single node tree", () => {
    const root = new TreeNode(1);
    expect(postorderIterative(root)).toEqual([1]);
  });

  test("should traverse left subtree only", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(postorderIterative(root)).toEqual([3, 2, 1]);
  });

  test("should traverse right subtree only", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    expect(postorderIterative(root)).toEqual([3, 2, 1]);
  });

  test("should traverse complete binary tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(postorderIterative(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });

  test("should traverse unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.right = new TreeNode(3);
    root.left.right.left = new TreeNode(4);
    expect(postorderIterative(root)).toEqual([4, 3, 2, 1]);
  });

  test("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    expect(postorderIterative(root)).toEqual([-2, -3, -1]);
  });

  test("should handle tree with duplicate values", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(1);
    root.right = new TreeNode(1);
    expect(postorderIterative(root)).toEqual([1, 1, 1]);
  });
});
