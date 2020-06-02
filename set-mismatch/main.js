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
  // const emptyArray = []


  // for (let i = 0; i < nums.length; i++) {
  //   if (emptyArray.length === 2) {
  //     return emptyArray
  //   }
  //   if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //     debugger;
  //     if (!nums.includes(nums[i] - 1) && i !== 0 && nums[i] - 1 !==0) {
  //       emptyArray.push(nums[i])
  //       emptyArray.push(nums[i] - 1)

  //     } else if (!nums.includes(nums[i] + 1) && i !== 0) {
  //       emptyArray.push(nums[i])
  //       emptyArray.push(nums[i] + 1)
  //     }

  //   }

  // }

  // return emptyArray;

  const emptyArray = []
  let index = 0;
  let checkNumber = 1;

  while (index < nums.length) {
    if (nums.indexOf(nums[index]) !== nums.lastIndexOf(nums[index])) {
      emptyArray.push(nums[index])
      break;
    }
    index++;

  }

  while (nums.includes(checkNumber)) {
    checkNumber++;
  }

  emptyArray.push(checkNumber);

  return emptyArray;



};
