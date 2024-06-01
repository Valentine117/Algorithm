/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNodeToString(listNode) {
  const arr = [];
  while (listNode !== null) {
    arr.unshift(listNode.val);
    listNode = listNode.next;
  }
  return arr.join();
}
var addTwoNumbers = function (l1, l2) {
  const answerArr = (
    Number(ListNodeToString(l1)) +
    Number(ListNodeToString(l2)) +
    ''
  )
    .split('')
    .reverse()
    .map((i) => Number(i));
  const answerListNode = new ListNode();
  let index = 0;
  while (index < answerArr.length) {
    answerListNode(answerArr[index], answerArr[++index]);
  }
  return answerListNode;
};
