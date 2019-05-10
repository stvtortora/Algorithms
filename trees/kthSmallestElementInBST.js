// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
//
// Example 1:
//
// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:
//
// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

const kthSmallest = (root, k) => {
    if (root === null) { return null }
    let lastTraversed = null;
    let count = 0;
    let stack = [];
    let node = root;

    while (count < k) {
      if (node) {
        stack.push(node);
        node = node.left;
      }
      else {
        lastTraversed = stack.pop();
        count++;
        node = lastTraversed.right;
      }
    }

    return lastTraversed.val;
};
