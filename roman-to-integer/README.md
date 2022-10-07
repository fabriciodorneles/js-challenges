# Merge Two Sorted Lists - LeetCode
## Proposal
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []

```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]

```

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Solution 
```tsx
const mergeTwoLists = (list1, list2) => {
    let newList = new ListNode();
    let head = newList;
    
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            newList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else{
            newList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        
        newList = newList.next;
    }
    
    if(list1 !== null) {newList.next = list1};
    if(list2 !== null) {newList.next = list2};
    
    return head.next;

}
```

## Explanation
```tsx
//Create the list Node
let list = new ListNode();
//Stores list head
let head = list;
---------------
//iterate until some of the lists end
while (list1 !== null && list2 !== null)
(1,2,4)    (1,3,4)
 |          |  
//compare the two value and add small on newList
[,1,]
//pass to next only in the list of the added element
(1,2,4)    (1,3,4)
 |            |  
//compare again
[,1,1]
//go to next and repeat...
(1,2,4)    (1,3,4)
   |          |  

[,1,1,2]

(1,2,4)    (1,3,4)
     |        |  

[,1,1,2,3]

(1,2,4)    (1,3,4)
     |          |  

[,1,1,2,3,4]

(1,2,4)    (1,3,4)
     |             | null

-----------------
// add the remaing if some list is not at the end
// (at the end of iteration)
if (list1 !== null) list.next = list1;
[,1,1,2,3,4,4]

//return stored head but from 2nd element
//(because 1st is lost in the iteration)
return head.next;
[1,1,2,3,4,4]
```

## 🛠 Link
- [LeetCode exercise](https://leetcode.com/problems/merge-two-sorted-lists/)



