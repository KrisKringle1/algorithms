/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //create an object literal
  //loop through each number in numbers and store it in the object literal
  //if number exists already in object, return true
  //if loop finishes return false

  const storage = {};

  for (let i = 0; i < nums.length; i++) {
    const currNumber = nums[i] + "";

    if (!storage[currNumber]) {
      storage[currNumber] = currNumber;
    } else {
      return true;
    }
  }
  return false;
};
