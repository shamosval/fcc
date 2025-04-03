function convertToRoman(num) {
    let romanNum = [];

    let thousands = Math.floor(num / 1000);

    if(thousands >= 1) {
        for (let i = 0; i < thousands; i++) {
            romanNum.push('M')
        }
    }


    let remainderAfterThousands;

    if (thousands >= 1) {
        remainderAfterThousands = num % 1000;
    } else {
        remainderAfterThousands = num;
    }

    if (remainderAfterThousands >= 100) {
        let hundreds = Math.floor(remainderAfterThousands / 100);

        if (hundreds == 9) {
            romanNum.push('CM')
        }
        if (hundreds == 8) {
            romanNum.push('DCCC')
        }
        if (hundreds == 7) {
            romanNum.push('DCC')
        }
        if (hundreds == 6) {
            romanNum.push('DC')
        }
        if (hundreds == 5) {
            romanNum.push('D')
        }
        if (hundreds == 4) {
            romanNum.push('CD')
        }
        if (hundreds == 3) {
            romanNum.push('CCC')
        }
        if (hundreds == 2) {
            romanNum.push('CC')
        }
        if (hundreds == 1) {
            romanNum.push('C')
        }

    }

    let remainderAfterHundreds = remainderAfterThousands % 100;


    if (remainderAfterHundreds >= 10) {
        let tens = Math.floor(remainderAfterHundreds / 10);

        if (tens == 9) {
            romanNum.push('XC')
        }
        if (tens == 8) {
            romanNum.push('LXXX')
        }
        if (tens == 7) {
            romanNum.push('LXX')
        }
        if (tens == 6) {
            romanNum.push('LX')
        }
        if (tens == 5) {
            romanNum.push('L')
        }
        if (tens == 4) {
            romanNum.push('XL')
        }
        if (tens == 3) {
            romanNum.push('XXX')
        }
        if (tens == 2) {
            romanNum.push('XX')
        }
        if (tens == 1) {
            romanNum.push('X')
        }
    }

    let remainderAfterTens = remainderAfterHundreds % 10;

    if (remainderAfterTens >= 1) {


        if (remainderAfterTens == 9) {
            romanNum.push('IX')
        }
        if (remainderAfterTens == 8) {
            romanNum.push('VIII')
        }
        if (remainderAfterTens == 7) {
            romanNum.push('VII')
        }
        if (remainderAfterTens == 6) {
            romanNum.push('VI')
        }
        if (remainderAfterTens == 5) {
            romanNum.push('V')
        }
        if (remainderAfterTens == 4) {
            romanNum.push('IV')
        }
        if (remainderAfterTens == 3) {
            romanNum.push('III')
        }
        if (remainderAfterTens == 2) {
            romanNum.push('II')
        }
        if (remainderAfterTens == 1) {
            romanNum.push('I')
        }
    }



    console.log(romanNum.join(''))

    return romanNum.join('');
}

convertToRoman(68);

// Passed:convertToRoman(2) should return the string II.
// Passed:convertToRoman(3) should return the string III.
// Passed:convertToRoman(4) should return the string IV.
// Passed:convertToRoman(5) should return the string V.
// Passed:convertToRoman(9) should return the string IX.
// Passed:convertToRoman(12) should return the string XII.
// Passed:convertToRoman(16) should return the string XVI.
// Passed:convertToRoman(29) should return the string XXIX.
// Passed:convertToRoman(44) should return the string XLIV.
// Passed:convertToRoman(45) should return the string XLV.
// Passed:convertToRoman(68) should return the string LXVIII
// Passed:convertToRoman(83) should return the string LXXXIII
// Passed:convertToRoman(97) should return the string XCVII
// Passed:convertToRoman(99) should return the string XCIX
// Passed:convertToRoman(400) should return the string CD
// Passed:convertToRoman(500) should return the string D
// Passed:convertToRoman(501) should return the string DI
// Passed:convertToRoman(649) should return the string DCXLIX
// Passed:convertToRoman(798) should return the string DCCXCVIII
// Passed:convertToRoman(891) should return the string DCCCXCI
// Passed:convertToRoman(1000) should return the string M
// Passed:convertToRoman(1004) should return the string MIV
// Passed:convertToRoman(1006) should return the string MVI
// Passed:convertToRoman(1023) should return the string MXXIII
// Passed:convertToRoman(2014) should return the string MMXIV
// Passed:convertToRoman(3999) should return the string MMMCMXCIX