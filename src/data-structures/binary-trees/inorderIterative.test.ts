import { inorderIterative } from "./inorderIterative";
import { TreeNode } from "./Node";

// Helper to build tree nodes easily
function node(data: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode {
    return { data, left, right };
}

describe("inorderIterative", () => {
    it("should return empty array for null root", () => {
        expect(inorderIterative(null)).toEqual([]);
    });

    it("should return single element for single node tree", () => {
        const root = node(1);
        expect(inorderIterative(root)).toEqual([1]);
    });

    it("should return correct inorder traversal for balanced tree", () => {
        //      2
        //     / \
        //    1   3
        const root = node(2, node(1), node(3));
        expect(inorderIterative(root)).toEqual([1, 2, 3]);
    });

    it("should return correct inorder traversal for left-skewed tree", () => {
        //    3
        //   /
        //  2
        // /
        //1
        const root = node(3, node(2, node(1)));
        expect(inorderIterative(root)).toEqual([1, 2, 3]);
    });

    it("should return correct inorder traversal for right-skewed tree", () => {
        // 1
        //  \
        //   2
        //    \
        //     3
        const root = node(1, null, node(2, null, node(3)));
        expect(inorderIterative(root)).toEqual([1, 2, 3]);
    });

    it("should handle tree with only left child", () => {
        const root = node(1, node(2));
        expect(inorderIterative(root)).toEqual([2, 1]);
    });

    it("should handle tree with only right child", () => {
        const root = node(1, null, node(2));
        expect(inorderIterative(root)).toEqual([1, 2]);
    });

    it("should handle tree with duplicate values", () => {
        //      2
        //     / \
        //    2   2
        const root = node(2, node(2), node(2));
        expect(inorderIterative(root)).toEqual([2, 2, 2]);
    });

    it("should handle larger tree", () => {
        //        4
        //      /   \
        //     2     6
        //    / \   / \
        //   1   3 5   7
        const root = node(
            4,
            node(2, node(1), node(3)),
            node(6, node(5), node(7))
        );
        expect(inorderIterative(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it("custom handle larger tree", () => {
        //        1
        //      /   \
        //     2     3
        //    / \ 
        //   4   5
        //      / \
        //     6   7
        const root = node(
            1,
            node(2, node(4), node(5, node(6), node(7))),
            node(3)
        );
        expect(inorderIterative(root)).toEqual([4, 2, 6, 5, 7, 1, 3]);
    });
});
