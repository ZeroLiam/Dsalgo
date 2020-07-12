//Count how many values are unique in an array
//1. Array must be sorted
//2. Array can have negative and positive integers
//3. The solution should be O(n)

function countUniqValues(arr){
    //do something
    //just for the output
    const seeOutput = (res) => {
        console.log('-------------------------------------------------------------');
        console.log('TESTING... ');
        console.log('-------------------------------------------------------------');
        console.log('arr: ', arr);
        console.log('how many unique values does this array have? ', res);
        console.log('-------------------------------------------------------------');
        console.log('\n');
    }

    //Edge case, if we don't get an array
    if(!Array.isArray(arr) || arr.length === 0){
        return 0;
    }

     //1. Get a holder for the index in the left side, and another for the index right next to it
     let left = 0;
     let right = left + 1;

     //2. Make a loop: while right <= arr length, keep looping
     while(right <= arr.length){
         //2.1. Compare left and right: if arr[left] === arr[right], leave left in that index and increase right. This doesn't need an if statement, since we won't change anything if they're equal

         //2.2 If arr[left] < arr[right], increase the left index, then copy the value of arr[right] on the new arr[left]. Keep looping.
        if(arr[left] < arr[right]){
            left++;
            arr[left] = arr[right];
        }
        //Always increase right so we can keep looping, the 2.1 point can be executed, and obviously, we will have a way to increase right and get eventually a short circuit for our while loop
        right++;
     }

    //return total uniq values you've found in the array
    //that would be the value of the left variable + 1 (it's the index + 1, since it's start on zero)
    seeOutput(left+1);
    return left+1;
}

//situations
countUniqValues([1,1,1,1,1,2]);
countUniqValues([1,2,3]);
countUniqValues([-4, -3, -2, -2, -1, 0, 1, 2]);
countUniqValues([-4, -3, -3, -3, -1, 0, 1, 2]);
countUniqValues([-4, -1, 0, 1, 1]);
countUniqValues([0,1,22,33,44]);
countUniqValues([0,1,2,3,4,4,4,5,5,6,6]);