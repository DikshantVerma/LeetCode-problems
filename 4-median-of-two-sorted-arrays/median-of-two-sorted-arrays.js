/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let median = 0;
    let mergedArr = 0;
    mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
    let n = mergedArr.length;
    if (n % 2 === 1) {
    median = mergedArr[Math.floor(n / 2)];
    } 
    else {
        median = (mergedArr[n / 2 - 1] + mergedArr[n / 2]) / 2;
    }
    return median;
};