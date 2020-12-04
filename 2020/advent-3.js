// https://adventofcode.com/2020/day/3
const fs = require("fs");
const data = fs.readFileSync("./advent-3.txt").toString("utf-8").split("\n");

// Example, needs to repeat infinitely right:
// .....#.##......#..##..........#

// part 1 🌟
const lineLength = data[0].length; // 31
let positionLeft = 0;
let treeCounter = 0;
data.forEach((line, index) => {
  // skip the first line, 'cause we movin' down
  if (index !== 0) {
    positionLeft = positionLeft + 3;
    if (line[positionLeft % lineLength] === "#") {
      treeCounter++;
    }
  }
});
console.log(treeCounter);

// part 2 🌟
let slope1TreeCounter = 0;
let slope1PositionLeft = 0;
data.forEach((line, index) => {
  // skip the first line, 'cause we movin' down
  if (index !== 0) {
    slope1PositionLeft = slope1PositionLeft + 1;
    if (line[slope1PositionLeft % lineLength] === "#") {
      slope1TreeCounter++;
    }
  }
});

let slope2TreeCounter = treeCounter;

let slope3TreeCounter = 0;
let slope3PositionLeft = 0;
data.forEach((line, index) => {
  // skip the first line, 'cause we movin' down
  if (index !== 0) {
    slope3PositionLeft = slope3PositionLeft + 5;
    if (line[slope3PositionLeft % lineLength] === "#") {
      slope3TreeCounter++;
    }
  }
});

let slope4TreeCounter = 0;
let slope4PositionLeft = 0;
data.forEach((line, index) => {
  // skip the first line, 'cause we movin' down
  if (index !== 0) {
    slope4PositionLeft = slope4PositionLeft + 7;
    if (line[slope4PositionLeft % lineLength] === "#") {
      slope4TreeCounter++;
    }
  }
});

let slope5TreeCounter = 0;
let slope5PositionLeft = 0;
data.forEach((line, index) => {
  // skip the first line, 'cause we movin' down
  if (index !== 0) {
    // we're going right 1 down 2
    if (index % 2 === 0) {
      slope5PositionLeft = slope5PositionLeft + 1;
      if (line[slope5PositionLeft % lineLength] === "#") {
        slope5TreeCounter++;
      }
    }
  }
});

// console.log({
//   slope1TreeCounter,
//   slope2TreeCounter,
//   slope3TreeCounter,
//   slope4TreeCounter,
//   slope5TreeCounter,
// });

console.log(
  slope1TreeCounter *
    slope2TreeCounter *
    slope3TreeCounter *
    slope4TreeCounter *
    slope5TreeCounter
);
