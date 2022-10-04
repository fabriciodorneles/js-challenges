# Isomorphic Strings - LeetCode
## Proposal
Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

```
Input: s = "egg", t = "add"
Output: true

```

**Example 2:**

```
Input: s = "foo", t = "bar"
Output: false

```

**Example 3:**

```
Input: s = "paper", t = "title"
Output: true

```

**Constraints:**

- `1 <= s.length <= 5 * 104`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.

## Solution
```js
const isIsomorphic = (s, t) => {  
     const arr1 = {};
     const arr2 = {};
     
     for(let i=0; i<s.length; i++){      
        if(arr1[s[i]] !== arr2[t[i]]) return false;         
        arr1[s[i]] = i;
        arr2[t[i]] = i;
     }  
    
     return true;    
};
```

## Explanation
1. Create, for each String, an object that will store the string chars as keys and the last index assigned to them. Mas this you create some king of pair association between the two chars.
2. For with the arrays length size
    1. compare the index of two chars of the iteration
        1. if both are undefined it's because it's  a new pair, then pass
        2. if both have equal value it's because the pair have happen before, then pass
        3. if both have different values (maybe one undefined and the other with value), it's because it's not isomorphic, brokes the rule, can break all the execution and return false
    2. if the execution is not stopped, assign the actual index to the respective keys in both arrays.
    3. Go fo next iteration
3. If you end the 'for' without breakin you can return TRUE.

```tsx
egg           add                { e:0 }      { a:0 }
|             |
undef         undef

egg           add                { e:0,g:1 }  { a:0,d:1 }
 |             |
 undef         undef

egg           add                { e:0,g:2 }  { a:0,d:2 }
  |             |
  1             1

TRUE
---------------------------------------------------------------
foo           bar                { f:0 }      { b:0 }
|             |
undef         undef

foo           bar                { f:0,o:1 }  { b:0,a:1 }
 |             |
 undef         undef

foo           bar                 FALSE
  |             |
  1   <- X ->   undef
```

- In this case, the 'for' approach is better than an declarative 'map' or 'forEach'(unless I use the 'index' in this iterations, but is a line more in the code) because we have an iteration for compare based on the POSITION of two arrays.

- Used the power of 'object[key]' assigning
- Used 'return' inside the for Scope(finalizes outer scope function execution)

## 🛠 Link
- [LeetCode exercise](https://leetcode.com/problems/isomorphic-strings/)



