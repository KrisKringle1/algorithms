/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //create addion function that adds the square of the 2 digits together
  //create a while loop that goes through the function while number is not equal to 1
  //create a seen object
  //if addition returns a number thats in the seen object, return false
  //if number = 1 return true

  const addition = (number) => {
    if (number === 1) return;
    let total = 0;
    const string = number + "";
    for (let i = 0; i < string.length; i++) {
      const curr = string[i];
      total += parseInt(curr * curr);
    }
    return total;
  };

  const newNumber = addition(n);
  if (newNumber === 1) {
    return true;
  }

  isHappy(newNumber);
};
