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

    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }
    }

    getAtIndex(index){
        if(index < 0 || index >= this.length) return undefined;

        let [counter, current] = [0, this.head];

        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    setAtIndex(index, newValue){
        let found = this.getAtIndex(index);
        if(!found) return false;

        found.value = newValue;
        return true;
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
console.log(list);
console.log('GET AT INDEX 3');
console.log(list.getAtIndex(3));
console.log('GET AT INDEX -2');
console.log(list.getAtIndex(-2));
console.log('GET AT INDEX 6');
console.log(list.getAtIndex(6));
console.log('GET AT INDEX 0');
console.log(list.getAtIndex(0));
console.log('************************\n');
console.log(list);

console.log('\n************************');
console.log(list);
console.log('GET AT INDEX 0');
console.log(list.getAtIndex(0));
console.log('SET AT INDEX 0');
console.log(list.setAtIndex(0, 'siete'));
console.log('SET AT INDEX -3');
console.log(list.setAtIndex(-3, 'siete'));
console.log('SET AT INDEX 9');
console.log(list.setAtIndex(9, 'siete'));
console.log('************************\n');
console.log(list);