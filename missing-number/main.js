/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let number = 0
  var i = 0

  for (i; i < nums.length; i++) {
    debugger;
    number = i;
    if (!nums.indexOf(i)) {
      return number;
    }
  }
};
