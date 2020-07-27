function merger(arrA, arrB, order = 'asc') {
    let resultArr = [];
    let [a, b] = [0, 0];

    if (order === 'desc') {
        while(a < arrA.length && b < arrB.length){
            if (arrA[a] >= arrB[b]) {
                resultArr.push(arrA[a]);
                a++;
            } else {
                resultArr.push(arrB[b]);
                b++;
            }
        }
    } else {
        while(a < arrA.length && b < arrB.length){
            if (arrA[a] >= arrB[b]) {
                resultArr.push(arrB[b]);
                b++;
            } else {
                resultArr.push(arrA[a]);
                a++;
            }
        }
    }

    while (a < arrA.length) {
        resultArr.push(arrA[a]);
        a++;
    }

    while (b < arrB.length) {
        resultArr.push(arrB[b]);
        b++;
    }
    return resultArr;
}

function mergeSort(unsortedArr, order = 'asc') {
    if (unsortedArr.length <= 1) return unsortedArr;

    let midpoint = Math.floor(unsortedArr.length / 2);
    let left = mergeSort(unsortedArr.slice(0, midpoint), order);
    let right = mergeSort(unsortedArr.slice(midpoint), order); //slice doesnt need an end if you want to go until the end

    return merger(left, right, order);
}

console.log(mergeSort([10, 24, 5, 76, 73, 0], 'desc'));
console.log(mergeSort([10, 24, 5, 76, 73, 0], 'asc'));
console.log(mergeSort([22,25,12,7,21,36,66,57]));
console.log(mergeSort([22,25,12,7,21,36,66,57], 'desc'));