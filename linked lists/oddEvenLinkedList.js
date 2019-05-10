// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
//
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
//
// Example 1:
//
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:
//
// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:
//
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

const oddEvenList = (head) => {
    if (!head) { return [] }
    let count = 2;
    let node = head.next;
    let lastOdd = head;
    let firstEven = null;
    let prev = null;

    while(node) {
      let nextNode = node.next;
      if (count % 2 !== 0) {
        lastOdd.next = node;
        node.next = firstEven;
        prev.next = nextNode;
        lastOdd = node;
      }
      if (count === 2) {
        firstEven = node;
      }
      prev = node;
      node = nextNode;

      count++;
    }

    return head;
};
