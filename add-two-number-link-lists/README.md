# Add Two Number (Inverted Linked Lists)
## Proposal
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

```

**Example 2:**

```
Input: l1 = [0], l2 = [0]
Output: [0]

```

**Example 3:**

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Solution
```js
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
var addTwoNumbers = function(l1, l2) {
    const d = new ListNode();
    let curr = d;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum >= 10 ? Math.floor(sum/10) : 0;
        curr.next = new ListNode(sum % 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        curr = curr.next;
    }
    return d.next;
};
```

## Explanation
```tsx
var addTwoNumbers = function(l1, l2) {
		//create a node and store the head
    const d = new ListNode();
    let curr = d;
		
    let carry = 0;
    while (l1 || l2 || carry) {
				//sums each digit (plus the carry)
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        //calculates the carry (if the value of the sum
				// is more than 10, stores the first digit to sum in 
				// the next digits sum
				carry = sum >= 10 ? Math.floor(sum/10) : 0;
        // takes always only the right digit (12 => 2, 7 => 7)
				curr.next = new ListNode(sum % 10);
				//advances if item is valid
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
				//advances result list
        curr = curr.next;
    }
		//return the store head from second node
    return d.next;
};
```

## 🛠 Link
- [LeetCode exercise](https://leetcode.com/problems/add-two-numbers/)



