// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
//
// Example 1:
//
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const spiralOrder = (matrix) => {
  if(!matrix.length){return []};
  const size = matrix.length * matrix[0].length;
  const result = [];
  let currX = 0;
  let currY = 0;
  let addX = 1;
  let addY = 0;
  let dir = 'right';

  while(result.length < size){
    result.push(matrix[currY][currX]);
    matrix[currY][currX] = null;
    let nextY = currY + addY;
    let nextX = currX + addX;

    if(!(matrix[nextY] && (matrix[nextY][nextX] || matrix[nextY][nextX] === 0))){

      if(dir === 'right'){
        dir = 'down';
        addX = 0;
        addY = 1;
      }

      else if(dir === 'down'){
        dir = 'left';
        addX = -1;
        addY = 0;
      }

      else if(dir === 'left'){
        dir = 'up';
        addX = 0;
        addY = -1;
      }

      else if(dir === 'up'){
        dir = 'right';
        addX = 1;
        addY = 0;
      }
    }

    currX = currX + addX;
    currY = currY + addY;
  }

  return result;
}
