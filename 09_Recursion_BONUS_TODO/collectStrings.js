function collectStrings(inputObj){
    let collection = [];

    const helper = (obj) => {
        for(var key in obj) {
            if(typeof obj[key] === 'string') {
                collection.push(o[key]);
            }
            else if(typeof obj[key] === 'object') {
                return helper(obj[key]);
            }
        }
    }

    helper(inputObj);
    
    return collection;
}

const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj1));