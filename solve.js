const { memoryUsage } = require("process");

/**
 * You are given an array of integers nums, there is a sliding window of size k 
 * which is moving from the very left of the array to the very right. 
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let result = [];
    let max = 0;
    let nmax = 0;
    for(let i = 0; i < k; i++){
        if(nums[i] >= max) {
            nmax = max
            max = nums[i];
        } else {
            if(nmax < nums[i]) nmax = nums[i];
        }
    }
    result.push(max);
    let pointer = 0;
    let index = k
    while(index < nums.length){
        if(k === 1) nmax = nums[index+1]
        if(nums[pointer] === max) max = nmax;
        if(nums[index] > max) {
            nmax = max;
            max = nums[index];
        } else {
            if(nmax < nums[index]) nmax = nums[index];
        }
        result.push(max)
        index++
        pointer++
    }

    return result
    
};

//[1,-1]

const nums = [1,3,-1,-3,5,3,6,7]
const k = 3
const Output = [3,3,5,5,6,7];
console.log(maxSlidingWindow(nums,k));