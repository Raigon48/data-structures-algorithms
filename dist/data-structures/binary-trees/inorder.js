"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inorder = inorder;
function inorder(node) {
    let res = [];
    const recursion = (node) => {
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
