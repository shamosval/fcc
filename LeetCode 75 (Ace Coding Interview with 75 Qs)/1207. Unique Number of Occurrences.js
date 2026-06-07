// 1207. Unique Number of Occurrences
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
//
//
//
// Example 1:
//
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
//
// Input: arr = [1,2]
// Output: false
// Example 3:
//
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
//
//
// Constraints:
//
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let mapFromArr = new Map;



    for (let i = 0; i < arr.length; i++) {
        let counter = mapFromArr.get(arr[i]) ?? 0

        mapFromArr.set(arr[i],counter + 1);

    }



    const setFromMapFromAppValues = new Set(mapFromArr.values())
    return mapFromArr.size === setFromMapFromAppValues.size


};

arr = [-3,0,1,-3,1,1,1,-3,10,0]

console.log(uniqueOccurrences(arr));


// Original solution with crutches:
// var uniqueOccurrences = function(arr) {
//     let setFromArr = new Set(arr)
//
//     let numOfOccurrences = []
//     for (const item of setFromArr) {
//         let counter = 0;
//         for (let i = 0 ; i < arr.length; i++) {
//             if (arr[i] === item) {
//                 counter++;
//             }
//         }
//         numOfOccurrences.push(counter);
//     }
//
//
//
//     const setFromNumOfOccurrences = new Set(numOfOccurrences);
//
//     console.log("numOfOccurrences", numOfOccurrences)
//     console.log("setFromNumOfOccurrences", setFromNumOfOccurrences)
//
//     if (numOfOccurrences.length === setFromNumOfOccurrences.size) {
//         return true
//     } else {
//         return false
//     }
//
//
// };