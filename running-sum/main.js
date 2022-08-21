/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  //loop through nums
  const array = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i > 0) {
      for (let j = 0; j < i; j++) {
        num += nums[j];
      }
    }

    array.push(num);
  }
  return array;
};
