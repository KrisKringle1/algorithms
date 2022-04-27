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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  const storage = {};

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (!storage[curr]) {
      storage[curr] = 1;
    } else {
      storage[curr]++;
    }
  }
  const counts = [];
  for (let i = 0; i < arr.length; i++) {
    if (counts.length === 100) {
      return counts;
    }
    if (storage[i]) {
      counts.push(storage[i]);
    } else {
      counts.push(0);
    }
  }

  return counts;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = countingSort(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
