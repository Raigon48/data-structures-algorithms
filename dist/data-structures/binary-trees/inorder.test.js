"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inorder_1 = require("./inorder");
const Node_1 = require("./Node");
describe("inorder", () => {
    test("should return empty array for null node", () => {
        expect((0, inorder_1.inorder)(null)).toEqual([]);
    });
    test("should return single element for single node", () => {
        const node = new Node_1.TreeNode(5);
        expect((0, inorder_1.inorder)(node)).toEqual([5]);
    });
    test("should traverse left subtree, root, then right subtree", () => {
        const root = new Node_1.TreeNode(4);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(6);
        root.left.left = new Node_1.TreeNode(1);
        root.left.right = new Node_1.TreeNode(3);
        root.right.left = new Node_1.TreeNode(5);
        root.right.right = new Node_1.TreeNode(7);
        expect((0, inorder_1.inorder)(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    test("should handle left-skewed tree", () => {
        const root = new Node_1.TreeNode(3);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(1);
        expect((0, inorder_1.inorder)(root)).toEqual([1, 2, 3]);
    });
    test("should handle right-skewed tree", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        expect((0, inorder_1.inorder)(root)).toEqual([1, 2, 3]);
    });
    test("should handle tree with only left child", () => {
        const root = new Node_1.TreeNode(10);
        root.left = new Node_1.TreeNode(5);
        expect((0, inorder_1.inorder)(root)).toEqual([5, 10]);
    });
    test("should handle tree with only right child", () => {
        const root = new Node_1.TreeNode(10);
        root.right = new Node_1.TreeNode(15);
        expect((0, inorder_1.inorder)(root)).toEqual([10, 15]);
    });
});
