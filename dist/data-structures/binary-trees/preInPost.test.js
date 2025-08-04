"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preInPost_1 = require("./preInPost");
const Node_1 = require("./Node");
describe("preInPost", () => {
    test("should return empty arrays for null root", () => {
        const result = (0, preInPost_1.preInPost)(null);
        expect(result).toEqual([[], [], []]);
    });
    test("should handle single node tree", () => {
        const root = new Node_1.TreeNode(1);
        const result = (0, preInPost_1.preInPost)(root);
        expect(result).toEqual([[1], [1], [1]]);
    });
    test("should handle left-only tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        const result = (0, preInPost_1.preInPost)(root);
        expect(result).toEqual([
            [1, 2, 3], // preorder
            [3, 2, 1], // inorder
            [3, 2, 1], // postorder
        ]);
    });
    test("should handle right-only tree", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        const result = (0, preInPost_1.preInPost)(root);
        expect(result).toEqual([
            [1, 2, 3], // preorder
            [1, 2, 3], // inorder
            [3, 2, 1], // postorder
        ]);
    });
    test("should handle complete binary tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.right.left = new Node_1.TreeNode(6);
        root.right.right = new Node_1.TreeNode(7);
        const result = (0, preInPost_1.preInPost)(root);
        expect(result).toEqual([
            [1, 2, 4, 5, 3, 6, 7], // preorder
            [4, 2, 5, 1, 6, 3, 7], // inorder
            [4, 5, 2, 6, 7, 3, 1], // postorder
        ]);
    });
    test("should handle unbalanced tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.right = new Node_1.TreeNode(4);
        root.left.right.left = new Node_1.TreeNode(5);
        const result = (0, preInPost_1.preInPost)(root);
        expect(result).toEqual([
            [1, 2, 4, 5, 3], // preorder
            [2, 5, 4, 1, 3], // inorder
            [5, 4, 2, 3, 1], // postorder
        ]);
    });
    test("should handle tree with negative values", () => {
        const root = new Node_1.TreeNode(-1);
        root.left = new Node_1.TreeNode(-2);
        root.right = new Node_1.TreeNode(-3);
        const result = (0, preInPost_1.preInPost)(root);
        expect(result).toEqual([
            [-1, -2, -3], // preorder
            [-2, -1, -3], // inorder
            [-2, -3, -1], // postorder
        ]);
    });
});
