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
