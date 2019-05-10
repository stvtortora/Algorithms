# Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
#
# Note: A leaf is a node with no children.
#
# Example:
#
# Given the below binary tree and sum = 22,
#
#       5
#      / \
#     4   8
#    /   / \
#   11  13  4
#  /  \      \
# 7    2      1
# return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

def has_path_sum(root, sum)
  if root
    sum -= root.val

    if !root.left && !root.right
      return sum == 0

    else
      left = has_path_sum(root.left, sum)
      right = has_path_sum(root.right, sum)
      return left || right
    end
   end

   return false
end
