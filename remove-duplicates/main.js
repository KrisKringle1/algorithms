/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //create an empty object
  //push values to new object
  //if value exists in object, splice from array
  //return array.length


  var seenObj = {}

  for (let i = 0; i < nums.length; i++) {

    if (!seenObj[nums[i]]) {
      seenObj[nums[i]] = nums[i]
    } else {
      nums.splice(i, 1)

      i--;
    }

  }
  return nums;
};
