// https://adventofcode.com/2020/day/6
const fs = require("fs");
const data = fs.readFileSync("./advent-6.txt").toString("utf-8").split("\n\n");

// part 1 🌟
const uniqueGroupedData = data
  .map((group) => {
    return group
      .split("\n")
      .map((item) => item.split(""))
      .flat()
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
  })
  .flat();
console.log(uniqueGroupedData.length);

// part 2 🌟
const groupedData = data.map((group) => {
  return group.split("\n").map((item) => item.split(""));
});

let counter = 0;
groupedData.forEach((group) => {
  let questions = {};
  group.forEach((question) => {
    question.forEach((q) => {
      questions[q] = questions[q] ? questions[q] + 1 : 1;
    });
  });
  Object.keys(questions).forEach((q) => {
    if (questions[q] === group.length) {
      counter++;
    }
  });
});
console.log(counter);
