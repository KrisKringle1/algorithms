/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //put all symbols into an object
  //loop through the string and add all of the numbers together
  //return the number

  const roman = s;

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let translatedNumber = 0;

  for (let i = 0; i < roman.length; i++) {
    const currNumber = roman[i];
    const nextNumber = roman[i + 1];
    const thirdNumber = roman[i + 2];

    if (currNumber === "I" && nextNumber === "V") {
      if (thirdNumber === "X") {
        console.log("9");
        translatedNumber += 9;
        i += 2;
      } else {
        console.log("4");
        translatedNumber += 4;
        i++;
      }
    } else if (currNumber === "C" && nextNumber === "D") {
      if (thirdNumber === "M") {
        console.log("900");
        translatedNumber += 900;
        i += 2;
      } else {
        console.log("400");
        translatedNumber += 400;
        i++;
      }
    } else if (currNumber === "X" && nextNumber === "L") {
      if (thirdNumber === "C") {
        console.log("90");
        translatedNumber += 90;
        i += 2;
      } else {
        console.log("40");
        translatedNumber += 40;
        i++;
      }
    } else {
      console.log("normal add");
      translatedNumber += map[currNumber];
    }
  }

  return translatedNumber;
};
