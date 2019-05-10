// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false in JavaScript/Python and -1 in C++/C#/Java.
//
// Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.

const pathFinder = (maze) => {
  maze = maze.replace(/\n/g, "")

  const onPath = pos => {
    const stringPos = mazeDim * pos[0] + pos[1];
    return maze[stringPos] === '.';
  }

  const inBounds = pos => {
    const _inBounds = i => {
      return i >= 0 && i < mazeDim;
    }

    return _inBounds(pos[0]) && _inBounds(pos[1]);
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  const mazeDim = Math.sqrt(Math.floor(maze.length));

  const minDistance = {
    '0,0': 0
  };

  const queue = [[0, 0]];

  while (queue.length) {
    const currentPos = queue.shift();

    dirs.forEach(dir => {
      const nextPos = [currentPos[0] + dir[0], currentPos[1] + dir[1]];
      const nextDistance = minDistance[currentPos] + 1;

      if (
      onPath(nextPos) &&
      inBounds(nextPos) &&
      (!minDistance[nextPos] || minDistance[nextPos] > nextDistance)
      ) {
        queue.push(nextPos);
        minDistance[nextPos] = nextDistance;
      }
    })
  }

  return typeof minDistance[[mazeDim - 1, mazeDim - 1]] !== 'undefined' ?
  minDistance[[mazeDim - 1, mazeDim - 1]] : false;
}
