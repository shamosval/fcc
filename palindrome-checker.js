//Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
//
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
//
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker


function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

function palindrome(str) {
    let arr = str.trim().toLowerCase().split('')
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (isAlphanumeric(arr[i])) {
            newArr.push(arr[i]);
        }
    }


    for (let i = 0; i < (newArr.length / 2); i++) {
        if (newArr[i] !== newArr[(newArr.length - 1 - i)]) {
            return false;
        }
    }

    return true;
}

palindrome("eCbybce");


//ed:palindrome("eye") should return a boolean.
// Passed:palindrome("eye") should return true.
// Passed:palindrome("_eye") should return true.
// Passed:palindrome("race car") should return true.
// Passed:palindrome("not a palindrome") should return false.
// Passed:palindrome("A man, a plan, a canal. Panama") should return true.
// Passed:palindrome("never odd or even") should return true.
// Passed:palindrome("nope") should return false.
// Passed:palindrome("almostomla") should return false.
// Passed:palindrome("My age is 0, 0 si ega ym.") should return true.
// Passed:palindrome("1 eye for of 1 eye.") should return false.
// Passed:palindrome("0_0 (: /-\ :) 0-0") should return true.
// Passed:palindrome("five|\_/|four") should return false.