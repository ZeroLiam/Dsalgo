class Node{
    constructor(newValue){
        this.value = newValue;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(newValue){
        let node = new Node(newValue);

        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        let current = this.first;

        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return current.value;
    }
}

let qList = new Queue();

console.log('\n************************');
console.log('ENQUEUED');
console.log(qList.enqueue('uno'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('dos'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('tres'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('cuatro'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('cinco'), qList.last.value);
console.log('************************\n');
console.log(qList);

console.log('\n************************');
console.log('DEQUEUED');
console.log(qList.dequeue());
console.log('DEQUEUED');
console.log(qList.dequeue());
console.log('DEQUEUED');
console.log(qList.dequeue());
console.log('DEQUEUED');
console.log(qList.dequeue());
console.log('DEQUEUED');
console.log(qList.dequeue());
console.log('DEQUEUED');
console.log(qList.dequeue());
console.log('************************\n');
console.log(qList); 

console.log('\n************************');
console.log('ENQUEUED');
console.log(qList.enqueue('seis'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('siete'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('ocho'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('nueve'), qList.last.value);
console.log('ENQUEUED');
console.log(qList.enqueue('diez'), qList.last.value);
console.log('************************\n');
console.log(qList);