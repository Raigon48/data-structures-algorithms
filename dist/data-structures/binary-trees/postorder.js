"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postorder = postorder;
function postorder(node) {
    let res = [];
    function recursion(node) {
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
