function insertionSort(arr){

    for(let i =  1; i < arr.length; i++){
        const current = arr[i];
        console.log('current: ', current);
        console.log('arr: ', arr);
        let insertIndex = i - 1;

        while(insertIndex >= 0 && arr[insertIndex] > current){
            console.log(`PRE: arr[${insertIndex}]: ${ arr[insertIndex]} && arr[${insertIndex + 1}]: ${arr[insertIndex + 1]}`);
            arr[insertIndex + 1] = arr[insertIndex];
            console.log(`POS: arr[${insertIndex}]: ${ arr[insertIndex]} && arr[${insertIndex + 1}]: ${arr[insertIndex + 1]}\n`);
            insertIndex--;
        }
        console.log(`POST: arr = ${arr}`);
        console.log(`POST: insertIndex = ${insertIndex} insertIndex + 1 = ${insertIndex + 1} \n`);
        arr[insertIndex + 1] = current;

        console.log(`*******************************`);
        console.log(`*********** LOOP ${i} *********`);
        console.log(`arr = ${arr}`);
        console.log(`*******************************\n\n`);
    }
    // console.log(arr)
    return arr;
}

insertionSort([12,89, 120,23,34,99, 541,45,56,67]);
// insertionSort([67,85,42,12,3,78,99,120]);
// insertionSort([1,5,9,7,4,3]);
// insertionSort([2,4,8,6]);
// insertionSort([100,20,19,75,17]);
// insertionSort([260,27,58,71,120,148,12,14,10,1,8,4,-3]);