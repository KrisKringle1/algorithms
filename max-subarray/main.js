/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //create a max variable
  //get the starting number
  //return nums[0] if length is 1
  //math.max of the max number or accumulated number
  //return max number

  if (nums.length === 1) {
    return nums[0];
  }
  let max = nums[0];
  let acc = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let calc = Math.max(nums[i], acc + nums[i]);

    if (calc > max) {
      max = calc;
    }
    acc = calc;
  }
  return max;
};
