//Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let asciiCodeOfInputLetter = arr[i].charCodeAt();
        if (asciiCodeOfInputLetter < 65) {
            newArr.push(String.fromCharCode(asciiCodeOfInputLetter));
            continue;
        }
        let letterAsciiCodeForNewArr = arr[i].charCodeAt() - 13;
        if (letterAsciiCodeForNewArr < 65) {
            letterAsciiCodeForNewArr = letterAsciiCodeForNewArr + 26;
        }

        newArr.push(String.fromCharCode(letterAsciiCodeForNewArr))

    }
    console.log(newArr.join(''))
    return newArr.join('');
}

rot13("SERR PBQR PNZC");

// Passed:1. rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// Passed:2. rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// Passed:3. rot13("SERR YBIR?") should decode to the string FREE LOVE?
// Passed:4. rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.