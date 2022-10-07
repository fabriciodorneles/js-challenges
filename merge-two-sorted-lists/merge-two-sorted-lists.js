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
