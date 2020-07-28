function getDigit(num, positionToFind) {
    //SHORT SOLUTION
     return Math.floor(Math.abs(num) / Math.pow(10, positionToFind)) % 10;
}

function digitCount(num){
    return (Math.abs(num)+"").length;
    // return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, digitCount(arr[i]));
    }
    return max;
}

// console.log(mostDigits([123,45,6,190]));

// console.log(digitCount(1234));
// console.log(digitCount(34));
// console.log(digitCount(-34));
// console.log(digitCount(0));
// console.log(digitCount(111111));

// console.log(getDigit(123457893, 0)); //3
// console.log(getDigit(1234575, 5)); //2
// console.log(getDigit(123456, 1)); //5
// console.log(getDigit(123456, 7)); //OUT OF BOUNDS!
// console.log(getDigit(12345775423, 4)); //7
// console.log(getDigit(123468174657, 2)); //6
// console.log(getDigit(123468174657, -6)); //8
// console.log(getDigit(-123468174657, -6)); //8