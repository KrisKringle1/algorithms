/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
  //loop through operations
  //for each operation, find the index of operation[0] in nunms and replace it with operation[1]

  for (let i = 0; i < operations.length; i++) {
    const currOp = operations[i];
    const index = nums.indexOf(currOp[0]);
    nums[index] = currOp[1];
  }

  return nums;
};
