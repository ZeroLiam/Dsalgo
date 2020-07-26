function selectionSort(arr){
    const swap = (list, indx1, indx2) => {
        [list[indx1], list[indx2]] = [list[indx2], list[indx1]];
    }

    for(let i =  0; i < arr.length; i++){
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[min] > arr[j]) min = j;
        }
        swap(arr, min, i);
    }
    console.log(arr)
    return arr;
}

selectionSort([12,23,34,45,56,67]);
selectionSort([67,85,42,12,3,78,99,120]);
selectionSort([1,5,9,7,4,3]);
selectionSort([2,4,8,6]);
selectionSort([100,20,19,75,17]);
selectionSort([260,27,58,71,120,148,12,14,10,1,8,4,-3]);