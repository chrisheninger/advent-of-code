// https://adventofcode.com/2022/day/2
const fs = require("fs");
const data = fs.readFileSync("./advent-2.txt").toString("utf-8").split("\n");
console.log(data);

const score = {
  rock: 1,
  paper: 2,
  scissors: 3,
  win: 6,
  draw: 3,
  loss: 0,
};

// Part 1
// let total = 0;
// data.forEach((game) => {
//   const play = game.split(" ");
//   const opponent = play[0];
//   const me = play[1];

//   if (opponent === "A") {
//     if (me === "X") {
//       total += score.rock + score.draw;
//     } else if (me === "Y") {
//       total += score.paper + score.win;
//     } else if (me === "Z") {
//       total += score.scissors + score.loss;
//     }
//   } else if (opponent === "B") {
//     if (me === "X") {
//       total += score.rock + score.loss;
//     } else if (me === "Y") {
//       total += score.paper + score.draw;
//     } else if (me === "Z") {
//       total += score.scissors + score.win;
//     }
//   } else if (opponent === "C") {
//     if (me === "X") {
//       total += score.rock + score.win;
//     } else if (me === "Y") {
//       total += score.paper + score.loss;
//     } else if (me === "Z") {
//       total += score.scissors + score.draw;
//     }
//   }
// });
// console.log(total);

// Part 2
let total = 0;
data.forEach((game) => {
  const play = game.split(" ");
  const opponent = play[0];
  const me = play[1];
  console.log(opponent, me);

  if (opponent === "A") {
    if (me === "X") {
      total += score.scissors + score.loss;
    } else if (me === "Y") {
      total += score.rock + score.draw;
    } else if (me === "Z") {
      total += score.paper + score.win;
    }
  } else if (opponent === "B") {
    if (me === "X") {
      total += score.rock + score.loss;
    } else if (me === "Y") {
      total += score.paper + score.draw;
    } else if (me === "Z") {
      total += score.scissors + score.win;
    }
  } else if (opponent === "C") {
    if (me === "X") {
      total += score.paper + score.loss;
    } else if (me === "Y") {
      total += score.scissors + score.draw;
    } else if (me === "Z") {
      total += score.rock + score.win;
    }
  }
});
console.log(total);
