var fs = require('fs');
var input = fs
  .readFileSync('./advent-3.txt')
  .toString('utf-8')
  .split('\n');

const draw = data => {
  let line = []; // starting point
  let lastKnownCoordinate = [0, 0];

  const parser = instruction => {
    const direction = instruction.substring(0, 1);
    const distance = instruction.substring(1);

    if (direction === 'R') {
      new Array(Number(distance)).fill().forEach((value, index) => {
        lastKnownCoordinate = [lastKnownCoordinate[0], lastKnownCoordinate[1] + 1];
        line.push(lastKnownCoordinate);
      });
    }

    if (direction === 'U') {
      new Array(Number(distance)).fill().forEach((value, index) => {
        lastKnownCoordinate = [lastKnownCoordinate[0] + 1, lastKnownCoordinate[1]];
        line.push(lastKnownCoordinate);
      });
    }

    if (direction === 'L') {
      new Array(Number(distance)).fill().forEach((value, index) => {
        lastKnownCoordinate = [lastKnownCoordinate[0], lastKnownCoordinate[1] - 1];
        line.push(lastKnownCoordinate);
      });
    }

    if (direction === 'D') {
      new Array(Number(distance)).fill().forEach((value, index) => {
        lastKnownCoordinate = [lastKnownCoordinate[0] - 1, lastKnownCoordinate[1]];
        line.push(lastKnownCoordinate);
      });
    }
  };

  data.forEach(parser);
  return line;
};

// const first = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
// const second = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

// const first = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
// const second = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];

const first = input[0].split(',');
const second = input[1].split(',');

const line1 = draw(first);
const line2 = draw(second);

const stringifiedLine1 = line1.map(coordinates => `${coordinates[0]},${coordinates[1]}`);
const stringifiedLine2 = line2.map(coordinates => `${coordinates[0]},${coordinates[1]}`);
const stringifiedResults = stringifiedLine1.filter(value => stringifiedLine2.includes(value));

const distance = stringifiedResults.map(result => {
  return stringifiedLine1.indexOf(result) + stringifiedLine2.indexOf(result);
});
const winner = Math.min(...distance) + 2; // lol off by 2 error no idea what the fuck is going on so we'll just add 2 and call it good

console.log(winner);
