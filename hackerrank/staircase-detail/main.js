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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  let spaces = n - 1;
  let hash = 1;

  for (let i = 0; i < n; i++) {
    let string = "";

    for (let j = 0; j < spaces; j++) {
      let space = " ";
      string += space;
    }

    for (let k = 0; k < hash; k++) {
      string += "#";
    }

    spaces--;
    hash++;

    console.log(string);
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}
