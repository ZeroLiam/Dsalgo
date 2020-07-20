//Write a function called recursiveRange which takes in an array of numbers and returns the sum of them all, starting at zero.

//1. Numbers can be integers, positive or negative
//2. You should use recursion
//3. Solution has to be in O(n)
//5. Look for edge cases!

function recursiveRange(num){
    //Edge cases
    if(isNaN(num)) return `${num} is not a number.\n\n`;

   if(num <= 0) return num;

   let result = 0;
   result += num;

   return result + recursiveRange(num - 1);

}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55