"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inorderIterative = inorderIterative;
const js_sdsl_1 = require("js-sdsl");
function inorderIterative(root) {
    let result = [];
    const stack = new js_sdsl_1.Stack();
    let curNode = root;
    while (true) {
        if (curNode) {
            stack.push(curNode);
            curNode = curNode.left;
        }
        else {
            if (stack.empty())
                break;
            curNode = stack.pop();
            result.push(curNode.data);
            curNode = curNode.right;
        }
    }
    return result;
}
