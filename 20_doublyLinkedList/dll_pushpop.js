// A node contains a value and a reference to the previous and next node
class Node {
    constructor(newValue) {
        this.value = newValue;
        this.next = null;
        this.previous = null;
    }
}

//This is the ACTUAL Doubly linked list class, that should have length, tail, head, and methods
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    getLength() {
        return this.length;
    }

    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(`previous: ${current.previous === null ? 'null' : current.previous.value.toUpperCase()}  current: ${current.value === null ? 'null' : current.value}  next: ${current.next === null ? 'null' : current.next.value}`);
            // console.log(current);
            current = current.next;
        }
    }

    push(newValue) {
        let node = new Node(newValue);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let currentTail = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = currentTail.previous;
            this.tail.next = null;
            currentTail.next = null;
            currentTail.previous = null;
        }
        this.length--;

        return currentTail;
    }
}


let list = new DoublyLinkedList();
list.push('uno');
list.push('dos');
list.push('tres');
list.push('cuatro');
list.push('cinco');


console.log('\n************************');
console.log('LIST PUSHED:');
console.log(`list length = ${list.getLength()}`);
console.log(`list tail =`, list.getTail());
console.log('************************\n');
list.traverse();

console.log('\n************************');
console.log('POPPED LAST ENTRY!!!');
console.log(list.pop());
console.log('************************\n');
list.traverse();