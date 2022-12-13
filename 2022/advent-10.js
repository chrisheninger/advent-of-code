// https://adventofcode.com/2022/day/10
const fs = require("fs");
const data = fs.readFileSync("./advent-10.txt").toString("utf-8").split("\n");
console.log(data);

let x = 1;

const register = [];

data.forEach((input) => {
  if (input === "noop") {
    register.push(null);
  } else {
    // addx
    const value = Number(input.split(" ")[1]);
    register.push(null);
    register.push(value);
  }
});

function addx(value, cycle) {
  if (cycle === currentCycle) {
    x += value;
  } else {
    currentCycle++;
    addx(value, cycle);
  }
}

let totalCount = 0;
register.forEach((value, index) => {
  const cycle = index + 1;
  if (
    cycle === 20 ||
    cycle === 60 ||
    cycle === 100 ||
    cycle === 140 ||
    cycle === 180 ||
    cycle === 220
  ) {
    console.log({ cycle, value, x });
    totalCount += x * cycle;
  }
  if (value) {
    x += value;
  }
});

console.log({ x, totalCount });
