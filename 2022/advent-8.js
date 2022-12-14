// https://adventofcode.com/2022/day/8
const fs = require("fs");
const data = fs.readFileSync("./advent-8.txt").toString("utf-8").split("\n");
console.log(data);

const grid = [];
data.forEach((row) => {
  grid.push(row.split(""));
});

console.log(grid);

const totalRows = grid.length; // 5, 99
const totalColumns = grid[0].length; // 5, 99

const flatTrees = grid.flatMap((row) => row);

const visibleTrees = [];

function lookRight(startingIndex, comparisonIndex) {
  const startingTree = flatTrees[startingIndex];
  const comparisonTree = flatTrees[comparisonIndex + 1];

  if (startingIndex === 13) {
    console.log({
      startingTree,
      comparisonTree,
      startingIndex,
      comparisonIndex,
      flatTrees,
    });
  }

  if ((comparisonIndex + 1) % 4 === 0) {
    console.log("yo wtf", comparisonIndex);
    visibleTrees[startingIndex] = flatTrees[startingIndex];
    return;
  }

  if (startingTree > comparisonTree) {
    lookRight(startingIndex, comparisonIndex + 1);
  }
}
function lookLeft(startingIndex, comparisonIndex) {
  const startingTree = flatTrees[startingIndex];
  const comparisonTree = flatTrees[comparisonIndex - 1];

  if (comparisonIndex % 5 === 0) {
    visibleTrees[startingIndex] = flatTrees[startingIndex];
    return;
  }

  if (startingTree > comparisonTree) {
    lookLeft(startingIndex, comparisonIndex - 1);
  }
}
function lookDown(startingIndex, comparisonIndex) {
  const startingTree = flatTrees[startingIndex];
  const comparisonTree = flatTrees[comparisonIndex + totalColumns];

  if (startingTree > comparisonTree) {
    lookDown(startingIndex, comparisonIndex + totalColumns);
  }

  if (!comparisonTree) {
    visibleTrees[startingIndex] = flatTrees[startingIndex];
    return;
  }
}
function lookUp(startingIndex, comparisonIndex) {
  const startingTree = flatTrees[startingIndex];
  const comparisonTree = flatTrees[comparisonIndex - totalColumns];

  if (startingTree > comparisonTree) {
    lookUp(startingIndex, comparisonIndex - totalColumns);
  }

  if (!comparisonTree) {
    visibleTrees[startingIndex] = flatTrees[startingIndex];
    return;
  }
}

function lookAround(index) {
  lookUp(index, index);
  lookRight(index, index);
  lookDown(index, index);
  lookLeft(index, index);
}

for (let i = 0; i < flatTrees.length; i++) {
  if (i % totalColumns === 0) {
    // Left Border
    visibleTrees[i] = flatTrees[i];
  } else if (i % totalColumns === totalColumns - 1) {
    // Right border
    visibleTrees[i] = flatTrees[i];
  } else if (i < totalColumns) {
    // Top Border
    visibleTrees[i] = flatTrees[i];
  } else if (i > totalRows * totalColumns - totalColumns) {
    // Bottom Border
    visibleTrees[i] = flatTrees[i];
  } else {
    lookAround(i);
  }
}
console.log(visibleTrees);

let count = 0;
visibleTrees.forEach((tree) => {
  if (tree) {
    count++;
  }
});
console.log(count);
