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
