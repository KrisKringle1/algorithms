/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //loop through nums 2
  //find index of curr in nums 1
  //nums1.splice(index, 0 curr)
  //if no index
  //loop through each number in nums 1
  //continue until the current number is less than the next number
  //splice into current index
  //if loop finishes without splicing, push into array

  for (let i = 0; i < nums2.length; i++) {
    nums1.pop();
  }

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i];

    const index = nums1.indexOf(curr);

    if (index > 0) {
      nums1.splice(index, 0, curr);
    } else {
      let j = 0;
      while (curr > nums1[j]) {
        j++;
      }

      nums1.splice(j, 0, curr);
    }
  }

  return nums1;
};
