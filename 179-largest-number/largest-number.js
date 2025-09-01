/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => (b + "" + a) - (a + "" + b));
    let result = nums.join("");
    if (result[0] === "0") result = "0";
    return result;
};