//Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both,
//as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also
// evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
    //Sort arr
    arr.sort((a, b) => a - b);
    let result = arr[1];
    let resultFound;

    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = arr[0]; i <= arr[1]; i++) {
        upperBound *= i;
    }
    for (let i = 1; i <= upperBound; i++) {
        result = arr[1] * i;
        for (let j = arr[0]; j < arr[1]; j++) {
            if (result % j == 0) {
                resultFound = true;
            } else {
                resultFound = false;
                break;
            }
        }
        if (resultFound) {
            console.log('result is', result)
            return result;
        }
    }
}

//smallestCommons([1, 5]) should return a number.
//smallestCommons([1, 5]) should return 60.
//smallestCommons([5, 1]) should return 60.
//smallestCommons([2, 10]) should return 2520.
//smallestCommons([1, 13]) should return 360360.
//smallestCommons([23, 18]) should return 6056820.