// https://adventofcode.com/2022/day/6
const fs = require("fs");
const data = fs.readFileSync("./advent-6.txt").toString("utf-8").split("\n");
console.log(data);

let done = false;
data.forEach((signal) => {
  let last4 = [];
  [...signal].forEach((character, index) => {
    if (done) {
      return;
    }
    // Part 1
    // if (last4.length === 14) {
    // Part 2
    if (last4.length === 14) {
      console.log("done", index, last4);
      done = true;
    }
    if (last4.indexOf(character) !== -1) {
      last4.splice(0, last4.indexOf(character) + 1);
      last4.push(character);
    } else {
      last4.push(character);
    }
  });
});
