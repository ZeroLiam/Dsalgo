class MinBinaryHeap{
    constructor(){
        this.values = [];
    }

    _bubbleUp(){
        let index = this.values.length - 1;

        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.values[index] >= this.values[parentIndex]) break;
            
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
            index = parentIndex;
        }
    }

    _sinkDown(){
        let parentIndex = 0;
        
        while(parentIndex < this.values.length){
            let parent = this.values[parentIndex];
            let [leftIndex, rightIndex] = [(2 * parentIndex) + 1, (2 * parentIndex) + 2];
            if(!this.values[leftIndex] || !this.values[rightIndex]) break;
            let lowestChild;
            
            if(parent > this.values[leftIndex] && parent > this.values[rightIndex]){
                lowestChild = Math.min(this.values[leftIndex], this.values[rightIndex]);
            }else{
                lowestChild = parent > this.values[leftIndex] ? this.values[leftIndex] : this.values[rightIndex];
            }

            let lowestChildIndex = lowestChild === this.values[leftIndex] ? leftIndex : rightIndex;
            [this.values[lowestChildIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[lowestChildIndex]];
            
            parentIndex = lowestChildIndex;
        }
    }
    
    insert(newValue){
        this.values.push(newValue);
        //NOTE! Heaps _CAN_ have duplicates!
        this._bubbleUp();
    }

    extractMin(){
        //swap the last value with the first value (root), then pop the new last value (old root)
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        let min = this.values.pop();
        this._sinkDown();
        return min;
    }
}

let minHeap = new MinBinaryHeap();
minHeap.insert(90);
minHeap.insert(36);
minHeap.insert(26);
minHeap.insert(25);
minHeap.insert(19);
minHeap.insert(17);
minHeap.insert(1);
minHeap.insert(7);
minHeap.insert(3);
minHeap.insert(2);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMin()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
/*console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);
console.log(`extractMax: ${minHeap.extractMax()} list length: ${minHeap.values.length}`);
console.log('\nHeap:');
console.log(minHeap.values);*/