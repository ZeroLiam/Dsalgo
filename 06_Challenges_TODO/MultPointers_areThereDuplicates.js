function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    //1. Edge cases: Args are empty
    if(args.length === 0) return false;

    try{
        //2. Sort the parameters
        args.sort((a,b) => typeof a === 'number' && typeof b === 'number' ? a-b : a.localeCompare(b));
        //3. Declare the min and max indeces
        let [minIndex, maxIndex] = [0, 1];
        while(maxIndex < args.length){
            if(args[minIndex] === args[maxIndex]){
                return true;
            }
            minIndex++;
            maxIndex++;
        }
    }catch(e){
        return false;
    }
    return false;
}

console.log(areThereDuplicates('a','b','c','a'));
console.log(areThereDuplicates(1, 2, 3, 3, 4, 4, 4, 5));
console.log(areThereDuplicates(1, 2, 3, 4, 5));
console.log(areThereDuplicates(0, 1, 2));
console.log(areThereDuplicates(2,2,2,1,1,1));
console.log(areThereDuplicates(4,4,4,3,3,2,1,2));
console.log(areThereDuplicates(0, 0, 0, 1, 1, 1));
console.log(areThereDuplicates(5, 4, 3, 2, 1));
console.log(areThereDuplicates(22, 222));
console.log(areThereDuplicates(65, 451, 6, 4));
console.log(areThereDuplicates());
console.log(areThereDuplicates([], {}));
console.log(areThereDuplicates(0, 0, 0, 1, 1, 1));
console.log(areThereDuplicates([], []));
console.log(areThereDuplicates(0, 0, 0, 1, 1, 1));
console.log(areThereDuplicates({}, {}));