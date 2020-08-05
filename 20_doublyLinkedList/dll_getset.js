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

    getAtIndex(index){
        if(index < 0 || index >= this.length) return undefined;

        let middle = Math.floor(this.length/2);
        let iterator = index <= middle ? 0 : this.length - 1;
        let foundNode = index <= middle ? this.head : this.tail;
        if(index <= middle){
            //start at the beginning
            // console.log('start at the beginning');
            while(iterator !== index){
                foundNode = foundNode.next;
                iterator++;
            }
        }else{
            //start at the end
            // console.log('start at the end');
            while(iterator !== index){
                foundNode = foundNode.previous;
                iterator--;
            }
        }
        return foundNode;
    }

    setAtIndex(index, newValue){
        let foundNode = this.getAtIndex(index);
        if(foundNode !== undefined){
            foundNode.value = newValue;
            return true;
        }
        return false;
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

    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;

        return oldHead;
    }

    unshift(newValue){
        let node = new Node(newValue);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;

        return this;
    }
}


let list = new DoublyLinkedList();
list.push('uno');
list.push('dos');
list.push('tres');
list.push('cuatro');
list.push('cinco');
list.traverse();

console.log('\n************************');
console.log('GET AT INDEX 0');
console.log(list.getAtIndex(0));
console.log('SET AT INDEX 0');
console.log(list.setAtIndex(0, 'ZERO'));
console.log('GET AT INDEX 3');
console.log(list.getAtIndex(3));
console.log('SET AT INDEX 3');
console.log(list.setAtIndex(3, 'THREE'));
console.log('GET AT INDEX -2');
console.log(list.getAtIndex(-2));
console.log('SET AT INDEX -2');
console.log(list.setAtIndex(-2, 'MINUS TWO'));
console.log('GET AT INDEX 9');
console.log(list.getAtIndex(9));
console.log('SET AT INDEX 9');
console.log(list.setAtIndex(9, 'NINE'));
console.log('************************\n');
list.traverse();