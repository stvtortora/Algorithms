# Given a binary tree, return the inorder traversal of its nodes' values.
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
# Output: [1,3,2]
# Follow up: Recursive solution is trivial, could you do it iteratively?

def inorder_traversal(root)
    return [] unless root
    visited = []
    stack = [root]

    until stack.empty?
      node = stack.last
      if node.left && !visited.include?(node.left)
          stack << node.left
      else
        visited << stack.pop
        stack << node.right if node.right
      end
    end

    visited.map(&:val)
end
