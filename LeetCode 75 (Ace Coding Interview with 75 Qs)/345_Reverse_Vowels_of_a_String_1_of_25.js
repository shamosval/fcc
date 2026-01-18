/**
 * @param {string} s
 * @return {string}
 */
let s = 'IceCreAm'

function isVowel (char) {
    char = char.toLowerCase();
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

function reverseArray (arr) {
    let newIndex = 0;
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newIndex = arr.length - 1 - i;
        newArray.push(arr[newIndex]);
    }
    return newArray;
}

var reverseVowels = function(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            arr.push(i);
        }
    }
    arr = reverseArray(arr);

    let newStr = [];
    let counter = 0;

    for (let i = 0; i < string.length; i++) {

        if (isVowel(string[i])) {
            newStr.push(string[arr[counter]]);
            counter++;
        } else {
            newStr.push(string[i]);
        }

    }
return newStr.join("");


}

reverseVowels(s);

//Optimized solution with 2 pointers moving to the right and to the left simultaneously
//
// var reverseVowels = function(string) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let chars = string.split('');
//
//     let left = 0;
//     let right = chars.length - 1;
//
//     while (left < right) {
//
//         // Move left pointer until it finds a vowel
//         while (left < right && !vowels.has(chars[left].toLowerCase())) {
//             left++;
//         }
//
//         // Move right pointer until it finds a vowel
//         while (left < right && !vowels.has(chars[right].toLowerCase())) {
//             right--;
//         }
//
//         // Swap vowels
//         [chars[left], chars[right]] = [chars[right], chars[left]];
//
//         left++;
//         right--;
//     }
//
//     return chars.join('');
// };