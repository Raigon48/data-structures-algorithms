"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postorder_1 = require("./postorder");
const Node_1 = require("./Node");
describe("postorder", () => {
    test("should return empty array for null node", () => {
        expect((0, postorder_1.postorder)(null)).toEqual([]);
    });
    test("should return single element for single node", () => {
        const node = new Node_1.TreeNode(1);
        expect((0, postorder_1.postorder)(node)).toEqual([1]);
    });
    test("should traverse left subtree first, then right subtree, then root", () => {
        //       1
        //      / \
        //     2   3
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        expect((0, postorder_1.postorder)(root)).toEqual([2, 3, 1]);
    });
    test("should handle left-skewed tree", () => {
        //   1
        //  /
        // 2
        ///
        //3
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        expect((0, postorder_1.postorder)(root)).toEqual([3, 2, 1]);
    });
    test("should handle right-skewed tree", () => {
        // 1
        //  \
        //   2
        //    \
        //     3
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        expect((0, postorder_1.postorder)(root)).toEqual([3, 2, 1]);
    });
    test("should handle complete binary tree", () => {
        //       1
        //      / \
        //     2   3
        //    / \ / \
        //   4 5 6  7
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.right.left = new Node_1.TreeNode(6);
        root.right.right = new Node_1.TreeNode(7);
        expect((0, postorder_1.postorder)(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
    });
    test("should handle tree with only left children", () => {
        //     1
        //    /
        //   2
        //  /
        // 3
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        expect((0, postorder_1.postorder)(root)).toEqual([3, 2, 1]);
    });
    test("should handle tree with only right children", () => {
        // 1
        //  \
        //   2
        //    \
        //     3
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        expect((0, postorder_1.postorder)(root)).toEqual([3, 2, 1]);
    });
    test("should handle tree with negative values", () => {
        //      -1
        //     /  \
        //   -2    -3
        const root = new Node_1.TreeNode(-1);
        root.left = new Node_1.TreeNode(-2);
        root.right = new Node_1.TreeNode(-3);
        expect((0, postorder_1.postorder)(root)).toEqual([-2, -3, -1]);
    });
    test("should handle tree with duplicate values", () => {
        //     1
        //    / \
        //   1   1
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(1);
        expect((0, postorder_1.postorder)(root)).toEqual([1, 1, 1]);
    });
});
