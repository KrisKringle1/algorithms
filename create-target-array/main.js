/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {

  const arrayCopy = nums;

  index.forEach(element => {
    debugger;
    arrayCopy.splice(element, 1, nums[element])
  })
  return arrayCopy

};
