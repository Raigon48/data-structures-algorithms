import { Stack } from "js-sdsl";
import { TreeNode } from "./Node";

export function preInPost(root: TreeNode | null): number[][] {
  let preorder: number[] = [];
  let inorder: number[] = [];
  let postorder: number[] = [];
  if (root == null) {
    return [preorder, inorder, postorder];
  }
  let stack = new Stack<{ node: TreeNode; value: number }>();
  stack.push({ node: root, value: 1 });
  while (!stack.empty()) {
    let cur = stack.pop();
    if (cur?.value === 1) {
      preorder.push(cur.node.data);
      cur.value++;
      stack.push(cur);
      if (cur.node.left) {
        stack.push({ node: cur.node.left, value: 1 });
      }
    } else if (cur?.value === 2) {
      inorder.push(cur.node.data);
      cur.value++;
      stack.push(cur);
      if (cur.node.right) {
        stack.push({ node: cur.node.right, value: 1 });
      }
    } else {
      postorder.push(cur?.node.data);
    }
  }
  return [preorder, inorder, postorder];
}
