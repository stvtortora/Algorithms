// We are given a binary tree (with root node root), a target node, and an integer value K.
//
// Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.
//
//
//
// Example 1:
//
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
//
// Output: [7,4,1]
//
// Explanation:
// The nodes that are a distance 2 from the target node (with value 5)
// have values 7, 4, and 1.
//
//
//
// Note that the inputs "root" and "target" are actually TreeNodes.
// The descriptions of the inputs above are just serializations of these objects.
//
//
// Note:
//
// The given tree is non-empty.
// Each node in the tree has unique values 0 <= node.val <= 500.
// The target node is a node in the tree.
// 0 <= K <= 1000.

const distanceK = (root, target, K) => {
    const result = [];

    const helper = (node, target, K) => {
        if(node){
            if(node === target){
                if(K === 0){
                    result.push(node.val);
                    return null;
                } else {
                findAncestors(node.left, 1, K);
                findAncestors(node.right, 1, K);
                return 1;
                }
            }

            let leftDistance = helper(node.left, target, K);
            let rightDistance = helper(node.right, target, K);
            if(leftDistance || rightDistance){
                let distance = leftDistance ? leftDistance : rightDistance;
                let nextNode = leftDistance ? node.right : node.left;
                if(distance === K){
                    result.push(node.val);
                }else{
                    findAncestors(nextNode, distance + 1, K);
                    return distance + 1;
                }
            }
        }
      return null;
    }

    const findAncestors = (node, distance, K) => {
        if(node){
            if(distance === K){
                result.push(node.val);
            }else{
            findAncestors(node.left, distance + 1, K);
            findAncestors(node.right, distance + 1, K);
            }
        }
        return;
    }

    helper(root, target, K);
    return result;
};
