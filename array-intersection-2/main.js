/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {};
  const result = [];
  //construct the hashmap of the first array
  //loop through the 2nd array
  //if current num value > 0, push into result array
  //decrement current num value
  //return result array

  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    if (!map[curr]) {
      map[curr] = 1;
    } else {
      map[curr]++;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i];

    if (map[curr] > 0) {
      result.push(curr);
      map[curr]--;
    }
  }
  return result;
};
