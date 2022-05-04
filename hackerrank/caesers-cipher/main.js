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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here
  //create an empty string
  //loop through the string param
  //get the ASCII character from curr
  //append ASCII number + k to new string String.fromCharCode(num)
  let cipher = "";
  let newCode;
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    let ascii = curr.charCodeAt(0);

    if (ascii <= 90 && ascii >= 65) {
      if (k + ascii > 90) {
        let kCopy = k;
        while (kCopy > 0) {
          if (ascii === 90) {
            ascii = 64;
          }
          ascii++;
          kCopy--;
        }

        newCode = ascii;
      } else {
        newCode = ascii + k;
      }
    } else if (ascii <= 122 && ascii >= 97) {
      if (k + ascii > 122) {
        let kCopy = k;
        while (kCopy > 0) {
          if (ascii === 122) {
            ascii = 96;
          }
          ascii++;
          kCopy--;
        }

        newCode = ascii;
      } else {
        newCode = ascii + k;
      }
    } else {
      newCode = ascii;
    }
    const newChar = String.fromCharCode(newCode);
    cipher += newChar;
  }
  return cipher;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
