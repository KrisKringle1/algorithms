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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  //extract the hour
  //rules
  //if its PM
  //if hour is < 12
  //return string
  //if hour is 12 and its AM
  //return 00 for hour

  const hour = s[0] + s[1];
  const mins = s[3] + s[4];
  const seconds = s[6] + s[7];
  const timeOfDay = s[8] + s[9];

  const hourInt = parseInt(hour);

  if (timeOfDay === "PM" && hourInt < 12) {
    const newHour = hourInt + 12;
    return newHour + ":" + mins + ":" + seconds;
  }

  if (timeOfDay === "AM" && hourInt === 12) {
    return "00" + ":" + mins + ":" + seconds;
  }

  return hour + ":" + mins + ":" + seconds;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
