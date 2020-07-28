function getDigit(num, positionToFind) {
    /**
     * LONG SOLUTION
     * Treating the digits like a string because I'm dumb
     * let position = 0;

    for(let i = positionToFind; i > -1; i--){
        num /= 10;
        let x = position === 0 ? Math.ceil(10 * (num - Math.floor(num))) : Math.floor(10 * (num - Math.floor(num)));
        // console.log(`x: ${x} i: ${i} positionToFind: ${positionToFind}`);
        if(position === positionToFind) return x;
        position++;
    }
    return -1;
     */

    /**
     * MID SOLUTION
     * Because I noticed a pattern here
    positionToFind = Math.abs(positionToFind);
    if(positionToFind > (num + "").length) return 'POSITION TO FIND IS OUT OF BOUNDS!';
    let decimalPower = Math.pow(10, positionToFind+1);
    let unitPosition = Math.abs(num)/decimalPower;
    // let lenOfNum = (num + "").length;
    // console.log(`num:${num}   length of number: ${lenOfNum}   positionToFind: ${positionToFind}`)
    // console.log(`decimalPower: ${decimalPower} num:${num} unitPosition: ${unitPosition} res: ${Math.floor(10 * (unitPosition - Math.floor(unitPosition)))}`)
    return Math.floor(10 * (unitPosition - Math.floor(unitPosition)));
     */


    //SHORT SOLUTION
    //THE SAME THING BUT SHORTER, CLEANER
     return Math.floor(Math.abs(num) / Math.pow(10, positionToFind)) % 10;
}

console.log(getDigit(123457893, 0)); //3
console.log(getDigit(1234575, 5)); //2
console.log(getDigit(123456, 1)); //5
console.log(getDigit(123456, 7)); //OUT OF BOUNDS!
console.log(getDigit(12345775423, 4)); //7
console.log(getDigit(123468174657, 2)); //6
console.log(getDigit(123468174657, -6)); //8
console.log(getDigit(-123468174657, -6)); //8