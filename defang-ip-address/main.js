/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current; // 3
    if (seen[diff] !== undefined) {
      const firstIndex = seen[diff];
      return [firstIndex, i];
    } else {
      seen[current] = i;
    }
  }
}
