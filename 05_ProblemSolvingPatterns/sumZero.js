//Given a sorted array of integers, find if that array contains a pair of numbers that when sum together is equal to zero.
//1. Get an array, should be sorted
//2. the output should be the FIRST pair of numbers, if not found, then undefined is returned

function sumZero(arr){
    //do something
    //just the output to see it in console. nothing else.
    const seeOutput = (res) => {
        console.log('-------------------------------------------------------------');
        console.log('TESTING... ');
        console.log('-------------------------------------------------------------');
        console.log('arr: ', arr);
        console.log('does arr has a pair which sum together is zero? ', res);
        console.log('-------------------------------------------------------------');
        console.log('\n');
    }
    //1. Get a holder for the number in the left side, and another for the right side
    let left = 0;
    let right = arr.length - 1;

    //2. Sum left and right, if it's not zero then move along
    //2.1 If left < right, then continue looping. This is perfect for a while loop since we dont need to keep track of an index, just to loop until we find something
    while(left < right){
        let sum = arr[left] + arr[right];
        //2.2 If left + right > 0, then decrease right index
        if(sum > 0){
            right--;
        }else if(sum < 0){
            //2.3 If left + right < 0, then increase left index
            left++;
        }else{
            //2.4 If left + right = 0, then you found it! return the pair!
            seeOutput([arr[left], arr[right]]);
            return [arr[left], arr[right]];
        }
    }
    seeOutput(undefined);
    return;
}

sumZero([1,2,3]);//undefined
sumZero([-4,-3,-2,-1, 0, 1,2,3]);//-3, 3
sumZero([-1, 0, 1,2,3]);//-1, 1
sumZero([-5,-4,-3,-2,-1,0,1,2,7,8,9,]);//-2,2
sumZero([1,2,3]);//undefined