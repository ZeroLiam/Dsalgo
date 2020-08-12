class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    _bubbleUp(){
        let index = this.values.length - 1;

        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.values[index] <= this.values[parentIndex]) break;
            
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
            index = parentIndex;
        }
    }

    _sinkDown(){
        let parentIndex = 0;
        
        while(parentIndex < this.values.length){
            let parent = this.values[parentIndex];
            let [leftIndex, rightIndex] = [(2 * parentIndex) + 1, (2 * parentIndex) + 2];
            if(this.values[leftIndex] === undefined || this.values[rightIndex] === undefined) break;
            let largestChildIndex = this.values.indexOf(Math.max(this.values[leftIndex], this.values[rightIndex], parent));
            [this.values[largestChildIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[largestChildIndex]];
            
            parentIndex = largestChildIndex;
        }
    }
    
    insert(newValue){
        this.values.push(newValue);
        //NOTE! Heaps _CAN_ have duplicates!
        this._bubbleUp();
    }

    extractMax(){
        //swap the last value with the first value (root), then pop the new last value (old root)
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        const max = this.values.pop();
        if(this.values.length > 0){
            // this.values[0] = end;
            this._sinkDown();
        }
        return max;
    }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
maxHeap.insert(18);
maxHeap.insert(48);
maxHeap.insert(94);
maxHeap.insert(3);
maxHeap.insert(78);
maxHeap.insert(62);
maxHeap.insert(80);
maxHeap.insert(22);
maxHeap.insert(34);
maxHeap.insert(1);
console.log('\nHeap:');
console.log(maxHeap.values);
console.log(`extractMax: ${maxHeap.extractMax()} list length: ${maxHeap.values.length}`);
console.log('\nHeap:');
console.log(maxHeap.values);
console.log(`extractMax: ${maxHeap.extractMax()} list length: ${maxHeap.values.length}`);
console.log('\nHeap:');
console.log(maxHeap.values);
console.log(`extractMax: ${maxHeap.extractMax()} list length: ${maxHeap.values.length}`);
console.log('\nHeap:');
console.log(maxHeap.values);