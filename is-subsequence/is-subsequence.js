var isSubsequence = function(s, t) {
    let lastIndex = -1;

    for(let i=0; i < s.length; i++) {        
        lastIndex = t.indexOf(s[i], lastIndex + 1);        
        if(lastIndex === -1) { return false }
    }
    
    return true;
};
