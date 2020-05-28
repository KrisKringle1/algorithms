/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

  let i = 0;

  while (i < nums.length) {
    debugger;
    if (nums.indexOf(i) === -1) {
      return i;
    }
    i++;
  }
  return i++;
}
