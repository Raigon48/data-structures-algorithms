"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postorderIterative = postorderIterative;
const js_sdsl_1 = require("js-sdsl");
function postorderIterative(root) {
    var _a, _b;
    let result = [];
    if (root === null)
        return result;
    let stack = new js_sdsl_1.Stack();
    let cur = root;
    while (cur !== null || !stack.empty()) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        else {
            let temp = (_a = stack.top()) === null || _a === void 0 ? void 0 : _a.right;
            if (temp === null) {
                let temp = stack.pop();
                result.push(temp.data);
                while (!stack.empty() && temp === ((_b = stack.top()) === null || _b === void 0 ? void 0 : _b.right)) {
                    temp = stack.pop();
                    result.push(temp.data);
                }
            }
            else {
                cur = temp;
            }
        }
    }
    return result;
}
