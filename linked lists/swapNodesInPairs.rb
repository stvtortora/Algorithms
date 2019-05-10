#  Given a linked list, swap every two adjacent nodes and return its head.
#
#  You may not modify the values in the list's nodes, only nodes itself may be changed.
#
# Example:
#
# Given 1->2->3->4, you should return the list as 2->1->4->3.

def swap_pairs(head)
  last = nil
  node = head
  while node
    next_node = node.next

    if next_node
      next_next = next_node.next
      next_node.next = node
      node.next = next_next
      
      if last
        last.next = next_node
      else
         head = next_node
      end

      last = node
    end

    node = node.next
  end
  head
end
