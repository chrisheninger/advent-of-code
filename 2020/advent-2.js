// https://adventofcode.com/2020/day/2
const fs = require("fs");
const data = fs.readFileSync("./advent-2.txt").toString("utf-8").split("\n");

// Example:
// 13-15 c: cqbhncccjsncqcc

// part 1 🌟
const dataCleanup = data.map((line) => {
  const nasty = line.split(" ");
  const occurences = nasty[0].split("-");
  const occurencesMin = occurences[0];
  const occurencesMax = occurences[1];
  const character = nasty[1].substring(0, 1);
  const input = nasty[2];

  return {
    occurencesMin,
    occurencesMax,
    character,
    input,
  };
});

let counter = 0;
dataCleanup.forEach((line) => {
  const occurences = line.input.split(line.character).length - 1;
  if (line.occurencesMin <= occurences && line.occurencesMax >= occurences) {
    counter++;
  }
});

console.log(counter);

// part 2 🌟
const dataCleanup2 = data.map((line) => {
  const nasty = line.split(" ");
  const positions = nasty[0].split("-");
  const character = nasty[1].substring(0, 1);
  const input = nasty[2];

  return {
    positions,
    character,
    input,
  };
});

let counter2 = 0;
dataCleanup2.forEach((line) => {
  const position1 = line.positions[0] - 1;
  const position2 = line.positions[1] - 1;
  const position1character = line.input.substring(position1, position1 + 1);
  const position2character = line.input.substring(position2, position2 + 1);
  if (
    (position1character === line.character &&
      position2character !== line.character) ||
    (position1character !== line.character &&
      position2character === line.character)
  ) {
    counter2++;
  }
});
console.log(counter2);
