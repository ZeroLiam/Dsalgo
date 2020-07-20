//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

//1. Numbers can be integers, positive or negative
//2. You should use recursion
//3. Solution has to be in O(n)
//5. Look for edge cases!
function productOfArray(arr){
    let result = 1;

    const helper = (list) => {
        if(list.length === 0) return;
        result *= list[0];
        helper(list.slice(1));
    };

    helper(arr);

    return result;
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60