function charCount(str){
   if(!str || typeof str !== 'string'){
    console.log('your input is ' + typeof str);
    return;
   }

    str = str.toLowerCase();
    let countList = {};
    str.split('').forEach(el => {
        if(el.charCodeAt(0) > 46 && el.charCodeAt(0) < 123){
            countList[el] = ++countList[el] || 1;
        }
    });

    console.log(countList);
}

console.log('\n------ extreme cases ------');
charCount('');
charCount();
charCount(1546);
charCount(null);
charCount(undefined);
console.log('\n------ intended cases ------');
charCount('aaaa');
charCount('hello');
charCount('Hello sammy');
charCount('Hi there id no. is w3542');