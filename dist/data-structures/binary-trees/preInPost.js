"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preInPost = preInPost;
const js_sdsl_1 = require("js-sdsl");
function preInPost(root) {
    let preorder = [];
    let inorder = [];
    let postorder = [];
    if (root == null) {
        return [preorder, inorder, postorder];
    }
    let stack = new js_sdsl_1.Stack();
    stack.push({ node: root, value: 1 });
    while (!stack.empty()) {
        let cur = stack.pop();
        if ((cur === null || cur === void 0 ? void 0 : cur.value) === 1) {
            preorder.push(cur.node.data);
            cur.value++;
            stack.push(cur);
            if (cur.node.left) {
                stack.push({ node: cur.node.left, value: 1 });
            }
        }
        else if ((cur === null || cur === void 0 ? void 0 : cur.value) === 2) {
            inorder.push(cur.node.data);
            cur.value++;
            stack.push(cur);
            if (cur.node.right) {
                stack.push({ node: cur.node.right, value: 1 });
            }
        }
        else {
            postorder.push(cur === null || cur === void 0 ? void 0 : cur.node.data);
        }
    }
    return [preorder, inorder, postorder];
}
