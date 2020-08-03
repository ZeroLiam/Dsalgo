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

    reverse(){
        let current = this.head;
        //swap head with tail
        this.head = this.tail;
        this.tail = current;

        //keep track of the previous of current, and the next of current
        //to start, previous can be null and next can be undefined
        let next;
        let previous = null;

        //loop and update previous, current, and next
        for(let i = 0; i < this.length; i++){
            next = current.next;
            current.next = previous;
            //swap previous with current and current.next with next
            previous = current;
            current = next;
        }
        return this;
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

    insert(index, newValue){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(newValue);
        if(index === 0) return !!this.unshift(newValue);

        let node = new Node(newValue);
        let previous = this.getAtIndex(index - 1);
        node.next = this.getAtIndex(index);
        previous.next = node;
        this.length++;

        return true;
    }

    removeAt(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let previous = this.getAtIndex(index - 1);
        let found = previous.next;
        previous.next = found.next;
        this.length--;

        return found;
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
list.traverse();
console.log('REVERSING...');
list.reverse();
console.log('REVERSED!!');
list.traverse();
console.log('************************\n');