import { Stack } from "js-sdsl";
import { TreeNode } from "./Node";

export function inorderIterative(root: TreeNode|null): number[] {
    let result: number[] = [];
    const stack = new Stack<TreeNode>();
    let curNode = root;
    
    while(true) {
        if(curNode) {
            stack.push(curNode)
            curNode = curNode.left;
        }
        else {
            if(stack.empty()) break;
            curNode = stack.pop() as TreeNode;
            result.push(curNode.data);
            curNode = curNode.right;
        }
    }


    return result;
}