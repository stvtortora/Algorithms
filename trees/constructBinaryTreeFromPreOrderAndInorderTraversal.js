// Given preorder and inorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7

const buildTree = (preorder, inorder) => {
  if(preorder.length) {
    const root = new TreeNode(preorder[0]);

    let leftInorder = inorder.slice(0, inorder.indexOf(preorder[0]));
    let leftPreorder = [];

    preorder.forEach(el => {
      if(leftInorder.includes(el)){
        leftPreorder.push(el)
      }
    })

    root.left = buildTree(leftPreorder, leftInorder);

    let rightInorder = inorder.slice(inorder.indexOf(preorder[0]) + 1);
    let rightPreorder = [];

    preorder.forEach(el => {
      if(rightInorder.includes(el)){
        rightPreorder.push(el)
      }
    })

    root.right = buildTree(rightPreorder, rightInorder);
    return root;
  }

  return null;
};
