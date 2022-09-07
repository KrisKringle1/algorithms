/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (nums > 10) {
    nums.toString();
    let newNum = 0;
    for (let i = 0; i < nums.length; i++) {
      newNum += parseInt(nums[i]);
    }
    nums = newNum;
  }
  return nums;
};
