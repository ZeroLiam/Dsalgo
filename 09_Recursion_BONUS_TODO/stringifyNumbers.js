function stringifyNumbers(inputObj, str = ""){
    let obj = {};
    for (var key in inputObj) {
      if (typeof inputObj[key] === 'number') {
        obj[key] = str+inputObj[key];
      } else if (typeof inputObj[key] === 'object' && !Array.isArray(inputObj[key])) {
        obj[key] = stringifyNumbers(inputObj[key]);
      } else {
        obj[key] = inputObj[key];
      }
    }
    return obj;
}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));