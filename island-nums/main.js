/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //let islandCount = 0
  //loop through each item in the grid
  //check if its a 1
  //if it is, islandCount++ begin DFS
  //DFS
  //check item above, below and to the right
  //if item is 1, and isnt undefined
  //continue dfs
  //if number is 0, return

  if (grid.length == 0 || grid === null) {
    return 0;
  }

  const dfs = (grid, i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j > grid[i].length ||
      grid[i][j] === 0
    ) {
      return 0;
    }

    grid[i][j] = "0";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
    return 1;
  };

  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];

      if (item === "1") {
        islandCount += dfs(grid, i, j);
      }
    }
  }

  return islandCount;
};
