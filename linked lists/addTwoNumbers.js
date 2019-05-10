// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const addTwoNumbers = (l1, l2) => {
    return helper(l1, l2, 0);
};

const helper = (l1, l2, carry) => {
  if(!l1 && !l2 && !carry){
    return null;
  }

  let sum = 0;
  if(l1){
    sum += l1.val;
  }
  if(l2){
    sum+= l2.val;
  }
  sum += carry;


  let node = new ListNode(sum % 10);
  carry = sum < 10 ? 0 : 1;
  l1 = l1 ? l1.next : null;
  l2 = l2 ? l2.next : null;
  node.next = helper(l1, l2, carry);
  return node;
};
