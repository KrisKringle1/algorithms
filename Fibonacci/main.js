/**
 * @param {number} N
 * @return {number}
 */
var fib = function (n) {
  debugger;
  if (n < 2) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
};
