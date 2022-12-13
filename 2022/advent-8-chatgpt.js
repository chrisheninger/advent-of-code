function countVisibleTrees(grid) {
  let count = 0;
  const counted = Array(grid.length)
    .fill(false)
    .map(() => Array(grid[0].length).fill(false));

  // Count the trees on the edges of the grid
  for (let i = 0; i < grid.length; i++) {
    if (grid[0][i] > 0 && !counted[0][i]) {
      count++;
      counted[0][i] = true;
    }
    if (grid[grid.length - 1][i] > 0 && !counted[grid.length - 1][i]) {
      count++;
      counted[grid.length - 1][i] = true;
    }
    if (grid[i][0] > 0 && !counted[i][0]) {
      count++;
      counted[i][0] = true;
    }
    if (grid[i][grid[0].length - 1] > 0 && !counted[i][grid[0].length - 1]) {
      count++;
      counted[i][grid[0].length - 1] = true;
    }
  }

  // Check for visible trees in the interior of the grid
  const rowMax = Array(grid.length).fill(0);
  const colMax = Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0 || counted[i][j]) continue;

      if (
        grid[i][j] === rowMax[i] ||
        grid[i][j] === colMax[j] ||
        grid[i][j] === rowMax[j] ||
        grid[i][j] === colMax[i]
      ) {
        count++;
        counted[i][j] = true;
      }
    }
  }

  return count;
}

const grid = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

console.log(countVisibleTrees(grid)); // should output 21
