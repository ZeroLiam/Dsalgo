const swap = (list, indx1, indx2) => {
    [list[indx1], list[indx2]] = [list[indx2], list[indx1]];
}

function pivotHelper(arr, start = 0, end = arr.length + 1){
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = swapIndex + 1; i < arr.length; i++){
        if(pivot > arr[i]){
          swapIndex++;
          swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);

    console.log(arr);
    return arr;
}

pivotHelper([4,8,2,1,5,7,6,3]);
pivotHelper([5,1,8,3,4,2,6,7]);