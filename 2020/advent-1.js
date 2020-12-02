// https://adventofcode.com/2020/day/1
const fs = require("fs");
const data = fs.readFileSync("./advent-1.txt").toString("utf-8").split("\n");
const dataAsNumbers = data.map((expense) => Number(expense));

// part 1 🌟
const dumbSum2020 = (one, two) => {
  if (one + two === 2020) {
    return true;
  } else {
    return false;
  }
};
dataAsNumbers.forEach((expense1) => {
  dataAsNumbers.forEach((expense2) => {
    if (dumbSum2020(expense1, expense2)) {
      console.log("lol", expense1, expense2);
      console.log(expense1 * expense2);
    }
  });
});

// part 2 🌟
const dumberSum2020 = (one, two, three) => {
  if (one + two + three === 2020) {
    return true;
  } else {
    return false;
  }
};
dataAsNumbers.forEach((expense1) => {
  dataAsNumbers.forEach((expense2) => {
    dataAsNumbers.forEach((expense3) => {
      if (dumberSum2020(expense1, expense2, expense3)) {
        console.log("lmao", expense1, expense2, expense3);
        console.log(expense1 * expense2 * expense3);
      }
    });
  });
});
