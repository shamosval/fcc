//199. Binary Tree Right Side View
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
//
//
//
// Example 1:
//
// Input: root = [1,2,3,null,5,null,4]
//
// Output: [1,3,4]
//
// Explanation:
//
//
//
// Example 2:
//
// Input: root = [1,2,3,4,null,null,null,5]
//
// Output: [1,3,4,5]
//
// Explanation:
//
//
//
// Example 3:
//
// Input: root = [1,null,3]
//
// Output: [1,3]
//
// Example 4:
//
// Input: root = []
//
// Output: []



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return []
    }
    let row = [root]
    let arr = [root.val]

    while (row.length > 0) {
        let newRow = []
        for (let i = 0; i < row.length; i++) {
            if (row[i].left) {
                newRow.push(row[i].left)
            }
            if (row[i].right) {
                newRow.push(row[i].right)
            }
        }
        let index = newRow.length - 1
        if (newRow[index]) {
            arr.push(newRow[index].val)
        }


        row = newRow;
    }

    return arr

};