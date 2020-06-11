/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //sort array
  //return the sum of the last 2 in the array
  if (nums.length === 1) {
    return nums[0]
  }

  const sortedArray = nums.sort((a, b) => a - b);
  const lastIndex = sortedArray.length - 1
  let secondLastIndex = sortedArray.length - 2

  if (sortedArray[lastIndex] === sortedArray[secondLastIndex]) {
    while (sortedArray[secondLastIndex] === sortedArray[lastIndex]) {
      secondLastIndex--;
    }
  }
  const first = sortedArray[lastIndex];
  const last = sortedArray[secondLastIndex];

  if (Math.sign(first) === -1 && Math.sign(last) === -1) {
    return last - first
  }

  const max = first + last;

  if (max === -1) {
    return 1
  }


  return max;
};


// solution ?

//   let maxSubArray = A => {
//     let sum = A[0],
//       max = A[0];
//     for (let i = 1; i < A.length; ++i)
//       sum = Math.max(sum + A[i], A[i]),
//         max = Math.max(max, sum);
//     return max;
//   };
