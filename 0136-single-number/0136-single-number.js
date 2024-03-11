/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var l = nums.length;
        
        unique = [];

    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            if (i === j) {
                continue;
            }
            if (nums[i] === nums[j]) {
                break;
            }
        }
        if (j === l) {
            unique.push(nums [i]);
        }
    }
    return unique;
};