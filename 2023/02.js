// https://adventofcode.com/2023/day/2
const fs = require("fs");
const data = fs.readFileSync("./02.txt").toString("utf-8").split("\n");
console.log(data);

// Part 1
// const validBags = [];
// data.forEach((game) => {
//   const gameNumber = game.split(": ")[0].split("Game ")[1];
//   const contents = game.split(": ")[1].split("; ");

//   let validSet = true;

//   contents.forEach((set) => {
//     const bag = {
//       red: 0,
//       green: 0,
//       blue: 0,
//     };
//     console.log({ set });
//     set.split(", ").forEach((cube) => {
//       console.log({ cube });
//       if (cube.includes("red")) {
//         bag.red += Number(cube.split(" red")[0]);
//       }
//       if (cube.includes("green")) {
//         bag.green += Number(cube.split(" green")[0]);
//       }
//       if (cube.includes("blue")) {
//         bag.blue += Number(cube.split(" blue")[0]);
//       }
//     });
//     console.log({ gameNumber, bag });

//     if (bag.red <= 12 && bag.green <= 13 && bag.blue <= 14) {
//       // noop
//     } else {
//       validSet = false;
//     }
//   });

//   if (validSet) {
//     validBags.push(gameNumber);
//   }
// });

// let sum = 0;
// validBags.forEach((number) => {
//   sum += Number(number);
// });

// console.log({ validBags, sum });

// Part 2
const powerCubes = [];
data.forEach((game) => {
  const gameNumber = game.split(": ")[0].split("Game ")[1];
  const contents = game.split(": ")[1].split("; ");

  const bag = {
    red: 0,
    green: 0,
    blue: 0,
  };
  contents.forEach((set, index) => {
    set.split(", ").forEach((cube) => {
      if (cube.includes("red")) {
        const value = Number(cube.split(" red")[0]);
        if (bag.red < value) {
          bag.red = value;
        }
      }
      if (cube.includes("green")) {
        const value = Number(cube.split(" green")[0]);
        if (bag.green < value) {
          bag.green = value;
        }
      }
      if (cube.includes("blue")) {
        const value = Number(cube.split(" blue")[0]);
        if (bag.blue < value) {
          bag.blue = value;
        }
      }
    });
    // last set in a game, push the bag
    if (index + 1 === contents.length) {
      powerCubes.push(bag);
    }
  });
});

let sum = 0;
powerCubes.forEach((bag) => {
  sum += bag.red * bag.green * bag.blue;
});

console.log({ sum });
