function linearsearch(arr, val){
    if(!arr || !val || !Array.isArray(arr)) return -1;
    let index = 0;

    for(let value of arr){
        if(val === value) return index;
        index++;
    }

    return -1;
}

console.log(linearsearch([1,2,3,4], 3));
console.log(linearsearch([12,548,2553,47,3], 548));
console.log(linearsearch([12,3,2553,47,46], 5));