/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //create variable that is the length of nums (numsLength)
  //loop through the array of nums using the length variable as your condition (let i = 0; i < numsLength; i++)
  //if number is a 0, splice it out and (nums.splice(i, 1))
  //reduce numsLength (numsLength--)
  //push a 0 at the end of the array
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      numsLength--;
      i--;
      nums.push(0);
    }
  }
  return nums;
};
