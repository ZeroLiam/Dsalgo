class Node{
    constructor(...args){
        this.value = args[0];
        this.priority = args[1];
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    _bubbleUp(){
        let index = this.values.length - 1;

        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.values[index].priority >= this.values[parentIndex].priority) break;
            
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
            index = parentIndex;
        }
    }

    _sinkDown(){
        let parentIndex = 0;
        
        while(parentIndex < this.values.length){
            let parent = this.values[parentIndex].priority;
            let [leftIndex, rightIndex] = [(2 * parentIndex) + 1, (2 * parentIndex) + 2];
            if(!this.values[leftIndex] || !this.values[rightIndex]) break;
            let lowestChild;
            
            if(parent > this.values[leftIndex].priority && parent > this.values[rightIndex].priority){
                lowestChild = Math.min(this.values[leftIndex].priority, this.values[rightIndex].priority);
            }else{
                lowestChild = parent > this.values[leftIndex].priority ? this.values[leftIndex] : this.values[rightIndex];
            }

            let lowestChildIndex = lowestChild === this.values[leftIndex].priority ? leftIndex : rightIndex;
            [this.values[lowestChildIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[lowestChildIndex]];
            
            parentIndex = lowestChildIndex;
        }
    }
    
    enqueue(node){
        this.values.push(node);
        //NOTE! Heaps _CAN_ have duplicates!
        this._bubbleUp();
    }

    dequeue(){
        //swap the last value with the first value (root), then pop the new last value (old root)
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        let min = this.values.pop();
        this._sinkDown();
        return min;
    }

    getQueueValues(){
        let list = [];
        
        for(let val in this.values) list.push(val.priority);

        return list;
    }
}

let priorityQ = new PriorityQueue();
priorityQ.enqueue(new Node('I should go grocery shopping', 90));
priorityQ.enqueue(new Node('what do I have in the fridge?', 36));
priorityQ.enqueue(new Node('I should eat healthy', 26));
priorityQ.enqueue(new Node('but I want a tasty lunch', 25));
priorityQ.enqueue(new Node('meat it is...', 19));
priorityQ.enqueue(new Node('should I fry bacon?', 17));
priorityQ.enqueue(new Node('FIREEEEE!!!', 1));
priorityQ.enqueue(new Node('I think that flame is ok', 7));
priorityQ.enqueue(new Node('this heat aint good', 3));
priorityQ.enqueue(new Node('is that smoke?!', 2));
console.log('\nHeap:');
console.log(priorityQ.values);
console.log(`extractMax: ${priorityQ.dequeue()} list length: ${priorityQ.values.length}`);
console.log('\nHeap:');
console.log(priorityQ.values);