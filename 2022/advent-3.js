// https://adventofcode.com/2022/day/3
const fs = require("fs");
const data = fs.readFileSync("./advent-3.txt").toString("utf-8").split("\n");
console.log(data);

function characterToValue(string) {
  if (string === string.toUpperCase()) {
    return string.charCodeAt(0) - 38;
  } else {
    return string.charCodeAt(0) - 96;
  }
}
// console.log('a', characterToValue('a'));
// console.log('z', characterToValue('z'));
// console.log('A', characterToValue('A'));
// console.log('Z', characterToValue('Z'));

// PART 1

// const bucket = [];
// data.forEach((item) => {
//   const one = item.substring(0, item.length / 2);
//   const two = item.substring(item.length / 2, item.length);
//   const shared = [];

//   one.split("").forEach((character) => {
//     if (two.includes(character) && !shared.includes(character)) {
//       shared.push(character);
//         bucket.push(character);
//     }
//   });

//   console.log(one, two, shared);
// });

// let total = 0;
// bucket.forEach(item => {
//     total += characterToValue(item);
// })

// console.log(total);

// PART 2
const groupedData = [];
data.forEach((item, index) => {
  const subindex = Math.floor(index / 3);
  if (!groupedData[subindex]) {
    groupedData[subindex] = [item];
  } else {
    groupedData[subindex].push(item);
  }
});

console.log(groupedData);

const bucket = [];
groupedData.forEach((group) => {
  const one = group[0];
  const two = group[1];
  const three = group[2];

  const shared = [];
  one.split("").forEach((character) => {
    if (two.includes(character) && !shared.includes(character)) {
      shared.push(character);
    }
  });

  shared.forEach((character) => {
    if (three.includes(character)) {
      bucket.push(character);
    }
  });
});

let total = 0;
bucket.forEach((item) => {
  total += characterToValue(item);
});

console.log(total);
