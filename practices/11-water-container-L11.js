/**
 * @param {number[]} height
 * @return {number}

 - write a function that determines area
 - have left and right variables and move the one with smaller height
 - return the max
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    const area = (right,left) => {
        let area = (right - left) * Math.min(height[right], height[left]);
        return area
    }

    while(right > left){
        max = Math.max(area(right,left), max)
        if(height[right] >= height[left]){
            left++    
        } else right--;

    }
    return max;
};