/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //check to see if nums.length is 0 or null, return 0
  //check to see if nums.length is 1, return the only house
  //check to see if house.length == 2, return math.max(hosue1, hosue 2)
  //create runningTotal array
  //loop through each of the houses starting at the 2nd index

  if (nums === null || nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  let runningTotal = [];

  runningTotal[0] = nums[0];
  runningTotal[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    runningTotal[i] = Math.max(
      runningTotal[i - 1],
      runningTotal[i - 2] + nums[i]
    );
  }

  return runningTotal[runningTotal.length - 1];
};
