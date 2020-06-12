/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //create empty object
  //loop through numbers
  //push each value of nums as a key in obj and give value 1
  //if key shows up again, value ++
  //return object.value that is the highest

  const seen = {}
  let value = 0;
  let keyReturn

  for (let i = 0; i < nums.length; i++) {
    if (!seen[nums[i]]) {
      seen[nums[i]] = 1
    }

    if (seen[nums[i]]) {
      seen[nums[i]]++
    }
  }

  for (const key in seen) {
    if (seen[key] > value) {
      value = seen[key]
      keyReturn = key

    }

  }
  return keyReturn;

};
