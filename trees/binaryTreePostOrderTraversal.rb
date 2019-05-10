# Given a binary tree, return the postorder traversal of its nodes' values.
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
# Output: [3,2,1]

def postorder_traversal(root)
    return [] unless root
    node = root
    stack = []
    visited = []

    while !stack.empty? || node
        if node
            stack << node
            visited << node.val
            node = node.right
        else
          node = stack.pop.left
        end
    end
    visited.reverse
end
