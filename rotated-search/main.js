/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //loop through array
  //find target
  //return target index
  //if target doesnt exist, return -1

  for (let i = 0; i < nums.length; i++) {
    debugger;
    if (nums[i] === target) {
      return i;

    }
  }
  return -1
};
