// https://adventofcode.com/2022/day/4
const fs = require("fs");
const data = fs.readFileSync("./advent-4.txt").toString("utf-8").split("\n");
console.log(data);

// PART 1
// let fullyOverlapped = 0;
// data.forEach((item) => {
//   const pair = item.split(",");
//   const [oneLower, oneUpper] = pair[0].split("-");
//   const [twoLower, twoUpper] = pair[1].split("-");

//   console.log({
//     oneLower,
//     oneUpper,
//     twoLower,
//     twoUpper,
//   });
//   if (
//     (Number(oneLower) <= Number(twoLower) &&
//       Number(oneUpper) >= Number(twoUpper)) ||
//     (Number(twoLower) <= Number(oneLower) &&
//       Number(twoUpper) >= Number(oneUpper))
//   ) {
//     fullyOverlapped++;
//   }
// });

// console.log(fullyOverlapped);

// PART 2
let partiallyOverlapped = 0;
data.forEach((item) => {
  const pair = item.split(",");
  const [oneLower, oneUpper] = pair[0].split("-");
  const [twoLower, twoUpper] = pair[1].split("-");

  console.log({
    oneLower,
    oneUpper,
    twoLower,
    twoUpper,
  });
  if (
    (Number(oneLower) >= Number(twoLower) &&
      Number(oneLower <= Number(twoUpper))) ||
    (Number(oneUpper) >= Number(twoLower) &&
      Number(oneUpper) <= Number(twoUpper)) ||
    (Number(twoLower) >= Number(oneLower) &&
      Number(twoLower <= Number(oneUpper))) ||
    (Number(twoUpper) >= Number(oneLower) &&
      Number(twoUpper) <= Number(oneUpper))
  ) {
    console.log(pair);
    partiallyOverlapped++;
  }
});

console.log(partiallyOverlapped);
