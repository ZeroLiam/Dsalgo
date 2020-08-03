// A node contains a value and a reference to the next node
class Node {
    constructor(newValue) {
        this.value = newValue;
        this.next = null;
    }
}

//This is the ACTUAL singly linked list class, that should have length, tail, head, and methods
class SinglyLinkedList {
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

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(newValue) {
        let node = new Node(newValue);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.head === null) return undefined;
        let current = this.head;
        let tempTail = current.next;

        while (current.next) {
            tempTail = current;
            current = current.next;
        }

        this.tail = tempTail;
        if (this.length > 1) this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

let list = new SinglyLinkedList();
list.push('uno');
list.push('dos');
list.push('tres');
list.push('cuatro');
list.push('cinco');

console.log('\n************************');
console.log('SHIFTED');
console.log(list.shift());
console.log('************************\n');
console.log(list); 

console.log('\n************************');
console.log('UNSHIFTED');
console.log(list.unshift('seis'));
console.log('************************\n');
console.log(list);