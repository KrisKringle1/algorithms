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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  //create storage object
  //loop through each sock in the pile and store the values of each key in the storage object
  //loop through the key / value pairs in the object
  //each time you subtract 2 and it equals 1 from the value of the pair of objects, increase //count by 1
  //return count

  const storage = {};
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    const curr = ar[i];

    if (!storage[curr]) {
      storage[curr] = 1;
    } else {
      storage[curr]++;
    }
  }

  for (const key in storage) {
    while (storage[key] > 0) {
      if (storage[key] - 2 >= 0) {
        pairs++;

        storage[key] -= 2;
      } else {
        storage[key] = 0;
      }
    }
  }

  return pairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
