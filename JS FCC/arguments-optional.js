//Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.


function addTogether() {
    if (arguments.length > 1) {
        for (let i = 0; i < 2; i++) {
            if(typeof(arguments[i]) != 'number') {
                return undefined;
            }
        }
        return (arguments[0] + arguments[1]);
    } else {
        let arg1 = arguments[0];
        if (typeof(arg1) != 'number'){
            return undefined;
        }
        return function(arg2){
            if (typeof(arg2) != 'number'){
                return undefined;
            }
            return arg1 + arg2
        }
    }
}

// addTogether(2, 3) should return 5.
// addTogether(23.4, 30) should return 53.4.
// addTogether("2", 3) should return undefined.
// addTogether(5, undefined) should return undefined.
// addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
// addTogether(5) should return a function.
// addTogether(5)(7) should return 12.
// addTogether(2)([3]) should return undefined.
// addTogether(2, "3") should return undefined.


