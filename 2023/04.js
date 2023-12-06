// https://adventofcode.com/2023/day/4
const fs = require("fs");
const data = fs.readFileSync("./04.txt").toString("utf-8").split("\n");
console.log(data);

let total = 0;

const winners = {};

data.forEach((card, index) => {
  const winner = card
    .split(" | ")[0]
    .split(": ")[1]
    .split(" ")
    .filter((value) => value !== "")
    .map((value) => Number(value));

  const mine = card
    .split(" | ")[1]
    .split(" ")
    .filter((value) => value !== "")
    .map((value) => Number(value));

  const matches = [];
  mine.forEach((value) => {
    if (winner.includes(value)) {
      matches.push(value);
      winners[index + 1] = winners[index + 1]
        ? [...winners[index + 1], value]
        : [value];
    }
  });

  if (matches.length > 0) {
    total += 2 ** (matches.length - 1);
  }
});
console.log({ winners, total });

const scratchedCards = {};
const initialCards = {};
data.forEach((card, index) => {
  initialCards[index + 1] = 1;
});

console.log({ scratchedCards, initialCards });

function scratch(unscratchedCards) {
  Object.keys(unscratchedCards).forEach((cardNumber) => {
    cardNumber = Number(cardNumber);

    console.log(cardNumber);

    if (unscratchedCards[cardNumber] > 0) {
      if (winners[cardNumber]) {
        winners[cardNumber].forEach((match, i) => {
          unscratchedCards[cardNumber + i + 1] =
            unscratchedCards[cardNumber + i + 1] + 1;
        });
      }

      unscratchedCards[cardNumber] = unscratchedCards[cardNumber] - 1;
      scratchedCards[cardNumber] = scratchedCards[cardNumber]
        ? scratchedCards[cardNumber] + 1
        : 1;

      scratch(unscratchedCards);
    }
  });
}

scratch(initialCards);

let count = 0;

Object.keys(scratchedCards).forEach((card) => {
  count += scratchedCards[card];
});

console.log({ scratchedCards, count });
// RangeError: Maximum call stack size exceeded
// whomp whomp timebox exceeded :(
