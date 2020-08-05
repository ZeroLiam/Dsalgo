class Node{
    constructor(newValue){
        this.value = newValue;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    pop(){
        if(!this.first) return null;

        let current = this.first;

        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        
        return current.value;
    }

    push(newValue){
        let node = new Node(newValue);

        if(!this.first){
            this.first = node;
            this.last = node; 
        }else{
            let tempNode = this.first;
            this.first = node;
            this.first.next = tempNode;
        }
        return ++this.size;
    }
}

let stackList = new Stack();
stackList.push('uno');
stackList.push('dos');
stackList.push('tres');
stackList.push('cuatro');
stackList.push('cinco');

console.log('\n************************');
console.log('POPPED');
console.log(stackList.pop());
console.log('POPPED');
console.log(stackList.pop());
console.log('POPPED');
console.log(stackList.pop());
console.log('POPPED');
console.log(stackList.pop());
console.log('POPPED');
console.log(stackList.pop());
console.log('POPPED');
console.log(stackList.pop());
console.log('************************\n');
console.log(stackList); 

console.log('\n************************');
console.log('PUSHED');
console.log(stackList.push('seis'), stackList.first.value);
console.log('PUSHED');
console.log(stackList.push('siete'), stackList.first.value);
console.log('PUSHED');
console.log(stackList.push('ocho'), stackList.first.value);
console.log('PUSHED');
console.log(stackList.push('nueve'), stackList.first.value);
console.log('PUSHED');
console.log(stackList.push('diez'), stackList.first.value);
console.log('************************\n');
console.log(stackList);