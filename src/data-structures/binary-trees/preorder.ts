import { TreeNode } from "./Node";

export function preorder(node: TreeNode | null): number[] {
  let res: number[] = [];
  function recursion(node: TreeNode | null) {
    if (node === null) {
      return;
    }
    res.push(node.data);
    recursion(node.left);
    recursion(node.right);
  }
  if (node) {
    recursion(node);
  }
  return res;
}
