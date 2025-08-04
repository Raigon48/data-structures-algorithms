"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postorderIterative_1 = require("./postorderIterative");
const Node_1 = require("./Node");
describe("postorderIterative", () => {
    test("should return empty array for null root", () => {
        expect((0, postorderIterative_1.postorderIterative)(null)).toEqual([]);
    });
    test("should return single element for single node tree", () => {
        const root = new Node_1.TreeNode(1);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([1]);
    });
    test("should traverse left subtree only", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([3, 2, 1]);
    });
    test("should traverse right subtree only", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([3, 2, 1]);
    });
    test("should traverse complete binary tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.right.left = new Node_1.TreeNode(6);
        root.right.right = new Node_1.TreeNode(7);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
    });
    test("should traverse unbalanced tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.right = new Node_1.TreeNode(3);
        root.left.right.left = new Node_1.TreeNode(4);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([4, 3, 2, 1]);
    });
    test("should handle tree with negative values", () => {
        const root = new Node_1.TreeNode(-1);
        root.left = new Node_1.TreeNode(-2);
        root.right = new Node_1.TreeNode(-3);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([-2, -3, -1]);
    });
    test("should handle tree with duplicate values", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(1);
        expect((0, postorderIterative_1.postorderIterative)(root)).toEqual([1, 1, 1]);
    });
});
