// https://adventofcode.com/2023/day/3
const fs = require("fs");
const data = fs.readFileSync("./03.txt").toString("utf-8").split("\n");
console.log(data);

const width = data[0].length;
const height = data.length;
console.log({ width, height });

const validParts = [];

data.forEach((row, index) => {
  const regex = /\d+/g;
  const matches = [...row.matchAll(regex)];

  const results = matches.map((match) => ({
    number: match[0],
    position: match.index,
    rowIndex: index,
  }));

  results.forEach((result) => {
    checkAround(result);
  });
});

function checkAround({ number, position, rowIndex }) {
  // check above (including diagonals)
  if (rowIndex !== 0) {
    // console.log("above diagonal left", data[rowIndex - 1][position - 1]);
    const aboveDiagonalLeft = data[rowIndex - 1][position - 1];
    if (isSymbol(aboveDiagonalLeft)) {
      validParts.push(number);
      return;
    }

    number.split("").forEach((digit, index) => {
      //   console.log("above", data[rowIndex - 1][position + index]);
      const above = data[rowIndex - 1][position + index];

      if (isSymbol(above)) {
        validParts.push(number);
        return;
      }
    });

    // console.log(
    //   "above diagonal right",
    //   data[rowIndex - 1][position + number.length]
    // );
    const aboveDiagonalRight = data[rowIndex - 1][position + number.length];
    if (isSymbol(aboveDiagonalRight)) {
      validParts.push(number);
      return;
    }
  }

  // check below (including diagonals)
  if (rowIndex + 1 !== height) {
    // console.log("below diagonal left", data[rowIndex + 1][position - 1]);
    const belowDiagonalLeft = data[rowIndex + 1][position - 1];

    if (isSymbol(belowDiagonalLeft)) {
      validParts.push(number);
      return;
    }

    number.split("").forEach((digit, index) => {
      //   console.log("below", data[rowIndex + 1][position + index]);
      const below = data[rowIndex + 1][position + index];

      if (isSymbol(below)) {
        validParts.push(number);
        return;
      }
    });

    // console.log(
    //   "below diagonal right",
    //   data[rowIndex + 1][position + number.length]
    // );
    const belowDiagonalRight = data[rowIndex + 1][position + number.length];
    if (isSymbol(belowDiagonalRight)) {
      validParts.push(number);
      return;
    }
  }

  // check left
  //   console.log("left", data[rowIndex][position - 1]);
  const left = data[rowIndex][position - 1];
  if (isSymbol(left)) {
    validParts.push(number);
    return;
  }

  // check right
  //   console.log("right", data[rowIndex][position + number.length]);
  const right = data[rowIndex][position + number.length];
  if (isSymbol(right)) {
    validParts.push(number);
    return;
  }
}

function isSymbol(input) {
  if (!input) return false;
  const regex = /[^.\d]/g;
  const matches = input.match(regex);
  return matches;
}

console.log(validParts);
let sum = 0;
validParts.forEach((validPart) => (sum += Number(validPart)));

console.log(sum);
