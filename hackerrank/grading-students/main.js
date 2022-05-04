"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function checkDigit(digit) {
  if (
    digit === 7 ||
    digit === 6 ||
    digit === 5 ||
    digit === 2 ||
    digit === 1 ||
    digit === 0
  ) {
    return true;
  } else {
    return false;
  }
}
function gradingStudents(grades) {
  // Write your code here
  //create return array
  //loop through grades
  //check if number is less than 38, if yes then push into return arr
  //strigify number, if 2nd number in index is 7, 6, 5, 2, 1 , 0, push number into array
  // //if 2nd number is 9, 8, 4, 3, create the new number by rounding to the nearest 5

  const returnArr = [];

  for (let i = 0; i < grades.length; i++) {
    const curr = grades[i];

    if (curr < 38) {
      returnArr.push(curr);
    } else {
      const num = grades[i] + "";
      const digit = parseInt(num[1]);

      if (checkDigit(digit)) {
        returnArr.push(curr);
      } else {
        if (digit === 8 || digit === 9) {
          const newNum = parseInt(num[0]) + 1 + "" + 0;
          returnArr.push(parseInt(newNum));
        } else {
          const newNum = "" + num[0] + 5;
          returnArr.push(parseInt(newNum));
        }
      }
    }
  }

  return returnArr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
