import { TreeNode } from "./Node";

export function postorder(node: TreeNode | null): number[] {
  let res: number[] = [];
  function recursion(node: TreeNode | null) {
    if (node === null) {
      return;
    }
    recursion(node.left);
    recursion(node.right);
    res.push(node.data);
  }
  if (node) {
    recursion(node);
  }
  return res;
}
