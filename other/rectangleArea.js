// Find the total area covered by two rectilinear rectangles in a 2D plane.
//
// Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
//
// Rectangle Area
//
// Example:
//
// Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
// Output: 45
// Note:
//
// Assume that the total area is never beyond the maximum possible value of int.

const computeArea = (A, B, C, D, E, F, G, H) => {
  const areaA = areaOfRect(A, C, B, D);

  const areaB = areaOfRect(E, G, F, H);

  const overLapArea = areaOfRect(
    Math.max(A, E),
    Math.min(C, G),
    Math.max(B, F),
    Math.min(D, H)
  );

  return areaA + areaB - overLapArea;
};

const areaOfRect = (x1, x2, y1, y2) => {
  const height = y2 - y1;
  const width = x2 - x1;
  if (height > 0 && width > 0) {
    return height * width;
  }
  return 0;
}
