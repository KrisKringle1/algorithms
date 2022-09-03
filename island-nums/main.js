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

  const dfs = (i, j) => {
    debugger;
    if (grid[i + 1][j] && grid[i + 1][j] === "1") {
      grid[i + 1][j] = "0";
      dfs(i + 1, j);
    }

    if (grid[i - 1][j] && grid[i - 1][j] === "1") {
      grid[i - 1][j] = "0";
      dfs(i - 1, j);
    }

    if (grid[i][j + 1] && grid[i][j + 1] === "1") {
      grid[i][j + 1] = "0";
      dfs(i, j + 1);
    }

    return;
  };

  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];

      if (item === "1") {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
};
