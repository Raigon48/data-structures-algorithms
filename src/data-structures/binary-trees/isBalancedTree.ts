import { TreeNode } from "./Node";
import { treeHeight } from "./treeHeight";

export function isBalancedTree(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }

  return isBalancedTree(root.left) && isBalancedTree(root.right);
}
