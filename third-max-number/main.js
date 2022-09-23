/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  //let firstMax, 2ndmax, 3rsmax
  //loop throughs tring
  //if not defined, defined all 3 variables
  //if nums i > first number, second number
  //if nums i > first number and nums i greater than 2nd number, define 2nd number

  let firstMax = 0;
  let secondMax = 0;
  let thirdMax = 0;
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (curr > thirdMax) {
      firstMax = secondMax;
      secondMax = thirdMax;
      thirdMax = curr;
    } else if (curr > secondMax) {
      firstMax = secondMax;
      secondMax = curr;
    } else if (firstMax > curr) {
      firstMax = curr;
    }
  }
  return firstMax;
};
