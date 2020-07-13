//Write a function that prints the factorial of the input number. Numbers can be ONLY positive integers.
//1. Get a number, multiply until the number comes down to 1
//2. The function should be recursive
//3. The function should be O(n)
//4. Look for edge cases

function factorial(num){
    //Edge cases
    if(typeof num !== 'number'){
        return false;
    }
    if(num < 0){
        return false;
    }
    //Base (end) case
    if(num === 1 || num === 0) return 1;

    //do action and put recursion here
    return num * factorial(num-1);
}