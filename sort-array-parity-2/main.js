/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  //create a return array
  //loop through numbers
  // if i % 2 === 0, find an event in nums and put it in that index
  //else find an odd number and put it in that index
  //   const sorted = [];
  //   const length = nums.length;
  //   for (let i = 0; i < length; i++) {
  //     if (i % 2 === 0) {
  //       const even = nums.find((element) => element % 2 === 0);
  //       const index = nums.indexOf(even);
  //       sorted.push(even);
  //       nums.splice(index, 1);
  //     } else {
  //       const odd = nums.find((element) => element % 2 > 0);
  //       const index = nums.indexOf(odd);
  //       sorted.push(odd);
  //       nums.splice(index, 1);
  //     }
  //   }

  //   return sorted;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (i % 2 === 0) {
      if (curr % 2 === 0) {
        continue;
      } else {
        const index = nums.findIndex((element) => element % 2 === 0);
        const switchNum = nums[index];
        nums[i] = switchNum;
        nums[index] = curr;
      }
    }

    if (i % 2 > 0) {
      if (curr % 2 > 0) {
        continue;
      } else {
        const index = nums.findIndex((element) => element % 2 === 0);
        const switchNum = nums[index];
        nums[i] = switchNum;
        nums[index] = curr;
      }
    }
  }

  return nums;
};
