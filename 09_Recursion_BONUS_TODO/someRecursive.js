// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
    // add whatever parameters you deem necessary - good luck!
    //Edge cases
    //1. If arr is not an array, return false
    if(!Array.isArray(arr) || arr.length === 0) return false;

    //base case: if the last one in the stack is true, then return true
    if(cb(arr[0])) return true;

    //do the recursion here
    return someRecursive(arr.slice(1), cb);
}

function isOdd(num){
    return num % 2 !== 0;
}

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));