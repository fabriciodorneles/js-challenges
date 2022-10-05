# Isomorphic Strings - LeetCode
## Proposal
Given two strings `s` and `t`, return `true` *if* `s` *is a **subsequence** of* `t`*, or* `false` *otherwise*.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**

```
Input: s = "abc", t = "ahbgdc"
Output: true

```

**Example 2:**

```
Input: s = "axc", t = "ahbgdc"
Output: false

```

**Constraints:**

- `0 <= s.length <= 100`
- `0 <= t.length <= 104`
- `s` and `t` consist only of lowercase English letters.

**Follow up:**

Suppose there are lots of incoming

```
s
```

, say

```
s1, s2, ..., sk
```

where

```
k >= 109
```

, and you want to check one by one to see if

```
t
```

has its subsequence. In this scenario, how would you change your code?

## Solution
```js
var isSubsequence = function(s, t) {
    let lastIndex = -1;

    for(let i=0; i < s.length; i++) {        
        lastIndex = t.indexOf(s[i], lastIndex + 1);        
        if(lastIndex === -1) { return false }
    }
    
    return true;
};
```

## Explanation  
```js
                              0 ->
                              |
abc                          ahbgdc
|                            |
                              OK - 0

                                1 ->
                                |
abc                          a hbgdc
  |                              |
                                OK - 2

                                  3 ->
                                  |
abc                          a hb gdc
  |                                 |
                                    OK - 5

TRUE
```  

iterating trough the chars of the first string, try to find 'indexOf' of the current char in the second array

if don't find return false    
    
if find, go to the next iteration and try to find 'indexOf' FROM the last finded index.

```js
t.indexOf(char, lastIndex + 1)
```

If don't return false during all the iteration you can return true.

## 🛠 Link
- [LeetCode exercise](https://leetcode.com/problems/is-subsequence/)



