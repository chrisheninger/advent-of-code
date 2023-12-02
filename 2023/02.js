// https://adventofcode.com/2023/day/2
const fs = require("fs");
const data = fs.readFileSync("./02.txt").toString("utf-8").split("\n");
console.log(data);

data.forEach((game) => {
  const gameNumber = game.split(": ")[0].split("Game ")[1];
  const contents = game.split(": ")[1];

  console.log(gameNumber, contents);
});
