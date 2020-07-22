function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    if(!arr || !Array.isArray(arr)) return false;

    if(arr.length === 1) return [arr[0].toUpperCase()];
    
    let result = capitalizeWords(arr.slice(0, -1));
    result.push(arr.slice(arr.length-1)[0].toUpperCase());

    return result;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));