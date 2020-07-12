//Function called same
//aceepts two arrays
//compares the two arrays as follows:
// 1. Arrays have the same length
//2. Array A can have positive integers, Array B should have the squared values of a corresponding entry in Array A, or viceversa
//3. Array B should have the same frequency of entries in Array A, regardless of order. For example, A = [1,2,1] and B = [1,1,4] is as valid as A = [1,2,1] B = [1,4,1]
//4. Check for extreme cases and inputs
//5. Look for efficiency in time and/or space

function same(ex, arrA, arrB){
    //just the output to see it in console. nothing else.
    const seeOutput = (res) => {
        console.log('-------------------------------------');
        console.log('TEST NUMBER: ', ex);
        console.log('-------------------------------------');
        console.log('arrA: ', arrA);
        console.log('arrB: ', arrB);
        console.log('is arrA squared in arrB? ', res);
        console.log('-------------------------------------');
        console.log('\n');
    }

    //if the input are not arrays, dont bother, kick them out
    if(!Array.isArray(arrA) || !Array.isArray(arrB)){
        seeOutput('NO, one of them isn\'t even an array!!');
        return false;
    }
    //if the arrays aren't the same length, return false, don't bother
    if(arrA.length !== arrB.length){
        seeOutput('NO, they dont have the same length!!!');
        return false;
    }
    
    //make two objects for each array
    let [freqA, freqB] = [{}, {}];

        //count each entry in arrA
        for(let val of arrA){
            freqA[val] = ++freqA[val] || 0;
        }
        //count each entry in arrB
        for(let val of arrB){
            freqB[val] = ++freqB[val] || 0;
        }
        //find an entry in arrB that is the squared of an entry from ArrA    
        for(let key in freqA){
            if(!(key ** 2 in freqB)){
                seeOutput('false');
                return false;
            }
            if(freqB[key ** 2] !== freqA[key]){
                seeOutput('false');
                return false;
            }
        }
        
    //return true
    seeOutput('true');
    return true;
}

same(0, null, [1,4,1]);//false
same(1, [1,2,1], [1,4,1]);//true
same(2, [1,2,3], [1,4,9]);//true
same(3, [1,2,1], [1,4]);//false
same(4, [1,1], [1,4,1]);//false
same(5, [1,2], [1,4]);//true
same(6, [3,3,2], [9, 4, 4]);//false
same(7, [3,3,2], [9, 4, 9]);//true
same(8, [1,2,1], [1,1,4]);//true
same(9, [1,2,1], [1,8,3]);//false
same(10, null, undefined);//false
same(11, [1,2,3], undefined);//false