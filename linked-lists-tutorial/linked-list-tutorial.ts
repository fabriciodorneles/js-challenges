class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null ) {
        this.val = (val === undefined? 0 : val);
        this.next = (next === undefined? null : next);
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    insertAtBegining(val: number) {
        const newNode = new ListNode(val, this.head)
        this.head = newNode;
    }

    insertAtEnd(val: number) {
        let travelNode = this.head;
        if(!travelNode){
            this.head = new ListNode(val);
            return
        } 
        while(travelNode && (travelNode.next !== null)){
            travelNode = travelNode.next;
        }

        travelNode.next= new ListNode(val)
    }

    remove(val: number){
        if(this.head === null) return
        if(this.head.val === val) {
            this.head = this.head.next
            return
        }
        
        if(!this.head.next) return
        
        if(this.head.next.val === val) {
            this.head.next = this.head.next.next
        }
        let travelNode = this.head;
        while(travelNode.next !== null){
            if(travelNode.next.val === val){
                travelNode.next = travelNode.next.next
                return
            }
            travelNode = travelNode.next
        }

    }

    logLinkedList(){
        let travelNode = this.head;
        if(!travelNode){            
            return
        } 
        console.log('-> List Log <-')
        console.log("->", travelNode.val)
        while(travelNode && (travelNode.next !== null)){
            travelNode = travelNode.next;
            console.log("->", travelNode.val)
        }
    }
}

const myList = new LinkedList();

myList.insertAtBegining(10)
myList.insertAtBegining(9)
myList.insertAtBegining(8)
myList.insertAtBegining(7)
myList.insertAtBegining(6)
myList.insertAtBegining(5)

myList.logLinkedList();

myList.insertAtBegining(4)
console.log('4 inserted at the begining')
myList.logLinkedList()

myList.insertAtEnd(11)
console.log('11 inserted at the end')
myList.logLinkedList()

myList.remove(7)
console.log('remove 7')
myList.logLinkedList()
myList.remove(8)
console.log('remove 8')
myList.logLinkedList()
myList.remove(4)
console.log('remove 4')
myList.logLinkedList()
myList.remove(11)
console.log('remove 11')
myList.logLinkedList()