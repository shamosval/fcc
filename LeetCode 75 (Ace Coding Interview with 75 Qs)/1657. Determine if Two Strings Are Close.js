//Two strings are considered close if you can attain one from the other using the following operations:
//
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
//
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
//
//
//
// Example 1:
//
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:
//
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:
//
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
//
//
// Constraints:
//
// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.



/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        count1[word1.charCodeAt(i) - 97]++
    }

    for (let i = 0; i < word2.length; i++) {
        count2[word2.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < count1.length; i++) {
        if (count1[i] && !count2[i]) {
            return false
        }
    }
    return(count1.sort((a, b) => a - b).toString() === count2.sort((a, b) => a - b).toString())


}


// var closeStrings = function(word1, word2) {
//     if (word1.length !== word2.length) {
//         return false;
//     }
//
//     let word1set = new Set (word1)
//     let word2set = new Set (word2)
//
//     if (word1set.size !== word2set.size) {
//         return false;
//     }
//
//     for (const letter of word1set) {
//         if (!word2set.has(letter)) {
//             return false;
//         }
//     }
//
//
//     let word1LettersOccurencesArr = []
//
//     for (let letter of word1set) {
//         let counter = 0;
//         for (let i = 0; i < word1.length; i++) {
//             if (letter === word1[i]) {
//                 counter++
//             }
//         }
//         word1LettersOccurencesArr.push(counter)
//     }
//
//
//     let word2LettersOccurencesArr = []
//
//     for (let letter of word2set) {
//         let counter = 0;
//         for (let i = 0; i < word2.length; i++) {
//             if (letter === word2[i]) {
//                 counter++
//             }
//         }
//         word2LettersOccurencesArr.push(counter)
//     }
//
//
//
//
//     return(word1LettersOccurencesArr.sort().toString() === word2LettersOccurencesArr.sort().toString())
//
//
//
//
// };


//
// var closeStrings = function(word1, word2) {
//     if (word1.length !== word2.length) {
//         return false;
//     }
//
//     let word1set = new Set (word1)
//     let word2set = new Set (word2)
//
//     if (word1set.size !== word2set.size) {
//         return false;
//     }
//
//     for (const letter of word1set) {
//         if (!word2set.has(letter)) {
//             return false;
//         }
//     }
//
//
//     let word1Map = new Map;
//     let word2Map = new Map;
//
//
//     for (let i = 0; i < word1.length; i++) {
//
//         let counter;
//         if(word1Map.get(word1[i])) {
//             counter = word1Map.get(word1[i])
//             counter++
//         } else {
//             counter = 1;
//         }
//
//         word1Map.set(word1[i], counter)
//
//     }
//     for (let j = 0; j < word2.length; j++) {
//
//         console.log(word2)
//         let counter;
//         if(word2Map.get(word2[j])) {
//             counter = word2Map.get(word2[j])
//             counter++
//         } else {
//             counter = 1;
//         }
//
//         word2Map.set(word2[j], counter)
//
//     }
//     return(word1Map.values().toArray().sort().toString() === word2Map.values().toArray().sort().toString())
//
//
//
//
//
//
// };


word1 = "acbbba"
word2 = "abbbcc"

console.log(closeStrings(word1, word2));