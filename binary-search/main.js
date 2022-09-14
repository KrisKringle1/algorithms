/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //const low = nums[0], const high = nums[nums.length-1]
  //find mid point - mid = Math.floor(low + (high - low) / 2)
  //if mid = target, return mid
  //else if mid < target
  //mid = low + 1
  //else
  //high = mid
  //while low < high repeat logic, return -1
  let low = 0;
  let high = nums.length;

  do {
    let mid = Math.floor(low + (high - low) / 2);
    let value = nums[mid];
    if (value === target) {
      return mid;
    } else if (mid < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  } while (low < high);
  return -1;
};
