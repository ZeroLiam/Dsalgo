function pivotHelper (arr, start = 0, end = arr.length + 1) {
    const swap = (list, indx1, indx2) => {
        [list[indx1], list[indx2]] = [list[indx2], list[indx1]];
    };

    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
          swapIndex++;
          swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivotHelper(arr, left, right);
        //recursive left
        quickSort(arr, left, pivotIndex - 1);
        //recursive right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));
console.log(quickSort([5,1,8,3,4,2,6,7]));