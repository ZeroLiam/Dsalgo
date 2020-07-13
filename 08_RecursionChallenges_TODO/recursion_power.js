//Write a function that accepts a base and an exponent. The function should return the power of the base to the exponent, just like Math.pow(). Only positive integers allowed.

//1. Take two params, base & exponent
//2. Return the power of the base to the exponent
//3. Only positive integers are permitted
//4. Make it recursive
//5. Make it O(n)
//6. Prepare for edge cases

function toThePower(base, exponent){
    //do something
    if(typeof base !== 'number' || typeof exponent !== 'number') return false;

    //Return 1 if the exponent is 1
    if(exponent === 0) return 1;

    //return the power of the base to the exponent
    return base * toThePower(base, exponent - 1);
}

console.log(toThePower(2,0));//1
console.log(toThePower(2,2));//4
console.log(toThePower(2,4));//16
console.log(toThePower(2,[]));//return false
console.log(toThePower(2,{}));//return false
console.log(toThePower(2,'ac'));//return false