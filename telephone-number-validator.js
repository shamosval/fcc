//Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.
//
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.



//Helper function to find out of character is a number character
function isNum(char) {
    if (char >= '0' && char <= '9') {
        return true
    } else {
        return false
    }

}

function telephoneCheck(str) {
    //Create variables based on which we will check validity
    let arr = str.split('');
    let newArr = [];
    let codeAreaParanthesis = [];
    let placesInArrWhereParanthesisAreLocated = [];
    let arrDashes = [];


    for (let i = 0; i < arr.length; i++) {
        //Single out all chars that are numbers
        if (isNum(arr[i])) {
            newArr.push(arr[i])
        }
        //Single out paranthesis and their array locations
        if (arr[i] == '(' || arr[i] == ')') {
            codeAreaParanthesis.push(arr[i]);
            placesInArrWhereParanthesisAreLocated.push(i)
        }
        //Return false if phone number starts with '-'
        if (arr[0] == '-') {
            return false;
        }
        //Count all dashes in phone number
        if (arr[i] == '-') {
            arrDashes.push(arr[i])
        }
    }

    //If only 1 paranthesis or more than 2, return false
    if (codeAreaParanthesis.length > 0 && codeAreaParanthesis.length < 2 || codeAreaParanthesis.length > 2) {
        return false;
    }

    //If space between paranthesis is too long, return false
    if (placesInArrWhereParanthesisAreLocated[1] - placesInArrWhereParanthesisAreLocated[0] > 4) {
        return false;
    }

    //If phone number is less than 10 or more than 11 digits, return false
    if (newArr.length < 10 || newArr.length > 11) {
        return false;
    }

    //If phone number starts with country code and it's not '1', return false
    if (newArr.length == 11 && newArr[0] != '1') {
        return false;
    }

    //If more than 2 dashes in phone number, return false
    if (arrDashes.length > 2) {
        return false;
    }

    return true;
}

console.log(telephoneCheck("(6054756961)"));


// Passed:1. telephoneCheck("555-555-5555") should return a boolean.
// Passed:2. telephoneCheck("1 555-555-5555") should return true.
// Passed:3. telephoneCheck("1 (555) 555-5555") should return true.
// Passed:4. telephoneCheck("5555555555") should return true.
// Passed:5. telephoneCheck("555-555-5555") should return true.
// Passed:6. telephoneCheck("(555)555-5555") should return true.
// Passed:7. telephoneCheck("1(555)555-5555") should return true.
// Passed:8. telephoneCheck("555-5555") should return false.
// Passed:9. telephoneCheck("5555555") should return false.
// Passed:10. telephoneCheck("1 555)555-5555") should return false.
// Passed:11. telephoneCheck("1 555 555 5555") should return true.
// Passed:12. telephoneCheck("1 456 789 4444") should return true.
// Passed:13. telephoneCheck("123**&!!asdf#") should return false.
// Passed:14. telephoneCheck("55555555") should return false.
// Passed:15. telephoneCheck("(6054756961)") should return false.
// Passed:16. telephoneCheck("2 (757) 622-7382") should return false.
// Passed:17. telephoneCheck("0 (757) 622-7382") should return false.
// Passed:18. telephoneCheck("-1 (757) 622-7382") should return false.
// Passed:19. telephoneCheck("2 757 622-7382") should return false.
// Passed:20. telephoneCheck("10 (757) 622-7382") should return false.
// Passed:21. telephoneCheck("27576227382") should return false.
// Passed:22. telephoneCheck("(275)76227382") should return false.
// Passed:23. telephoneCheck("2(757)6227382") should return false.
// Passed:24. telephoneCheck("2(757)622-7382") should return false.
// Passed:25. telephoneCheck("555)-555-5555") should return false.
// Passed:26. telephoneCheck("(555-555-5555") should return false.
// Passed:27. telephoneCheck("(555)5(55?)-5555") should return false.
// Passed:28. telephoneCheck("55 55-55-555-5") should return false.
// Passed:29. telephoneCheck("11 555-555-5555") should return false.

