/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //create an object
  //loop through nums and store each number into the objext
  //if number exists in object, return that number and break from loop
  const storage = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!storage[num]) {
      storage[num] = 1;
    } else {
      storage[num] += 1;
    }
  }

  console.log(storage);

  return Object.keys(storage).find((key) => storage[key] === 1);
};
