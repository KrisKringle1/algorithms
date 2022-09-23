/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const num1Map = {};
  const results = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!num1Map[nums1[i]]) {
      num1Map[nums1[i]] = 1;
    } else {
      num1Map[nums1[nums1[i]]]++;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i];
    if (num1Map[curr] && !results.includes(curr)) {
      results.push(curr);
      num1Map[curr]--;
    }
  }
  return results;
};
