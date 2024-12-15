/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        fast = fast?.next?.next ?? null;
        slow = slow?.next ?? null;
        if (fast === slow) {
            return true;
        }
    }

    return false;
}