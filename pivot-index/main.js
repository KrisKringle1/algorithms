/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //create a total sum of the array
  //loop through nums
  //create a leftSum
  //add each number in nums to left sum
  //if leftSum == sum - leftSum - nums[i] return i
  //finish loop return -1

  const sum = nums.reduce((curr, acc) => acc + curr);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (leftSum === sum - leftSum - curr) {
      return i;
    }
    leftSum += curr;
  }

  return -1;
};
