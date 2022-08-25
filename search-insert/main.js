/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //loop through nums
  //if nums[i-1] < nums[i] && nums[i] < nums[i + 1] return i

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }

    if (nums[i - 1] < target && target < nums[i + 1]) {
      return i;
    }

    if (nums[i - 1] < target && nums[i + 1] === undefined) {
      return i + 1;
    }

    if (nums[i - 1] === undefined && target < nums[i]) return i;
  }
};
