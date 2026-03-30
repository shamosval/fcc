//You are given an integer array nums consisting of n elements, and an integer k.
//
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
//
//
//
// Example 1:
//
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:
//
// Input: nums = [5], k = 1
// Output: 5.00000
//
//
// Constraints:
//
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    function calculateSum(array) {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum;
    }

    let maxSum = calculateSum(nums.slice(0,k));

    let sum = maxSum



    for (let i = 0; i < nums.length - k; i++) {



        sum = (sum - nums[i] + nums[k + i]);


        if (sum > maxSum) {
            maxSum = sum;
        }
    }




    return maxSum/k;
};

nums = [493,593,1446,-6013,2163,8450,3008,-1328,6195,4102,-6242,-9971,-8327,4480,-4972,-8305,-1644,2320,331,2465,2955,-8386,-7580,1759,-9576,-8088,-9446,-2916,-3600,923,1412,-5390,4492,9458,-9336,-4754,-3455,9597,-324,-5628,4242,4076,8159,-2423,-3449,6744,9029,-9231,2283,6118,-200,3610,-7566,-6976,2519,9532,2221,-5167,-2370,1861,-1558,-9815,-1186,2021,7050,-4504,4926,8362,7805,-8274,-351,5826,7623,-5520,-2395,-8466,-8461,3261,-3197]
k = 7

console.log("answer is ",findMaxAverage(nums, k));