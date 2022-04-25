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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  /* 
    let zeros = 0;
    let negatives = 0;
    let positives = 0;
    const size = arr.length;
    
    loop through the array
        check if number is positive, negative, or 0 and increase the variable
    
    return [positive, negative, zeros]
    */

  let zeros = 0;
  let negatives = 0;
  let positives = 0;
  const size = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (curr > 0) {
      positives++;
    }

    if (curr < 0) {
      negatives++;
    }

    if (curr === 0) {
      zeros++;
    }
  }

  const pos = positives / size;
  const neg = negatives / size;
  const zer = zeros / size;

  console.log(pos.toFixed(6));
  console.log(neg.toFixed(6));
  console.log(zer.toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
