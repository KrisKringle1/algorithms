/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //loop through each row / colum and check and make sure there is no duplicates of numbers in row or column
  //create logic for the 3x3 box that loops through the first 3 indexes and chunks forward then downwards

  //rows and columns
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const column1 = board[0][i];
    const column2 = board[1][i];
    const column3 = board[2][i];
    const column4 = board[3][i];
    const column5 = board[4][i];
    const column6 = board[5][i];
    const column7 = board[6][i];
    const column8 = board[7][i];
    const column9 = board[8][i];

    const columns = [
      column1,
      column2,
      column3,
      column4,
      column5,
      column6,
      column7,
      column8,
      column9,
    ];

    for (let j = 0; j < row.length; j++) {
      const currRow = row[j];
      const currCol = columns[j];
      if (parseInt(currRow)) {
        if (row.indexOf(currRow) !== row.lastIndexOf(currRow)) {
          return false;
        }
      }

      if (parseInt(currCol)) {
        if (columns.indexOf(currCol) !== columns.lastIndexOf(currCol)) {
          return false;
        }
      }
    }
  }
  console.log("still running ");
  //grid search
  for (i = 0; i < board.length; i += 3) {
    const row1 = board[i];
    const row2 = board[i + 1];
    const row3 = board[i + 2];

    const grid1Col1 = row1[0];
    const grid1Col2 = row1[1];
    const grid1Col3 = row1[2];
    const grid1Col4 = row2[0];
    const grid1Col5 = row2[1];
    const grid1Col6 = row2[2];
    const grid1Col7 = row3[0];
    const grid1Col8 = row3[1];
    const grid1Col9 = row3[2];

    const grid1 = [
      grid1Col1,
      grid1Col2,
      grid1Col3,
      grid1Col4,
      grid1Col5,
      grid1Col6,
      grid1Col7,
      grid1Col8,
      grid1Col9,
    ];

    const grid2Col1 = row1[3];
    const grid2Col2 = row1[4];
    const grid2Col3 = row1[5];
    const grid2Col4 = row2[3];
    const grid2Col5 = row2[4];
    const grid2Col6 = row2[5];
    const grid2Col7 = row3[3];
    const grid2Col8 = row3[4];
    const grid2Col9 = row3[5];

    const grid2 = [
      grid2Col1,
      grid2Col2,
      grid2Col3,
      grid2Col4,
      grid2Col5,
      grid2Col6,
      grid2Col7,
      grid2Col8,
      grid2Col9,
    ];

    const grid3Col1 = row1[6];
    const grid3Col2 = row1[7];
    const grid3Col3 = row1[8];
    const grid3Col4 = row2[6];
    const grid3Col5 = row2[7];
    const grid3Col6 = row2[8];
    const grid3Col7 = row3[6];
    const grid3Col8 = row3[7];
    const grid3Col9 = row3[8];
    const grid3 = [
      grid3Col1,
      grid3Col2,
      grid3Col3,
      grid3Col4,
      grid3Col5,
      grid3Col6,
      grid3Col7,
      grid3Col8,
      grid3Col9,
    ];

    for (let i = 0; i < grid1.length; i++) {
      const grid1Curr = grid1[i];
      const grid2Curr = grid2[i];
      const grid3Curr = grid3[i];

      if (parseInt(grid1Curr)) {
        if (grid1.indexOf(grid1Curr) !== grid1.lastIndexOf(grid1Curr)) {
          return false;
        }
      }

      if (parseInt(grid2Curr)) {
        if (grid2.indexOf(grid2Curr) !== grid2.lastIndexOf(grid2Curr)) {
          console.log(grid2);
          console.log(grid2Curr);
          return false;
        }
      }

      if (parseInt(grid3Curr)) {
        if (grid3.indexOf(grid3Curr) !== grid3.lastIndexOf(grid3Curr)) {
          return false;
        }
      }
    }
  }

  return true;
};
