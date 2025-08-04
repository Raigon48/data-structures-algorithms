"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBalancedTree = isBalancedTree;
const treeHeight_1 = require("./treeHeight");
function isBalancedTree(root) {
    if (root === null) {
        return true;
    }
    let leftHeight = (0, treeHeight_1.treeHeight)(root.left);
    let rightHeight = (0, treeHeight_1.treeHeight)(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }
    return isBalancedTree(root.left) && isBalancedTree(root.right);
}
