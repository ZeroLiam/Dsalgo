function binarySearch(arr, value){
    //Edge cases:
    //1. Make sure we have parameters!
    if(!arr || !value || !Array.isArray(arr) || arr.length === 0) return -1; 
    //2. Only accept an array of integers! the value should be also an integer!
    if(!arr.every(val => typeof val === 'number') && typeof value !== 'number') return -1;

    arr = arr.sort((a,b) => a - b);

    //have a left index, a middle index, and a right index
    let [left, middle, right] = [0, Math.round(arr.length/2), arr.length - 1];

    if(arr[left] === value) return left;//if you find it in the first position, hooray!
    if(arr[right] === value) return right;//if you find it in the last position, hooray!
    if(arr[middle] === value) return middle;//if you find it in the middle position, hooray!

    //if neither of those positions contains or value:
    //while the left is less than the right, split it in the middle until you find it
    while(left <= right){
        if(value > arr[middle]) left = middle + 1;
        else right = middle - 1;
        middle = left + Math.round((right - left) / 2);
    }
    //if you never find it return -1
    return value === arr[middle] ? middle : -1;
}

console.log(binarySearch([1,2,14,3,4,12,5,9,7,10,8,22,11,16,13,19,15,18,6,20,17,21], 15));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 15));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 5));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 175));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 13));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 21));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 1));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 22));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], 8));
console.log(binarySearch());
console.log(binarySearch([],{}));
console.log(binarySearch({},{}));
console.log(binarySearch(null, undefined));