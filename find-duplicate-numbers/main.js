/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

  const filteredArr = nums.filter((element, index, arr) => {
    debugger;
    return arr.indexOf(element) !== arr.lastIndexOf(element)
  })

  return filteredArr;
};
