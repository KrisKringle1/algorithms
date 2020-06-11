/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //sort array
  //return the sum of the last 2 in the array
  let sum = nums[0]
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]),
      max = Math.max(max, sum);
    return max

  }
};
