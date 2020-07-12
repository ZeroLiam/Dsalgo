//Given two positive integers, find if both have the same frequency of digits.

function sameFrequency(num1, num2){
    //just the output to see it in console. nothing else.
    const seeOutput = (res, ob1, ob2) => {
        console.log('-------------------------------------------------------------------');
        console.log('TESTING...');
        console.log('-------------------------------------------------------------------');
        console.log('num1: ', ob1);
        console.log('num2: ', ob2);
        console.log('does num1 and num1 have the same number frequency? ', res);
        console.log('-------------------------------------------------------------------');
        console.log('\n');
    }

    //1. Edge cases: it's not a number, it's empty, it's not the same length
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        seeOutput(false, num1, num2);
        return false;
    }
    
    //2. Convert both to string array
    num1 = num1.toString().split('');
    num2 = num2.toString().split('');

    if(num1.length !== num2.length || (num1.length === 0 || num2.length === 0)){
        seeOutput(false, num1, num2);
        return false;
    }

    //3. Make an object for each number in each array, saving the frequency as value and the number as key
    let [freqNum1, freqNum2] = [{}, {}];
    for(let digit of num1){
        freqNum1[digit] = ++freqNum1[digit] || 1;
    }
    for(let digit of num2){
        freqNum2[digit] = ++freqNum2[digit] || 1;
    }

    //4. Loop object num2, try to find the number in object num1
    for(let key in freqNum2){
        if(!(key in freqNum1)){
            seeOutput(false, freqNum1, freqNum2);
            return false;
        }

        if(freqNum2[key] !== freqNum1[key]){
            seeOutput(false, freqNum1, freqNum2);
            return false;
        }
    }

    //5. Return true or false if they have the same frequency
    seeOutput(true, freqNum1, freqNum2);
        return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);