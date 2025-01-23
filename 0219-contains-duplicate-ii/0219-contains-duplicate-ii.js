/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const newNums = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(newNums.has(nums[i])) {
            if(Math.abs(i - newNums.get(nums[i])) <= k) {
                return true;
            }
        }
        newNums.set(nums[i], i);
    }
    return false;
};