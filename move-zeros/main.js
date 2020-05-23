//Input: [0,1,0,3,12]
//Output: [1, 3, 12, 0, 0]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //loop through array
  //if 0 - unshift out of array
  //shift back into array

  let numLength = nums.length;
  for (let i = 0; i < numLength; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      numLength--;
      i--;

    }
  }
  return nums;

}
