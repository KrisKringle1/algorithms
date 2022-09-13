/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const countingFunction = (stairsRemaining, savedResults) => {
    if (stairsRemaining < 0) {
      return 0;
    }
    if (stairsRemaining === 0) {
      return 1;
    }

    if (savedResults[stairsRemaining]) {
      return savedResults[stairsRemaining];
    }

    savedResults[stairsRemaining] =
      countingFunction(stairsRemaining - 1, savedResults) +
      countingFunction(stairsRemaining - 2, savedResults);
    return savedResults[stairsRemaining];
  };

  return countingFunction(n, {});
};
