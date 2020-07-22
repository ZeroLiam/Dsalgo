function fib(num, id){
    //Edge cases
    if(typeof num !== 'number'){
        return false;
    }
    
    console.log(`${id} num ${num}`)
    if (num <= 2) return 1;
    return fib(num-1, 'a') + fib(num-2, 'b');
}

console.log(fib(4, 'ext'));