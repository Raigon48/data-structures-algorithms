"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeHeight = treeHeight;
function treeHeight(root) {
    if (root === null) {
        return 0;
    }
    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);
    return 1 + Math.max(leftHeight, rightHeight);
}
