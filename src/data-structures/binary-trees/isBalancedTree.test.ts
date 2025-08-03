import { isBalancedTree } from "./isBalancedTree";
import { TreeNode } from "./Node";

describe("isBalancedTree", () => {
  test("should return true for null tree", () => {
    expect(isBalancedTree(null)).toBe(true);
  });

  test("should return true for single node tree", () => {
    const root = new TreeNode(1);
    expect(isBalancedTree(root)).toBe(true);
  });

  test("should return true for balanced tree with two levels", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(isBalancedTree(root)).toBe(true);
  });

  test("should return true for balanced tree with three levels", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(6);
    expect(isBalancedTree(root)).toBe(true);
  });

  test("should return false for unbalanced tree - left heavy", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(isBalancedTree(root)).toBe(false);
  });

  test("should return false for unbalanced tree - right heavy", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    expect(isBalancedTree(root)).toBe(false);
  });

  test("should return false for deeply unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.right = new TreeNode(5);
    expect(isBalancedTree(root)).toBe(false);
  });

  test("should return true for balanced tree with height difference of 1", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    expect(isBalancedTree(root)).toBe(true);
  });

  test("should return true for balanced tree with only left subtree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(isBalancedTree(root)).toBe(true);
  });

  test("should return true for balanced tree with only right subtree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    expect(isBalancedTree(root)).toBe(true);
  });

  test("should return false for complex unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.left.left.left = new TreeNode(6);
    root.left.left.right = new TreeNode(7);
    expect(isBalancedTree(root)).toBe(false);
  });
});
