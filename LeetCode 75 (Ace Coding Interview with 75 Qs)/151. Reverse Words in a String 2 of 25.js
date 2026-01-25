/**
 * @param {string} s
 * @return {string}
 */

let s = "a good   example"

var reverseWords = function(s) {

    let arrayOfWords = []
    let word = [];

    for (let i = 0; i <= s.length; i++) {


        if (s[i] === ' ' || s[i] === undefined) {
            arrayOfWords.push(word.join(''));
            word = [];

        } else  {
            word.push(s[i]);
        }

    }


    let reversedArr = []
    for (let i = arrayOfWords.length - 1; i >= 0; i--) {

        if (arrayOfWords[i] !== '') {
            reversedArr.push(arrayOfWords[i]);
        }

    }
    console.log(reversedArr.join(' '))
    return reversedArr.join(' ');

};

reverseWords(s);


//var reverseWords = function(s) {
//     return s
//         .trim()
//         .split(/\s+/)
//         .reverse()
//         .join(' ');
// };
