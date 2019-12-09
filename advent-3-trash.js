var fs = require('fs');
var input = fs
  .readFileSync('./advent-3.txt')
  .toString('utf-8')
  .split('\n');

// Create one dimensional array
let grid = new Array(12000);
// Loop to create 2D array using 1D array
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(12000).fill(' ');
}
grid[6000][6000] = 'X';

const draw = data => {
  let lastKnownPosition = [6000, 6000]; // starting point

  const parser = instruction => {
    const direction = instruction.substring(0, 1);
    const distance = instruction.substring(1);

    if (direction === 'R') {
      for (let d = 0; d < distance; d++) {
        lastKnownPosition = [lastKnownPosition[0], lastKnownPosition[1] + 1];
        grid[lastKnownPosition[0]][lastKnownPosition[1]] =
          grid[lastKnownPosition[0]][lastKnownPosition[1]] === ' ' ? (d === distance - 1 ? '+' : '-') : 'X';
      }
    }

    if (direction === 'U') {
      for (let d = 0; d < distance; d++) {
        lastKnownPosition = [lastKnownPosition[0] - 1, lastKnownPosition[1]];
        grid[lastKnownPosition[0]][lastKnownPosition[1]] =
          grid[lastKnownPosition[0]][lastKnownPosition[1]] === ' ' ? (d === distance - 1 ? '+' : '|') : 'X';
      }
    }

    if (direction === 'L') {
      for (let d = 0; d < distance; d++) {
        lastKnownPosition = [lastKnownPosition[0], lastKnownPosition[1] - 1];
        grid[lastKnownPosition[0]][lastKnownPosition[1]] =
          grid[lastKnownPosition[0]][lastKnownPosition[1]] === ' ' ? (d === distance - 1 ? '+' : '-') : 'X';
      }
    }

    if (direction === 'D') {
      for (let d = 0; d < distance; d++) {
        lastKnownPosition = [lastKnownPosition[0] + 1, lastKnownPosition[1]];
        grid[lastKnownPosition[0]][lastKnownPosition[1]] =
          grid[lastKnownPosition[0]][lastKnownPosition[1]] === ' ' ? (d === distance - 1 ? '+' : '|') : 'X';
      }
    }

    return lastKnownPosition;
  };

  data.forEach(parser);
};

// const first = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
// const second = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

// const first = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
// const second = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];

const first = input[0].split(',');
const second = input[1].split(',');

console.log(first, second);
draw(first);
draw(second);

// // console.table(grid);

const crossovers = [];
for (let k = 0; k < grid.length; k++) {
  for (let l = 0; l < grid[k].length; l++) {
    if (grid[k][l] === 'X') {
      //   console.log(k, l);
      const distance = Math.abs(k - 6000) + Math.abs(l - 6000);
      if (distance !== 0) {
        crossovers.push(distance);
      }
    }
  }
}

const min = Math.min(...crossovers);

console.log(min);
