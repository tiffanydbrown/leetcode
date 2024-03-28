/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const sumOfN = (n + 1) * n / 2;;

    let sumOfArray = 0;
    for(let i = 0; i < nums.length; i++) {
        sumOfArray += nums[i];
    }
    let missingNumber = sumOfN - sumOfArray;
    return missingNumber
};