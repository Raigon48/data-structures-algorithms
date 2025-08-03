import { TreeNode } from "./Node";

export function treeHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}
