/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  //define counter at 0
  //loop through nums
  //turn number into a string
  //if element.length % 2 === 0 , counter ++
  //return counter

  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let string = nums[i] + ""
    if (string.length % 2 === 0) {
      counter++
    }
  }

  return counter;


};
