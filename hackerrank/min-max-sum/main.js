"use strict";

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  //sort the array from largest to greatest
  //pop off the last number
  //reduce them all together
  //repeat for minimum
  const maxCopy = [...arr];
  const minCopy = [...arr];
  const maxArray = maxCopy.sort((a, b) => a - b);
  const minArray = minCopy.sort((a, b) => a - b);

  minArray.pop();
  maxArray.shift();

  const min = minArray.reduce((prev, cur) => prev + cur);
  const max = maxArray.reduce((prev, cur) => prev + cur);

  console.log(min, max);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
