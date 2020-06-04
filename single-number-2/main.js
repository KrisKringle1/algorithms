/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //loop through nums
  //if number at i is the last index, return i
  let i = 0
  while (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
    i++
  }
  return nums[i]
};
