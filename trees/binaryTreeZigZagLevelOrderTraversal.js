// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

const zigzagLevelOrder = (root) => {
    if(root) {
      return helper([root], false)
    }
    return [];
};

const helper = (level, forward) => {
    if (level.length) {
        const levelValues = [];
        const nextLevel = [];

        level.forEach(node => {
            if (forward) {
                levelValues.push(node.val);
            } else {
                levelValues.unshift(node.val);
            }
            if (node.right) {
               nextLevel.push(node.right);
            }
            if (node.left) {
              nextLevel.push(node.left);
            }
        })

        return [levelValues].concat(helper(nextLevel, !forward));
    }

    return [];
}
