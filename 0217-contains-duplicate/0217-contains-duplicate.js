/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const uniqueSet = new Set(nums);
    return nums.length !== uniqueSet.size 
};