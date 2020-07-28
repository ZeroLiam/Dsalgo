function _getDigit(num, positionToFind) {
    //SHORT SOLUTION
     return Math.floor(Math.abs(num) / Math.pow(10, positionToFind)) % 10;
}

function _digitCount(num){
    return (Math.abs(num)+"").length;
    // return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function _mostDigits(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, _digitCount(arr[i]));
    }
    return max;
}

function radixSort(arr){
    let mostDigits = _mostDigits(arr);
    
    for(let j = 0; j < mostDigits; j++){
        let bucket = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digitIndex = _getDigit(arr[i],j);
            bucket[digitIndex].push(arr[i]);
        }
        arr = [].concat(...bucket);
    }

    console.log(arr);
    return arr;
}

radixSort([1244,123,1234,12]);
radixSort([30,7,120,36,98463,212365,1,12]);