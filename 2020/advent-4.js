// https://adventofcode.com/2020/day/4
const fs = require("fs");
const data = fs.readFileSync("./advent-4.txt").toString("utf-8").split("\n");

const requiredProperties = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"]; // 'cid' not required

// part 1 🌟
const arrayOfObjects = [];
let nastyCounter = 0;
data.forEach((line) => {
  if (line !== "") {
    const wtf = line.split(" ").map((kvPair) => kvPair.split(":"));
    // console.log(wtf);
    wtf.forEach((wtfLine, index) => {
      arrayOfObjects[nastyCounter] = {
        ...arrayOfObjects[nastyCounter],
        [wtfLine[0]]: wtfLine[1],
      };
    });
  } else {
    nastyCounter++;
  }
});

// console.log(arrayOfObjects);

let counter = 0;
arrayOfObjects.forEach((passport) => {
  let truthy = true;
  requiredProperties.forEach((property) => {
    if (!(property in passport)) {
      truthy = false;
    }
  });
  if (truthy) {
    counter++;
  }
});
console.log(counter);

// part 2 🌟
const validateHex = (hex) => {
  if (hex) {
    return /^#[0-9A-F]{6}$/i.test(hex);
  } else {
    return false;
  }
};
const validateHeight = (height) => {
  if (height && height.includes("cm")) {
    const parsedHeight = Number(height.split("cm")[0]);
    if (parsedHeight >= 150 && parsedHeight <= 193) {
      return true;
    } else {
      return false;
    }
  } else if (height && height.includes("in")) {
    const parsedHeight = Number(height.split("in")[0]);
    if (parsedHeight >= 59 && parsedHeight <= 76) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
const validatePassport = (passport) => {
  const byrValidation = passport?.byr >= 1920 && passport?.byr <= 2002;
  const iyrValidation = passport?.iyr >= 2010 && passport?.iyr <= 2020;
  const eyrValidation = passport?.eyr >= 2020 && passport?.eyr <= 2030;
  const hgtValidation = validateHeight(passport?.hgt);
  const hclValidation = validateHex(passport?.hcl);
  const eclValidation =
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(passport?.ecl) !==
    -1;
  const pidValidation = passport?.pid?.length === 9;
  if (
    byrValidation &&
    iyrValidation &&
    eyrValidation &&
    hgtValidation &&
    hclValidation &&
    eclValidation &&
    pidValidation
  ) {
    return true;
  }
};

let counter2 = 0;
arrayOfObjects.forEach((passport) => {
  if (validatePassport(passport)) {
    counter2++;
  }
});
console.log(counter2);
