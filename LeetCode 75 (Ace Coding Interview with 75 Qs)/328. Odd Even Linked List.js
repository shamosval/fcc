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

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
//
// The first node is considered odd, and the second node is even, and so on.
//
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
//
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

var oddEvenList = function(head) {
    let odd = head;
    let even;
    let evenTail;
    if (!head) {
        return head;
    }
    if (head.next) {
        even = head.next;
        evenTail = head.next;
    } else {
        return head
    }




    let oddTail = head;


    let curr = evenTail.next;
    let isOdd = true;
    while (curr) {
        const nextNode = curr.next

        if (isOdd == true) {
            oddTail.next = curr;
            oddTail = curr;

            isOdd = false

        } else {
            evenTail.next = curr;
            evenTail = curr;

            isOdd = true
        }

        curr = nextNode

    }
    evenTail.next = null;
    oddTail.next = even


    return odd
};