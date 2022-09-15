/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  //global result
  const result = [];

  //dfs helper function
  const dfs = (i, nums) => {
    //base case
    if (i === nums.length) {
      result.push(nums.slice());
    }

    //dfs recursive
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);
  return result;
};
