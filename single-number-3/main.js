/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  //loop through each element in array
  //if first index === lastindex, push to new array
  //return new array
  const newArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      newArray.push(nums[i])
    }



  }

  return newArray
};
