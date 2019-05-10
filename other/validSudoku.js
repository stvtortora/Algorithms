// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//
// A partially filled sudoku which is valid.
//
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//
// Example 1:
//
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:
//
// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:
//
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

var isValidSudoku = function(board) {
  const rows = {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}};
  const cols = {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}};
  const squares = {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}};

  for(let rowNum = 0; rowNum < board.length; rowNum++){
    let row = board[rowNum];

    for(let colNum = 0; colNum < row.length; colNum++){
      let num = row[colNum];
      if(num !== "."){
      let squareNum = determineSquareNum(rowNum, colNum);

      if(rows[rowNum][num] || cols[colNum][num] || squares[squareNum][num]){
        return false;
      }
      
      rows[rowNum][num] = true;
      cols[colNum][num] = true;
      squares[squareNum][num] = true;
      }
    }
  }
  return true;
};

const determineSquareNum = (rowNum, colNum) => {
    if(rowNum < 3){
      if(colNum < 3){return 0;}
      if(colNum < 6){return 1;}
      return 2;
    }

    if(rowNum < 6){
      if(colNum < 3){return 3;}
      if(colNum < 6){return 4;}
      return 5;
    }

    if(colNum < 3){return 6;}
    if(colNum < 6){return 7;}
    return 8;
}
