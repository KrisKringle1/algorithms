/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
  //loop through array
  //add index and index + 1 together
  //if matching target, return index and index + 1

  for (let i = 0; i < nums.length; i++) {

    let newNumber = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        j++
      }
      if (newNumber + nums[j] === target) {
        return [i, j]
      }
    }


  }

};
