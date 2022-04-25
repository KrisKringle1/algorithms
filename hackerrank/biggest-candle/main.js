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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  //sort array from greatest to least
  //loop through array
  //keep counting until you hit a diferent number than first index
  //return count

  let highestNum = {};
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    const curr = candles[i];

    if (!highestNum[curr]) {
      highestNum[curr] = 1;
    } else {
      highestNum[curr]++;
    }
  }

  const values = Object.values(highestNum);

  const sorted = values.sort((a, b) => b - a);
  return sorted[0];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((candlesTemp) => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + "\n");

  ws.end();
}
