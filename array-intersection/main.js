/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  //find the array with the smaller length
  //loop through the smaller array (array1)
  //find the index of the value within the other array(array2)

  //check if the next number in the loop is the neighbor of the other element (array1[i + 1] === array2[i-1] || array2[i + 1] )
  //if true, return the two numbers in an array
  if (nums1.length === 1) {
    return nums1;
  }
  let num1;
  let num2;
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      const num = nums1[i];

      const nextNum = nums1[i + 1];
      const index = nums2.indexOf(num);

      if (index) {
        num2 = nums2[index];
        const left = nums2[index - 1];
        const right = nums2[index + 1];

        if (nextNum === left && num2 !== undefined) {
          return [num2, nextNum];
        }

        if (nextNum === right && num2 !== undefined) {
          return [num2, nextNum];
        }
      }
    }
    return [num2];
  } else {
    for (let i = 0; i < nums2.length; i++) {
      const num = nums2[i];
      const nextNum = nums2[i + 1];
      const index = nums1.indexOf(num);
      if (index) {
        num1 = nums1[index];

        const left = nums1[index - 1];
        const right = nums1[index + 1];

        if (nextNum === left && num1 !== undefined) {
          return [num1, nextNum];
        }

        if (nextNum === right && num1 !== undefined) {
          return [num1, nextNum];
        }
      }
    }
    return [num1];
  }
};
