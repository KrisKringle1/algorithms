/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //create an empty object
  //push values to new object
  //if value exists in object, splice from array
  //return array.length

  var seenObj = {};
  let arrayLength = nums.length;

  for (let i = 0; i < arrayLength; i++) {
    const number = nums[i];
    if (!seenObj[number]) {
      seenObj[number] = number;
    } else {
      nums.splice(i, 1);
      arrayLength--;
      i--;
    }
  }
  return nums;
};
