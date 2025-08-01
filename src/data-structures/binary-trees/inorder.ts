import { TreeNode } from "./Node";

export function inorder(node: TreeNode | null): number[] {
  let res: number[] = [];
  const recursion = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }

    recursion(node.left);
    res.push(node.data);
    recursion(node.right);
  };
  if (node) {
    recursion(node);
  }
  return res;
}
