/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (array) {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] += 1;
    if (array[i] === 10) {
      array[i] = 0;
      if (i === 0) {
        array.unshift(1);
        return array;
      }
    } else {
      return array;
    };
  };
};