//Get an unordered array and an amount of entries. The amount of entries will determine how many consecutive entries should be summed together. The goal is to determine which consecutive entries summed together have the highest sum in the array. 
//For example, on array [1,2,2,3,4,1], if we want to find the highest sum of 2 consecutive entries, the result should be 7 which comes from [3,4].

//1. The array doesn't have to be ordered
//2. If the array is empty, return null
//3. Try to get a O(n) solution
//4. Return the highest sum

function maxSubarraySum(arr, numEntries){
    //do something
    //just for the output
    const seeOutput = (res) => {
        console.log('-------------------------------------------------------------');
        console.log('TESTING... ');
        console.log('-------------------------------------------------------------');
        console.log('arr: ', arr);
        console.log('highest sum is ', res);
        console.log('-------------------------------------------------------------');
        console.log('\n');
    }

    //Edge case: if array is empty don't bother
    if(!Array.isArray(arr) || arr.length === 0){
        seeOutput('nothing because your array is invalid');
        return null;
    }

    let maxSum = 0;
    let temp = 0;
    //1. Make a sum with the first number of desired entries
    for(let i = 0; i < numEntries; i++){
        maxSum += arr[i];
    }

    //2. Hold that sum in a temp variable, that will be updated on a loop to check the consecutive sum of the next set of entries
    temp = maxSum;

    //3. Loop in the array: start the counter at the total number of entries
    for(let j = numEntries; j < arr.length; j++){
        //3.1 Update the temp variable with itself, minus the 1st value on the set of consecutive entries, plus the following value on the set of consecutive entries
        temp = temp - arr[j - numEntries] + arr[j];
        //3.2 If the temp variable is higher than the max sum, update max sum. Keep looping
        maxSum = temp > maxSum ? temp : maxSum;
    }
    //return the maxsum
    seeOutput(maxSum);
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);
maxSubarraySum([1,2,2,3,4,1],2);
maxSubarraySum([1,2,2,3,4,3],4);
maxSubarraySum([],4);
maxSubarraySum([1,1,2,3,44,5,6,7],2);