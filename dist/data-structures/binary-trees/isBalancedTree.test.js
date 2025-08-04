"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isBalancedTree_1 = require("./isBalancedTree");
const Node_1 = require("./Node");
describe("isBalancedTree", () => {
    test("should return true for null tree", () => {
        expect((0, isBalancedTree_1.isBalancedTree)(null)).toBe(true);
    });
    test("should return true for single node tree", () => {
        const root = new Node_1.TreeNode(1);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(true);
    });
    test("should return true for balanced tree with two levels", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(true);
    });
    test("should return true for balanced tree with three levels", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.right.right = new Node_1.TreeNode(6);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(true);
    });
    test("should return false for unbalanced tree - left heavy", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(false);
    });
    test("should return false for unbalanced tree - right heavy", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        root.right.right = new Node_1.TreeNode(3);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(false);
    });
    test("should return false for deeply unbalanced tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        root.left.left.left = new Node_1.TreeNode(4);
        root.right = new Node_1.TreeNode(5);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(false);
    });
    test("should return true for balanced tree with height difference of 1", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(true);
    });
    test("should return true for balanced tree with only left subtree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(true);
    });
    test("should return true for balanced tree with only right subtree", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(true);
    });
    test("should return false for complex unbalanced tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.left.left.left = new Node_1.TreeNode(6);
        root.left.left.right = new Node_1.TreeNode(7);
        expect((0, isBalancedTree_1.isBalancedTree)(root)).toBe(false);
    });
});
