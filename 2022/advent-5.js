// https://adventofcode.com/2022/day/5
const fs = require("fs");
const data = fs.readFileSync("./advent-5.txt").toString("utf-8").split("\n");
console.log(data);

const instructions = data.map((instruction) => {
  // move 1 from 1 to 2
  const move = Number(instruction.split(" from")[0].split("move ")[1]);
  const from = Number(instruction.split(" from ")[1].split(" to ")[0]);
  const to = Number(instruction.split(" from ")[1].split(" to ")[1]);
  return { move, from, to };
});

console.log(instructions);

// [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
// const stacks = [["N", "Z"], ["D", "C", "M"], ["P"]];

//             [J] [Z] [G]
//             [Z] [T] [S] [P] [R]
// [R]         [Q] [V] [B] [G] [J]
// [W] [W]     [N] [L] [V] [W] [C]
// [F] [Q]     [T] [G] [C] [T] [T] [W]
// [H] [D] [W] [W] [H] [T] [R] [M] [B]
// [T] [G] [T] [R] [B] [P] [B] [G] [G]
// [S] [S] [B] [D] [F] [L] [Z] [N] [L]
//  1   2   3   4   5   6   7   8   9
const stacks = [
  ["R", "W", "F", "H", "T", "S"],
  ["W", "Q", "D", "G", "S"],
  ["W", "T", "B"],
  ["J", "Z", "Q", "N", "T", "W", "R", "D"],
  ["Z", "T", "V", "L", "G", "H", "B", "F"],
  ["G", "S", "B", "V", "C", "T", "P", "L"],
  ["P", "G", "W", "T", "R", "B", "Z"],
  ["R", "J", "C", "T", "M", "G", "N"],
  ["W", "B", "G", "L"],
];

instructions.forEach((instruction) => {
  const moving = stacks[instruction.from - 1].splice(0, instruction.move);
  // Part 1
  //   moving.forEach((box) => stacks[instruction.to - 1].unshift(box));
  // Part 2
  moving.reverse().forEach((box) => stacks[instruction.to - 1].unshift(box));
});
console.log(stacks);

let word = "";
stacks.forEach((stack) => {
  word += stack[0];
});
console.log({ word });
