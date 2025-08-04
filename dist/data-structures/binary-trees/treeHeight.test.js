"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const treeHeight_1 = require("./treeHeight");
const Node_1 = require("./Node");
describe("treeHeight", () => {
    it("should return 0 for null root", () => {
        expect((0, treeHeight_1.treeHeight)(null)).toBe(0);
    });
    it("should return 1 for single node tree", () => {
        const root = new Node_1.TreeNode(1);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(1);
    });
    it("should return 2 for tree with only left child", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(2);
    });
    it("should return 2 for tree with only right child", () => {
        const root = new Node_1.TreeNode(1);
        root.right = new Node_1.TreeNode(2);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(2);
    });
    it("should return 2 for balanced tree with two children", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(2);
    });
    it("should return correct height for unbalanced left-heavy tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.left.left = new Node_1.TreeNode(3);
        root.left.left.left = new Node_1.TreeNode(4);
        root.right = new Node_1.TreeNode(5);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(4);
    });
    it("should return correct height for unbalanced right-heavy tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.right.right = new Node_1.TreeNode(4);
        root.right.right.right = new Node_1.TreeNode(5);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(4);
    });
    it("should return correct height for complex balanced tree", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.left = new Node_1.TreeNode(4);
        root.left.right = new Node_1.TreeNode(5);
        root.right.left = new Node_1.TreeNode(6);
        root.right.right = new Node_1.TreeNode(7);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(3);
    });
    it("should handle tree with only left subtree multiple levels", () => {
        const root = new Node_1.TreeNode(1);
        let current = root;
        for (let i = 2; i <= 5; i++) {
            current.left = new Node_1.TreeNode(i);
            current = current.left;
        }
        expect((0, treeHeight_1.treeHeight)(root)).toBe(5);
    });
    it("should handle tree with mixed structure", () => {
        const root = new Node_1.TreeNode(1);
        root.left = new Node_1.TreeNode(2);
        root.right = new Node_1.TreeNode(3);
        root.left.right = new Node_1.TreeNode(4);
        root.left.right.left = new Node_1.TreeNode(5);
        root.left.right.right = new Node_1.TreeNode(6);
        root.right.left = new Node_1.TreeNode(7);
        expect((0, treeHeight_1.treeHeight)(root)).toBe(4);
    });
});
