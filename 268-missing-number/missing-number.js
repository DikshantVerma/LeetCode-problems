/**
 * @param {number[]} nums
 * @return {number}
 */
// LeetSync code
var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = n * (n+1) /2;
    let arraySum = 0;
    for(let i =0; i < nums.length; i++ ) {
        arraySum = arraySum + nums[i];
    }
    return totalSum - arraySum;
};