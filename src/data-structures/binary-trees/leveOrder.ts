import { Queue } from "js-sdsl";
import { TreeNode } from "./Node";

export function levelOrder(node: TreeNode | null): number[][] {
  let arr: number[][] = [];
  if (node === null) return arr;
  let queue = new Queue<TreeNode>();
  queue.push(node);
  while (!queue.empty()) {
    let size = queue.size();
    let levelArr: number[] = new Array(size);
    for (let i = 0; i < size; i++) {
      let curNode = queue.pop();
      if (curNode) {
        if (curNode.left !== null) queue.push(curNode?.left);
        if (curNode?.right !== null) queue.push(curNode?.right);
        levelArr[i] = curNode.data;
      }
    }
    arr.push(levelArr);
  }
  return arr;
}
