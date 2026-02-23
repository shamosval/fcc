/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let answer = [];


    let productsToLeftEl = 1;
    let productsToRightEl = 1;

    for (let i = 0; i < nums.length; i++) {


        if (i > 0) {
            productsToLeftEl = productsToLeftEl * nums[i-1];
        }
        answer.push(productsToLeftEl)

    }

    for (let i = nums.length -1; i >= 0; i--) {
        // console.log('nums i is',nums[i])
        // console.log('nums[i + 1] is', nums[i + 1])

        if (i < nums.length - 1) {
            productsToRightEl = productsToRightEl * nums[i + 1]
        }

        // console.log('productsToRightEl is', productsToRightEl)
        answer[i] = answer[i]* productsToRightEl

    }


    console.log(answer)
    return answer;
};

nums = [1,2,3,4];

productExceptSelf(nums);


//Original solution - didn't pass time complexity requirement
// var productExceptSelf = function(nums) {
//
//     let answer = [];
//
//
//     for (let i = 0; i < nums.length; i++) {
//         let currentAnswerEl = 1;
//         for (let k = 0; k < nums.length; k++) {
//
//             if (i === k) {
//                 continue;
//             } else {
//                 currentAnswerEl = currentAnswerEl * nums[k];
//             }
//         }
//         answer.push(currentAnswerEl)
//     }
//
//
//
//     // console.log(answer)
//     return answer;
// };