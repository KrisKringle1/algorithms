/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // loop through each of the nums
  //create a tracking function
  //track checks to see if the number is included in teh array
  //if it isnt, track the num in the array
  //recursively call the track a function
  const answer = [];

  const track = (curr) => {
    if (curr.length === nums.length) {
      answer.push(curr);
      return;
    }
  };

  for (const num of nums) {
    if (!curr.includes(num)) track(...curr, num);
  }

  track();

  return answer;
};
