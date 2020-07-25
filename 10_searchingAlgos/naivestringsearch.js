function naiveString(str, pattern) {
    //loop over the longer string
    //loop over the short string
    //if chars dont match, break that inner loop
    //if chars match keep going
    //if the inner loop is completed with a match, increase the count of found elements
    //return the count of found elements
    // let [counter, strArr, patternArr] = [0, str.split(''), pattern.split('')];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== str[i + j]) break;
            if (j === pattern.length - 1) counter++;
        }
    }
    return counter;
}

console.log(naiveString('wowomglolomg', 'omg')); //2
console.log(naiveString('wowomglolroflomg', 'rofl')); //1
console.log(naiveString('wowomglolroflomg', 'qoq')); //0
console.log(naiveString('wowomglolwowzaroflomg', 'wow')); //2
console.log(naiveString('wowomgwowzalolroflwowzaomgwowzawoof', 'wowza')); //3
console.log(naiveString('wowomgwowzalolroflwowzaomgwowzawoof', 'woof')); //1