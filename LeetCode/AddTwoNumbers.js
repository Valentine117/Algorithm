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
function ListNodeToArray(listNode) {
  const arr = [];
  while(listNode !== null) {
    arr.push(listNode.val);
    listNode = listNode.next;
  }
  return arr;
}
var addTwoNumbers = function(l1, l2) {
  const {l1Arr, l2Arr} = {l1Arr: ListNodeToArray(l1), l2Arr: ListNodeToArray(l2)};
  const answerArr = ((Number(l1Arr.join()) + Number(l2Arr.join())) + "").split().reverse();
  for(let i = 0; i< answerArr.length; i++) {

  }
  return answerArr;
};