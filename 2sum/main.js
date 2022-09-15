/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //define a hashmap
  //loop through each number in nums
  //if target-currentValue is defined in nums, return itself and index
  //else store value within map

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const computedValue = target - value;

    if (map[computedValue] !== undefined) {
      return [map[computedValue], i];
    } else {
      map[value] = i;
    }
  }
};
