/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  //nums for each element, check element agaisnt every otehr in the array
  //if num is > num [i] counter ++
  //push counter into new array
  //return new array
  const returnArray = []
  nums.forEach(element => {
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
      if (element > nums[i]) {
        counter++
      }
    }
    returnArray.push(counter)
  })
  return returnArray
};
