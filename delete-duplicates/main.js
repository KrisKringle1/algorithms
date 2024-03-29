/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //loop through head

  //if firstIndex is not the last index of
  //or if number is in seen object
  //splice out number
  //continue looping

  const seen = {};

  for (let i = 0; i < head.length; i++) {
    const curr = head[i];
    if (seen[curr]) {
      head.splice(i, 1);
      i--;
    }

    if (head.indexOf(curr) !== head.lastIndexOf(curr)) {
      seen[curr];
      head.splice(i, 1);
      i--;
    }

    seen[curr] = curr;
  }
  return head;
};
