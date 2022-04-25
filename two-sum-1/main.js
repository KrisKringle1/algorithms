/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //loop through nums and find if a number is lower than the target
  //if it is, loop through every number after it and add them together to see if they hit target
  //if they do, return the indexes of the 2 numbers, else, move forward in theloop

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num <= target || Math.sign(num) === -1) {
      for (let j = i + 1; j < nums.length; j++) {
        const nextNum = nums[j];
        if (num + nextNum === target) {
          return [i, j];
        }
      }
    }
  }
};
