/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // const emptyArray = [];
  // debugger;
  // if (nums[0] === 2 && nums[1] === 2) {
  //   return [1, 2]
  // }

  // for (let i = 0; i < nums.length; i++) {

  //   if (nums[i] === nums[i + 1]) {
  //     emptyArray.push(nums[i])
  //     if (nums[i - 1] <= nums[i] || nums[i - 1] === undefined) {
  //       emptyArray.push(nums[i] + 1)
  //     } else {
  //       emptyArray.push(nums[i] - 1)
  //     }
  //   }

  //   if (emptyArray.length === 2) {
  //     return emptyArray;
  //   }

  // }
  // return emptyArray;
  const emptyArray = []


  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      emptyArray.push(nums[i])
      if (!nums.includes(nums[i] - 1)) {
        emptyArray.push(nums[i] - 1)

      } else if (!nums.includes(nums[i] + 1)) {
        emptyArray.push(nums[i] + 1)
      }

    }

  }

  return emptyArray;





};
