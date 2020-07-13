//Write a function that prints the factorial of the input number. Numbers can be ONLY positive integers.
//1. Get a number, multiply until the number comes down to 1
//2. The function should be recursive
//3. The function should be O(n)
//4. Look for edge cases

function factorial(num){
    //Edge cases
    if(typeof num !== 'number'){
        return `-------------------------------------------------------------------\nThis input (${num}) was not a number. Try again.\n-------------------------------------------------------------------\n`;
    }
    if(num < 0){
        return `-------------------------------------------------------------------\nThis input (${num}) was not a positive number. Try again.\n-------------------------------------------------------------------\n`;
    }
    //Base (end) case
    if(num === 1) return 1;

    //do action and put recursion here
    return num * factorial(num-1);
}

console.log(factorial(3));
console.log(factorial(10));
console.log(factorial(2));
console.log(factorial(-5));
console.log(factorial(12));
console.log(factorial(-3));
console.log(factorial(-12));
console.log(factorial(-2));
console.log(factorial('lol'));
console.log(factorial(''));
console.log(factorial({}));
console.log(factorial([]));
console.log(factorial(null));
console.log(factorial(undefined));