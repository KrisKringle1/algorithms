/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //define a recursive function

  //go to end of the array
  //check if the number is a 9
  //if it isnt, add 1 to it
  //if it is, adjust the number to be a 0 and call the function again until the process stops
  let i = digits.length - 1;

  const recursion = (number) => {
    if (number !== 9) {
      return (digits[i] += 1);
    } else {
      digits[i] = 0;
      i--;
      if (i === -1) {
        digits.unshift(1);
        return;
      }
      recursion(digits[i]);
    }
  };

  recursion(digits[i]);
  return digits;
};
