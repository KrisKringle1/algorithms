/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //sort the array from least to greatest
  //loop through the numbers
  //if curr + 1 !== next, return the missing number

  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const curr = sorted[i];
    const currOne = curr + 1;
    const next = sorted[i + 1];

    if (i === 0) {
      if (curr !== 0) {
        return 0;
      }
    }

    if (currOne !== next) {
      return currOne;
    }
  }
};
