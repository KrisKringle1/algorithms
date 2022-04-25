/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //while loop k > 0
  //pop off last index of array
  //unshift that value back into the array
  // k -=1

  while (k > 0) {
    const value = nums.pop();
    nums.unshift(value);
    k--;
  }
  return nums;
};
