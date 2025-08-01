"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preorder_1 = require("./preorder");
const Node_1 = require("./Node");
describe("preorder", () => {
    test("should return empty array for null node", () => {
        expect((0, preorder_1.preorder)(null)).toEqual([]);
    });
    test("should return single element for single node", () => {
        const node = new Node_1.TreeNode(5);
        expect((0, preorder_1.preorder)(node)).toEqual([5]);
    });
    test("should traverse simple tree in preorder", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        expect((0, preorder_1.preorder)(root)).toEqual([1, 2, 3]);
    });
    test("should traverse complex tree in preorder", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.right.left = new Node_1.TreeNode(6);
        root.right.right = new Node_1.TreeNode(7);
        expect((0, preorder_1.preorder)(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });
    test("should handle left-skewed tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        root.left.left.left = new Node_1.TreeNode(4);
        expect((0, preorder_1.preorder)(root)).toEqual([1, 2, 3, 4]);
    });
    test("should handle right-skewed tree", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        root.right.right.right = new Node_1.TreeNode(4);
        expect((0, preorder_1.preorder)(root)).toEqual([1, 2, 3, 4]);
    });
    test("should handle tree with only left children", () => {
        const root = new Node_1.TreeNode(10);
        root.left = new Node_1.TreeNode(5);
        root.left.left = new Node_1.TreeNode(3);
        expect((0, preorder_1.preorder)(root)).toEqual([10, 5, 3]);
    });
    test("should handle tree with only right children", () => {
        const root = new Node_1.TreeNode(10);
        root.right = new Node_1.TreeNode(15);
        root.right.right = new Node_1.TreeNode(20);
        expect((0, preorder_1.preorder)(root)).toEqual([10, 15, 20]);
    });
    test("should handle tree with negative values", () => {
        const root = new Node_1.TreeNode(-1);
        root.left = new Node_1.TreeNode(-2);
        root.right = new Node_1.TreeNode(-3);
        expect((0, preorder_1.preorder)(root)).toEqual([-1, -2, -3]);
    });
    test("should handle tree with duplicate values", () => {
        const root = new Node_1.TreeNode(5);
        root.left = new Node_1.TreeNode(5);
        root.right = new Node_1.TreeNode(5);
        expect((0, preorder_1.preorder)(root)).toEqual([5, 5, 5]);
    });
    test("should handle tree with zero values", () => {
        const root = new Node_1.TreeNode(0);
        root.left = new Node_1.TreeNode(0);
        root.right = new Node_1.TreeNode(1);
        expect((0, preorder_1.preorder)(root)).toEqual([0, 0, 1]);
    });
});
