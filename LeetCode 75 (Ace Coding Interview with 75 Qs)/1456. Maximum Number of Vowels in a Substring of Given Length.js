//Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
//
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
//
//
//
// Example 1:
//
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:
//
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:
//
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    function isVowel(char){
        return (char === 'a' ||char === 'e' ||char === 'i' ||char === 'o' ||char === 'u' );

    }

    let maxNum = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            maxNum++;
        }
    }

    if (maxNum === k) {
        return k;
    }

    let tempMaxNum = maxNum;

    for (let i = 0; i < s.length - k; i++) {

        if(isVowel(s[i])) {
            tempMaxNum--;
        }
        if(isVowel(s[i + k])) {
            tempMaxNum++;
        }
        if(tempMaxNum === k) {
            return k;
        }
        if (tempMaxNum > maxNum) {
            maxNum = tempMaxNum;
        }


    }


    return maxNum;




};

s = 'leetcode'
k = 3;

console.log(maxVowels(s, k));
