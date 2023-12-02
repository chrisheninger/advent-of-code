// https://adventofcode.com/2023/day/1
const fs = require("fs");
const data = fs.readFileSync("./01.txt").toString("utf-8").split("\n");
console.log(data);

// Part ONE
// let total = 0;
// data.forEach((string) => {
//   const digits = string.match(/\d+/g).join("").split("");
//   console.log(digits);

//   const firstDigit = digits[0];
//   const lastDigit = digits[digits.length - 1];

//   total += Number(`${firstDigit}${lastDigit}`);
// });

// console.log(total);

// Part TWO
const numberWords = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const regex = new RegExp(`\\d+|${Object.keys(numberWords).join("|")}`, "gi");

let total = 0;
data.forEach((string) => {
  const digits = string.match(regex);
  console.log(digits);

  const allDigits = digits
    .map((match) => {
      return isNaN(match) ? numberWords[match.toLowerCase()] : match;
    })
    .join("");
  console.log(allDigits);

  const firstDigit = allDigits[0];
  const lastDigit = allDigits[allDigits.length - 1];
  console.log(`${firstDigit}${lastDigit}`);

  total += Number(`${firstDigit}${lastDigit}`);
});

console.log(total);
