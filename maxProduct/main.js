/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //create 2 variables and assign them null
  //loop through nums
  //assign first number to first iteration
  //if number at i is greater than first number, first number becomes
  //2nd number and first number becomes nums[i]
  //when loop finishes, subtract 1 from each number and multiply them together

  let firstNumber = null;
  let secondNumber = null;

  for (let i = 0; i < nums.length; i++) {
    debugger;
    if (!firstNumber) {
      firstNumber = nums[i]
    }


    if (nums[i] >= firstNumber && i !== 0) {
      secondNumber = firstNumber
      firstNumber = nums[i]
    }

    if (nums[i] > secondNumber && nums[i] < firstNumber) {
      secondNumber = nums[i]
    }
  }
  secondNumber--
  firstNumber--
  const product = firstNumber * secondNumber
  return product
};


function boo() {
  const first = null

  if (first) {
    return true
  }
  return false
}
