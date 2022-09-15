/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //sort the array
  nums.sort((a, b) => a - b);
  const result = [];

  const twoSum = (start, target, nums) => {
    let end = nums.length - 1;
    let result = [];

    while (start < k) {
      let leftVal = nums[start];
      let rightVal = nums[end];

      if (leftVal + rightVal > target) {
        end--;
      } else if (leftVal + rightVal < target) {
        start++;
      } else {
        result.push([target * -1, leftVal, rightVal]);
        while (start < end && nums[start] === nums[start + 1]) start++;
        while (start < end && nums[end] === nums[end - 1]) end--;
        start++;
        k--;
      }
    }

    return result;
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i] * -1;

    let subResult = twoSum(i + 1, target, nums);

    result.push(...subResult);
  }

  return result;
};
