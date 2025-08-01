"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelOrder = levelOrder;
exports.levelOrder2 = levelOrder2;
const js_sdsl_1 = require("js-sdsl");
function levelOrder(node) {
    let arr = [];
    if (node === null)
        return arr;
    let queue = new js_sdsl_1.Queue();
    queue.push(node);
    while (!queue.empty()) {
        let size = queue.size();
        let levelArr = new Array(size);
        for (let i = 0; i < size; i++) {
            let curNode = queue.pop();
            if (curNode) {
                if (curNode.left !== null)
                    queue.push(curNode === null || curNode === void 0 ? void 0 : curNode.left);
                if ((curNode === null || curNode === void 0 ? void 0 : curNode.right) !== null)
                    queue.push(curNode === null || curNode === void 0 ? void 0 : curNode.right);
                levelArr[i] = curNode.data;
            }
        }
        arr.push(levelArr);
    }
    return arr;
}
function levelOrder2(node) {
    let res = [];
    if (node === null)
        return res;
    let queue = new js_sdsl_1.Queue();
    queue.push(node);
    while (!queue.empty()) {
        let size = queue.size();
        for (let i = 0; i < size; i++) {
            let curNode = queue.pop();
            if (curNode) {
                if (curNode.left)
                    queue.push(curNode.left);
                if (curNode.right)
                    queue.push(curNode.right);
                res.push(curNode.data);
            }
        }
    }
    return res;
}
