/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const curr = nums[i];
    nums.push(curr);
  }

  return nums;
};
