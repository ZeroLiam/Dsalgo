function bubbleSort(arr){
    let wasSwapped;
    const swap = (list, indx1, indx2) => {
        [list[indx1], list[indx2]] = [list[indx2], list[indx1]];
    }

    for(let i = arr.length; i > 0; i--){
        wasSwapped = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
                wasSwapped = false;
            }
        }
        if(wasSwapped) break;
    }

    console.log(arr)
    return arr;
}

bubbleSort([12,23,34,45,56,67]);
bubbleSort([67,85,42,12,3,78,99,120]);
bubbleSort([1,5,9,7,4,3]);
bubbleSort([2,4,8,6]);
bubbleSort([100,20,19,75,17]);
bubbleSort([260,27,58,71,120,148,12,14,10,1,8,4,-3]);