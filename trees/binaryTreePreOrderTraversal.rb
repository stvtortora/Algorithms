# Given a binary tree, return the preorder traversal of its nodes' values.
#
# Example:
#
# Input: [1,null,2,3]
#    1
#     \
#      2
#     /
#    3
#
# Output: [1,2,3]

def preorder_traversal(root)
  stack = [root]
  visited = []

  until stack.empty?
    node = stack.pop
    if node
      stack << node.right
      stack << node.left
      visited << node.val
    end
  end

  visited
end
