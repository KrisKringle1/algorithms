/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (array) {
  //do an initial check of if array [0] and array [1] is greater or less than
  //depending on which direction, a while loop
  //while it goes in teh right direction, boolean = true
  //if it swaps, return false,
  //otherwise return true
  let i = 0
  if (array.length === 1) {
    return true;
  }

  if (array[0] < array[1]) {
    while (i < array.length) {
      if (array[i] > array[i + 1] && array[i + 1] !== undefined) {
        return false
      }

      i++
    }
    return true

  }

  if (array[0] > array[1]) {
    while (i < array.length) {
      if (array[i] < array[i + 1] && array[i + 1] !== undefined) {
        return false
      }
      i++;
    }

    return true;

  }

  if (array[0] === array[1]) {
    while (i < array.length) {
      if (array[i] !== array[i + 1] && array[i + 1] !== undefined) {
        if (array[i + 1] > array[i] && array[i + 1] !== undefined) {
          while (i < array.length) {
            if (array[i] > array[i + 1] && array[i + 1] !== undefined) {
              return false
            }

            i++
          }

        }

        if (array[i + 1] < array[i] && array[i + 1] !== undefined) {

          while (i < array.length) {
            if (array[i] < array[i + 1] && array[i + 1] !== undefined) {
              return false
            }
            i++;
          }
        }
      }

      i++;
    }
    return true;
  }
};
