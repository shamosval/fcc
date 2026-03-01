/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [0]
 */
const moveZeroes = function(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            [nums[i], nums[insertPos]] = [nums[insertPos], nums[i]];
            insertPos++;
        }

    }
};


let nums = [1,0,1,0,3,12]
moveZeroes(nums)


//  Original inefficient solution

// const moveZeroes = function(nums) {
//
//     let length = nums.length;
//
//     for (let i = 0; i < length; i++) {
//
//
//         if (!nums[i]) {
//             nums.push(0);
//             nums[i] = undefined;
//         }
//
//     }
//
//     for (let i = 0; i < nums.length; i++) {
//         console.log('nums',nums)
//         console.log('nums[i]',nums[i])
//         if (nums[i] === undefined ) {
//             nums.splice(i, 1);
//             i = i - 1;
//         }
//     }
//
//
//
//
//
//
// };
