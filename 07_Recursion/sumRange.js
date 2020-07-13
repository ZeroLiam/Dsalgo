//Make a recursive function that sums all the numbers from the number input until 1.
//1. The number has to be a positive integer
//2. The function should be recursive
//3. The function should be O(n)
//4. Look for edge cases

function sumRange(num){
    //Look for edge cases!
    if(typeof num !== 'number'){
        return '------------------------------------------------\nThis input was not a number. Try again.\n------------------------------------------------\n';
    }
    if(num < 1){
        return '------------------------------------------------\nThis input was not valid. Try again.\n------------------------------------------------\n';
    }

    //1. Make base case
    if(num === 1){
        return 1;
    }

    //2. Do your recursion and action
    return num + sumRange(num-1);
}

console.log(sumRange(-9));
console.log(sumRange(5));
console.log(sumRange(3));
console.log(sumRange(13));
console.log(sumRange(39));
console.log(sumRange(22));
console.log(sumRange(12));
console.log(sumRange(7));
console.log(sumRange(25));
console.log(sumRange(21));
console.log(sumRange(-8));
console.log(sumRange('lol'));
console.log(sumRange(''));
console.log(sumRange(0));
console.log(sumRange([]));
console.log(sumRange({}));