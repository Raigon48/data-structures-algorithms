import { inorder } from "./inorder";
import { TreeNode } from "./Node";
describe("inorder", () => {
  test("should return empty array for null node", () => {
    expect(inorder(null)).toEqual([]);
  });

  test("should return single element for single node", () => {
    const node = new TreeNode(5);
    expect(inorder(node)).toEqual([5]);
  });

  test("should traverse left subtree, root, then right subtree", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);

    expect(inorder(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should handle left-skewed tree", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(1);

    expect(inorder(root)).toEqual([1, 2, 3]);
  });

  test("should handle right-skewed tree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);

    expect(inorder(root)).toEqual([1, 2, 3]);
  });

  test("should handle tree with only left child", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);

    expect(inorder(root)).toEqual([5, 10]);
  });

  test("should handle tree with only right child", () => {
    const root = new TreeNode(10);
    root.right = new TreeNode(15);

    expect(inorder(root)).toEqual([10, 15]);
  });
});
