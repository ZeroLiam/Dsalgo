/* that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(A){
    //Edge cases
    //if it's not a number, return false
    for(let value of A){
        if(typeof value !== 'number') return false;
        
        //2.1 if all the numbers are less than zero, return 1
        if(value <= 0) return 1;
    }

    A = A.sort((a, b) => a-b);
    
    //2.2 Make sure the number of entries is the same as the highest number, if not return false
    if(new Set(A).size !== A.length){
        for(let x = 0; x < A.length; x++){
            if(x > 0){
                if(A[x] - A[x - 1] === 2){
                    return A[x] - 1;
                }
            }
        }
    }else{
        return A.length + 1;
    }

    //1. sort the array; the last entry should be the highest number
    //2.2.1 if the number of entries is the same as the highest number:
    // (a) make sure each entry is unique
    // (b) check again that the number of entries is equal to the highest number
    //      IF NOT: then find the missing number
    //      IF IT IS: then the missing number is higher than the last entry
}

console.log('solution 1: ', solution([1, 3, 6, 4, 1, 2]));
console.log('solution 2: ', solution([1,4, 6, 4, 5, 2]));
console.log('solution 3: ', solution([1, 2, 3]));
console.log('solution 4: ', solution([-1, -3, 0]));