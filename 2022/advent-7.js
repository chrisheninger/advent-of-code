// https://adventofcode.com/2022/day/7
const fs = require("fs");
const data = fs.readFileSync("./advent-7.txt").toString("utf-8").split("\n");
console.log(data);

const filesystem = {};
let pwd = [];
let ls = false;
data.forEach((item) => {
  if (item.includes("$ cd")) {
    const directoryName = item.split("$ cd ")[1];
    if (directoryName !== "..") {
      pwd.push(directoryName);
    } else {
      pwd.pop();
    }
    ls = false;
    return;
  }
  if (item.includes("$ ls")) {
    ls = true;
    return;
  }

  // listing
  if (item.includes("dir")) {
    const directoryName = item.split("dir ")[1];
  } else {
    // console.log(pwd, item);
    [fileSize, fileName] = item.split(" ");
    // console.log({ fileSize, fileName });

    pwd.forEach((directory) => {
      if (filesystem[directory]) {
        filesystem[directory].push({ fileSize, fileName });
      } else {
        filesystem[directory] = [{ fileSize, fileName }];
      }
    });
  }
});

console.log(filesystem);

const directoriesWithSizes = {};
Object.keys(filesystem).forEach((key) => {
  let count = 0;
  filesystem[key].forEach((file) => {
    count += Number(file.fileSize);
  });
  directoriesWithSizes[key] = count;
});

console.log(directoriesWithSizes);

let answer = 0;
Object.keys(directoriesWithSizes).forEach((directory) => {
  if (directoriesWithSizes[directory] <= 100_000) {
    console.log("hmmm", directory, directoriesWithSizes[directory]);
    answer += directoriesWithSizes[directory];
  }
});
console.log({ answer });

// example works but the real puzzle input doesn't work, idk
