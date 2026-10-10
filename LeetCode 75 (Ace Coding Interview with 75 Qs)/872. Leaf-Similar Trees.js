/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    function checkNode(node, arr) {

        if (!node) {
            return
        }
        if (!node.left && !node.right) {
            arr.push(node.val)

        }
        if (node.left) {

            checkNode(node.left, arr)

        }
        if (node.right) {

            checkNode(node.right, arr)
        }
        return arr;
    }

    let seq1 = []
    let seq2 = []
    checkNode(root1, seq1)
    checkNode(root2, seq2)

    if (seq1.length != seq2.length) {
        return false;
    }

    for (let i = 0; i < seq1.length;i++) {
        if (seq1[i] != seq2[i]) {
            return false
        }
    }
    return true

};