function merger(arrA, arrB){
    let resultArr = [];
    let [a, b] = [0, 0];

    while(a < arrA.length && b < arrB.length){
        if(arrA[a] >= arrB[b]){
           resultArr.push(arrA[a]);
           a++;
        }else{
            resultArr.push(arrB[b]);
            b++;
        }
    }
    while(a < arrA.length){
        resultArr.push(arrA[a]);
        a++;
    }
    
    while(b < arrB.length){
        resultArr.push(arrB[b]);
        b++;
    }

    console.log('result array: ', resultArr);
    return resultArr;
}

merger([1,10,50], [2,14,99,100, 150, 198]);