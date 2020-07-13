//MARTIN AND THE DRAGON!
//Make a function that collects the odd values in an array. Create a helper function that can be called within the function without messing up the outer function.

//1. Create a function called collectOddValues that takes an array of positive integers
//2. Write a helper function to collect ONLY the odd numbers
//3. The function should be recursive
//4. The function should be O(n)
//5. Look for edge cases


function collectOddValues(arr){
    //Look for edge cases
    if(!Array.isArray(arr)){
        console.log('----------------------------------------------------------');
        console.log(`Your input (${arr}) was not an array. Bye!`);
        console.log('----------------------------------------------------------\n');
        return;
    }
    if(arr.length < 1){
        console.log('----------------------------------------------------------');
        console.log(`Your array (${arr}) was empty. Bye!`);
        console.log('----------------------------------------------------------\n');
        return;
    }

    if(arr.some(el => isNaN(el))){
        console.log('----------------------------------------------------------');
        console.log(`Your array (${arr}) has at least one item that is not a number. Bye!`);
        console.log('----------------------------------------------------------\n');
        return;
    }

    //1. Make an array to hold the results
    let result = [];

    //2. Write a helper function to collect ONLY the odd numbers
    const helper = (list) => {
        if(list.length === 0) return;
        if(list[0] % 2 !== 0){
            result.push(list[0]);
        }
        helper(list.slice(1));
    };
    //3. Call recursively the helper function
    helper(arr);

    //4. Return the result array
    console.log('----------------------------------------------------------');
    console.log(result.length === 0 ? `Your array does not have any odd numbers. Bye!` : `Your array has ${result.length} odd number(s). The list is ${result}. Bye!`);
    console.log('----------------------------------------------------------\n');
    return result;
}

collectOddValues([1,2,3,4,5]);
collectOddValues([21,33,3,5,9,11,15]);
collectOddValues([10,20,30,40,50]);
collectOddValues([456,345,12,22,88,99,100]);
collectOddValues([2,4,6,8,12,14,16,17]);
collectOddValues([4,5,3,2,234,546,123,567]);
collectOddValues(['lol', 'lmao', 'ok']);
collectOddValues('lol lmao ok');
collectOddValues([]);
collectOddValues({});
collectOddValues();