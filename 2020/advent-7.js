// https://adventofcode.com/2020/day/7
const fs = require("fs");
const data = fs.readFileSync("./advent-7.txt").toString("utf-8").split("\n");

// console.log(data);

// part 1 🌟
const colors = [];
const colorsWithCounts = {};
data.forEach((rule) => {
  const parsedRule = rule.split(" bags contain ");
  const color = parsedRule[0];
  const containsBags = parsedRule[1].split(", ");
  const getColorAndCount = (bag) => {
    const chopped = bag.split(" bag")[0];
    const count = parseInt(chopped.split(" ")[0]);
    const color = chopped.split(" ")[1] + " " + chopped.split(" ")[2];
    return {
      color,
      count,
    };
  };
  containsBags.forEach((bag) => {
    if (bag !== "no other bags.") {
      const answer = getColorAndCount(bag);

      colorsWithCounts[color] = {
        ...colorsWithCounts[color],
        [answer.color]: answer.count,
      };
    }
  });
  colors.push(color);
});

console.log(colorsWithCounts);

const colorSearch = (searchPhrase) => {
  const containsSearchPhrase = [];
  colors.forEach((color) => {
    if (colorsWithCounts[color]) {
      Object.keys(colorsWithCounts[color]).forEach((child) => {
        if (child === searchPhrase) {
          containsSearchPhrase.push(color);
        }
      });
    }
  });
  return containsSearchPhrase;
};

// holy fuck what is recursion send help
const allTheColors = {};
colorSearch("shiny gold").forEach((color) => {
  allTheColors[color] = "nice";
  colorSearch(color).forEach((color) => {
    allTheColors[color] = "cool";
    colorSearch(color).forEach((color) => {
      allTheColors[color] = "cool";
      colorSearch(color).forEach((color) => {
        allTheColors[color] = "cool";
        colorSearch(color).forEach((color) => {
          allTheColors[color] = "cool";
          colorSearch(color).forEach((color) => {
            allTheColors[color] = "cool";
            colorSearch(color).forEach((color) => {
              allTheColors[color] = "cool";
              colorSearch(color).forEach((color) => {
                allTheColors[color] = "cool";
                colorSearch(color).forEach((color) => {
                  allTheColors[color] = "cool";
                  colorSearch(color).forEach((color) => {
                    allTheColors[color] = "cool";
                    colorSearch(color).forEach((color) => {
                      allTheColors[color] = "cool";
                      colorSearch(color).forEach((color) => {
                        allTheColors[color] = "cool";
                        colorSearch(color).forEach((color) => {
                          allTheColors[color] = "cool";
                          colorSearch(color).forEach((color) => {
                            allTheColors[color] = "cool";
                            colorSearch(color).forEach((color) => {
                              allTheColors[color] = "cool";
                              colorSearch(color).forEach((color) => {
                                allTheColors[color] = "cool";
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
// got my star through bruteforce recursion lmao 🌟
console.log(Object.keys(allTheColors).length);

// part 2 🌟
let totalCounter = 0;
const countDown = (searchPhrase, multiplier) => {
  if (colorsWithCounts[searchPhrase]) {
    Object.keys(colorsWithCounts[searchPhrase]).forEach((color) => {
      const count = colorsWithCounts[searchPhrase][color];
      console.log(color, count, multiplier);
      totalCounter += count * multiplier;
      countDown(color, count * multiplier);
    });
  }
};

// much much much better
countDown("shiny gold", 1);
console.log(totalCounter);
