//Flatten a nested array. You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// Global variables should not be used.


function steamrollArray(arr) {
    let newArr = []

    function flattenArr(array) {
        for (let i = 0; i < array.length; i++) {
            let elemIsArray = Array.isArray(array[i]);
            if (elemIsArray) {
                flattenArr(array[i]);
            } else {
                newArr.push(array[i])
            }
        }
    }

    flattenArr(arr);

    console.log(newArr)
    return (newArr)

}



//steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].