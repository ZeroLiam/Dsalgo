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
    }catch(err){
        return false;
    }
    return false;
}

console.log(areThereDuplicates(1, 8, 2, 1, 2, 8));
console.log(areThereDuplicates(5,5,6,6,1,2,4,8));
console.log(areThereDuplicates(9,5,6,8,7,5,4,1,3));
console.log(areThereDuplicates(9,5,4,2,1,7));
console.log(areThereDuplicates(9,5,4,2,1,7,9,5,4,2,1,7));
console.log(areThereDuplicates(1,2,3,123));
console.log(areThereDuplicates());
console.log(areThereDuplicates([], []));
console.log(areThereDuplicates({}, {}));
console.log(areThereDuplicates(null, undefined));
console.log(areThereDuplicates(undefined, null));
console.log(areThereDuplicates(null, null));
console.log(areThereDuplicates(undefined, undefined));
console.log(areThereDuplicates('abc', 'cba'));
console.log(areThereDuplicates('a', 'a', 'b', 'b', 'c', 'd'));
console.log(areThereDuplicates('a', 'a', 'f', 'b', 'f', 'd'));
console.log(areThereDuplicates('a', 'e', 'b', 'b', 'd', 'd'));