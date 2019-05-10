// Given a binary tree, return all root-to-leaf paths.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Input:
//
//    1
//  /   \
// 2     3
//  \
//   5
//
// Output: ["1->2->5", "1->3"]
//
// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

const binaryTreePaths = (root) => {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val.toString()];
  }


  const childPaths = binaryTreePaths(root.left).concat(binaryTreePaths(root.right));
  const newPaths = childPaths.map(path => {
    return root.val.toString() + '->' + path;
  })
  
  return newPaths;
};
