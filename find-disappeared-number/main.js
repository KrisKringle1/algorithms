/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //loop through nums and put them in a map
  //find the min number and max number within this loop
  //loop through nums a second time with the min and max being the start
  //if i isnt in map, push it into the aray
  //if return array has no length, push max num + 1 into array

  const result = [];

  let min = null;
  let max = null;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (!map[curr]) {
      map[curr] = curr;
    }

    if (min === null) {
      min = nums[i];
    }

    if (max === null) {
      max = nums[i];
    }

    if (min > curr) {
      min = curr;
    }

    if (curr > max) {
      max = curr;
    }
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (!map[i]) result.push(i);
  }

  return result;
};
