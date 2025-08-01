import { Stack } from "js-sdsl";
import { TreeNode } from "./Node";

export function postorderIterative(root: TreeNode | null): number[] {
  let result: number[] = [];
  if (root === null) return result;
  let stack = new Stack<TreeNode | null>();
  let cur: TreeNode | null = root;
  while (cur !== null || !stack.empty()) {
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    } else {
      let temp = stack.top()?.right;
      if (temp === null) {
        let temp = stack.pop() as TreeNode;
        result.push(temp.data);

        while (!stack.empty() && temp === stack.top()?.right) {
          temp = stack.pop() as TreeNode;
          result.push(temp.data);
        }
      } else {
        cur = temp as TreeNode;
      }
    }
  }
  return result;
}
