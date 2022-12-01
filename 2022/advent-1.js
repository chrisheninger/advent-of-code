// https://adventofcode.com/2022/day/1
const fs = require("fs");
const data = fs.readFileSync("./advent-1.txt").toString("utf-8").split("\n");
console.log(data);

let elves = {};
let elfCounter = 1;

data.forEach((item) => {
  if (item) {
    console.log(Number(item));
    if (elves[elfCounter]) {
      elves[elfCounter] = Number(item) + Number(elves[elfCounter]);
    } else {
      elves[elfCounter] = Number(item);
    }
  } else {
    console.log(item);
    elfCounter++;
  }
});

console.log(elves);

// Part 1

// let maxCalorieElf = 0;
// let maxCalorieCount = 0;

// Object.keys(elves).forEach((elf) => {
//   console.log(elf);
//   console.log(elves[elf]);
//   if (elves[elf] > maxCalorieCount) {
//     maxCalorieElf = elf;
//     maxCalorieCount = elves[elf];
//   }
// });

// console.log({
//   maxCalorieCount,
//   maxCalorieElf,
// });

// Part 2
console.log(Object.values(elves));
const wtf = Object.values(elves).sort((a, b) => {
  return b - a;
});

const top3 = wtf[0] + wtf[1] + wtf[2];

console.log(top3);
