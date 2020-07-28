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

let newRandomizedArray = [];

function getRandomIndex(arrLen) {
    return Math.floor(Math.random() * Math.floor(arrLen));
}

function getRandomOnce(arr) {
    let arrCopy = arr;
    // let index = arrayCopy.length > -1 ? getRandomIndex(arrCopy.length) : ;
    newRandomizedArray.push(arrCopy[index]);

    return newRandomizedArray;
}

function test(){
    let testArray = [1,2,3];
    for(let i = 0; i < testArray.length * 2; i++){
        console.log(`\noriginal: ${testArray}\nrandomized: ${getRandomOnce(testArray)}`)
    }
}