/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

  const filteredArray = nums.filter((element, index, arr) => {

    return arr.indexOf(element) === arr.lastIndexOf(element)
  })

  return filteredArray;
};
