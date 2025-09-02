/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = new Array(nums.length);
    let rightSum = new Array(nums.length);
    let sum = 0;
    let answer = [];
    for(i = 0; i < nums.length; i++) {
        sum += nums[i];
        leftSum[i] = sum;
    }
    sum = 0;
    for(i = nums.length - 1; i >= 0; i--) {
        sum += nums[i]; 
        rightSum[i] = sum;
    }
    answer = leftSum.map((val, i) => Math.abs(val - rightSum[i]));
    return answer;
};