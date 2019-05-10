// Given the coordinates of four points in 2D space, return whether the four points could construct a square.
//
// The coordinate (x,y) of a point is represented by an integer array with two integers.
//
// Example:
//
// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: True
//
//
// Note:
//
// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.

var validSquare = function(p1, p2, p3, p4) {
  const centerX = (p1[0] + p2[0] + p3[0] + p4[0]) / 4;
  const centerY = (p1[1] + p2[1] + p3[1] + p4[1]) / 4;
  let maxX = p1[0];
  let minX = p1[0];
  let maxY = p1[1];
  let minY = p1[1];

  const distanceFromCenter = point => {
    const x = point[0];
    const y = point[1];

    if (x > maxX) {
      maxX = x;
    } else if (x < minX) {
      minX = x;
    }
    if (y > maxY) {
      maxY = y;
    } else if (y < minY) {
      minY = y
    }


    const xDistance = Math.abs(centerX - point[0]);
    const yDistance = Math.abs(centerY - point[1]);

    return xDistance + yDistance;
  }

  const d1 = distanceFromCenter(p1);
  const d2 = distanceFromCenter(p2);
  const d3 = distanceFromCenter(p3);
  const d4 = distanceFromCenter(p4);

  const xDim = maxX - minX;
  const yDim = maxY - minY;

  if(!xDim || !yDim > 0 || xDim !== yDim) {
    return false;
  }

  return d1 === d2 && d2 === d3 && d3 === d4;
};
