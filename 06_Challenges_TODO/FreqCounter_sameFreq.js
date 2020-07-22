function sameFrequency(...args) {
    // good luck. Add any arguments you deem necessary.
    //1. Edge cases: it's not a number, it's empty, it's not the same length
    if (args.length <= 1 || args.some(val => val.length === 0) || args.some(val => typeof val !== 'number') || args[0].length !== args[1].length) return false;

    //2. Convert both to string array
    args[0] = args[0].toString().split('');
    args[1] = args[1].toString().split('');

    //3. Make an object for each number in each array, saving the frequency as value and the number as key
    let [freqNum1, freqNum2] = [{}, {}];
    for (let digit of args[0]) {
        freqNum1[digit] = ++freqNum1[digit] || 1;
    }
    for (let digit of args[1]) {
        freqNum2[digit] = ++freqNum2[digit] || 1;
    }

    //4. Loop object num2, try to find the number in object num1
    for (let key in freqNum2) {
        if (!(key in freqNum1)) return false;
        if (freqNum2[key] !== freqNum1[key]) return false;
    }
    //5. Return true or false if they have the same frequency
    return true;
}

console.log(sameFrequency(182, 128));
console.log(sameFrequency(155599, 99551));
console.log(sameFrequency(22334466, 33446622));
console.log(sameFrequency(5468, 6484));
console.log(sameFrequency(007, 700));
console.log(sameFrequency(321, 123));
console.log(sameFrequency());
console.log(sameFrequency([], []));
console.log(sameFrequency({}, {}));
console.log(sameFrequency(null, undefined));
console.log(sameFrequency(undefined, null));
console.log(sameFrequency(null, null));
console.log(sameFrequency(undefined, undefined));
console.log(sameFrequency(123));
console.log(sameFrequency('abc', 'cba'));
