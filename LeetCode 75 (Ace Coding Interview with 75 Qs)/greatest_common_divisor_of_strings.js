/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

//For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
//
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
//
//
//
// Example 1:
//
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
//
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
//
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
//
//
// Constraints:
//
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

var gcdOfStrings = function(str1, str2) {
    let longerString = str1;
    let shorterString = str2;
    if (str1.length < str2.length) {
        longerString = str2;
        shorterString = str1;
    }
    let answer = '';


    for (let i = 0; i < shorterString.length; i++) {

        let prefix = shorterString.slice(0, i + 1);
        console.log(prefix);
        console.log(prefixCanBuildResultString(prefix, longerString))
        console.log(prefixCanBuildResultString(prefix, shorterString))
        if (prefixCanBuildResultString(prefix, longerString) && prefixCanBuildResultString(prefix, shorterString)) {
            answer = prefix;
        }
    }


    console.log(answer);
    return answer;
};

function prefixCanBuildResultString(prefix, resultString) {
    if (resultString.length % prefix.length !== 0) {
        // console.log('cannot build shit')
        return false;
    }
    let size = prefix.length;
    let arr = []

    for (let i = 0; i < resultString.length; i+= size) {
        arr.push(resultString.slice(i, i + size));
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prefix) {
            // console.log('cannot build shit')
            return false;
        }
    }

    // console.log('successfully built string')
    return true;

}


gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX');

