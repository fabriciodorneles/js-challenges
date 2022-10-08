# Longest Palindrome - LeetCode
## Proposal
Given a string `s` which consists of lowercase or uppercase letters, return *the length of the **longest palindrome*** that can be built with those letters.

Letters are **case sensitive**, for example, `"Aa"` is not considered a palindrome here.

**Example 1:**

```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

```

**Example 2:**

```
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

```

**Constraints:**

- `1 <= s.length <= 2000`
- `s` consists of lowercase **and/or** uppercase English letters only.

## Solution
```js
var longestPalindrome = function(s) {
    let objCharQuant = {};
    for(let i=0; i < s.length; i++) {
        if (Object.keys(objCharQuant).includes(s[i])){
            objCharQuant[s[i]] = objCharQuant[s[i]] + 1
        } else {
            objCharQuant[s[i]] = 1;                
        }        
    }   
    
    let palindromeSize = 0;
    let individualAdded = false;
    Object.keys(objCharQuant).map(key => {
        palindromeSize = palindromeSize + (Math.floor(objCharQuant[key]/2)*2);
        if(!individualAdded && (objCharQuant[key] === 1 || objCharQuant[key] % 2 !== 0)) {
            palindromeSize++;
            individualAdded = true;
        }        
    })
       
    return palindromeSize;
};
```

## Explanation  
```js
var longestPalindrome = function(s) {
		//create object to store char ocurrences
    let objCharQuant = {};
		//iterate trough string
    for(let i=0; i < s.length; i++) {
				// iterate trough the key of the object
				// if some key already exists add to value
        if (Object.keys(objCharQuant).includes(s[i])){
            objCharQuant[s[i]] = objCharQuant[s[i]] + 1
        } else {
						// if not exists
						// create new key with current char and add one
            objCharQuant[s[i]] = 1;                
        }        
    }   
    // after object with char quantities is completed
		// let's count
    let palindromeSize = 0;
    let individualAdded = false;
    Object.keys(objCharQuant).map(key => {
				// add to palindromeSize the 
				// floor of the object divided by two and multpliplied by 2
				// (to eliminate the even part of the number)
				// example, if quant is 3 -> Math.floor(3/2) = 1 -> 1 * 2 = 2
        palindromeSize = palindromeSize + (Math.floor(objCharQuant[key]/2)*2);
				// here is for number at half of the palindrome if it exists (aaddXddaa)
				// this need to be added only one time if you have some alone char 
				// in the string OR some even char quantity (imagine this string 'ccc')				
        if(!individualAdded && (objCharQuant[key] === 1 || objCharQuant[key] % 2 !== 0)) {
            palindromeSize++;
            individualAdded = true;
        }        
    })
    //returns size
    return palindromeSize;
};
```  

## 🛠 Link
- [LeetCode exercise](https://leetcode.com/problems/longest-palindrome/)



