//You are given an integer array height of length n. There are n vertical lines drawn such that the two
// endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container
// contains the most water.
//
// Return the maximum amount of water a container can store.
//
// Notice that you may not slant the container.



/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let leftPoint = 0;
    let rightPoint = height.length - 1;
    let area = 1;
    let lesserPointerValue;
    let distanceBetweenWalls;

    if (height.length === 2) {
        if (height[0] > height[1]) {
            lesserPointerValue =  height[1];
        } else {
            lesserPointerValue = height[0];
        }
        return lesserPointerValue;
    }

    while (leftPoint <= rightPoint) {

        if (height[leftPoint] > height[rightPoint]) {
            lesserPointerValue =  height[rightPoint];
        } else {
            lesserPointerValue = height[leftPoint];
        }
        distanceBetweenWalls = rightPoint - leftPoint;


        if (lesserPointerValue * distanceBetweenWalls > area) {
            area = lesserPointerValue * distanceBetweenWalls;
        }

        if (height[leftPoint] > height[rightPoint]) {
            rightPoint--;
        } else {
            leftPoint++;
        }

    }

    return area;





};



height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height));