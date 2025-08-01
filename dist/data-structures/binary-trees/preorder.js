"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preorder = preorder;
function preorder(node) {
    let res = [];
    function recursion(node) {
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
