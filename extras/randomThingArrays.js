let oddnumber = [
    '111',
    '222',
    '333',
    '444',
    '555',
];

let oddletter = [
    'AAA',
    'BBB',
    'CCC',
    'DDD',
    'EEE',
];


// function getRandomIndex(arrLen) {
//     return Math.floor(Math.random() * Math.floor(arrLen));
// }

// function getRandomOnce(arr) {
//     let arrCopy = arr;
//     // let index = arrayCopy.length > -1 ? getRandomIndex(arrCopy.length) : ;
//     newRandomizedArray.push(arrCopy[index]);

//     return newRandomizedArray;
// }


let newRandomizedArray = [];
let testArray = [1,2,3];
let copyArray = Array.from(testArray, (v) => v);

function test(newRandomizedArray, testArray, copyArray){

    if(copyArray.length === 0) copyArray = Array.from(testArray, (v) => v);

    const getRandomIndex = (arrLen) => {
        return Math.floor(Math.random() * Math.floor(arrLen));
    }

    let temp = getRandomIndex(copyArray.length);
    newRandomizedArray.push(copyArray[temp]);
    copyArray.splice(temp, 1);
    console.log(`newRandomizedArray: ${newRandomizedArray}   testArray: ${testArray}  copyArray: ${copyArray}`);
}

console.log('pass 1');
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
console.log('pass 2');
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
console.log('pass 3');
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
console.log('pass 4');
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);
test(newRandomizedArray, testArray, copyArray);