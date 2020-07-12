//Two strings are given, and we need to find out if the second string is an anagram of the first.
//An anagram is a word or phrase rearranged from the same letters of another word or phrase, for example: read & dear
//1. The strings have to match on length
//2. The strings have to match in frequency of characters (remember, same letters in both)
//3. Check for edge cases (null, undefined, not a string)
//4. Spaces and empty strings are allowed

function validAnagram(str1, str2){
    //just the output to see it in console. nothing else.
    const seeOutput = (res) => {
        console.log('-------------------------------------');
        console.log('TESTING...');
        console.log('-------------------------------------');
        console.log('str1: ', str1);
        console.log('str2: ', str2);
        console.log('is str2 an anagram of str1? ', res);
        console.log('-------------------------------------');
        console.log('\n');
    }

    //check and do something
    //if either input is null or undefined, then don't bother and return false
    if((str1 === null || str1 === undefined) || (str2 === null || str2 === undefined)){
        seeOutput(false);
        return false;
    }
    //if strings aren't of the same length then return false
    if(str1.length !== str2.length){
        seeOutput(false);
        return false;
    }
    //if either input is not a string, then don't bother and return false
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        seeOutput(false);
        return false;
    }

    //okay, now if we actually have a string then let's start!
    //1. convert both strings to lowercase, to match the letters regardless of the case
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    //2. Create objects to easily access the properties of the string, such as which letters are in the string and how many times each letter shows up in the string
    let [freqStr1, freqStr2] = [{}, {}];

    //2.1 Loop on str1 counting if a letter exist and the frequency of how many times that letter comes up, save it to an object
    // console.log('str1 split: ', str1.split(''));
    // console.log('str2 split: ', str2.split(''));
    for(let letter of str1.split('')){
        freqStr1[letter] = ++freqStr1[letter] || 0;
    }

    //3. Do step 2 with str2
    for(let letter of str2.split('')){
        freqStr2[letter] = ++freqStr2[letter] || 0;
    }

    //4. Loop in the frequency object we got from the str2 & check if the entry matches an entry in the frequency object from str1
    for(let key in freqStr2){
        //4.1 If the key doesnt exist in the frequency object of str1, return false
        if(!(key in freqStr1)){
            seeOutput(false);
            return false;
        }
        //4.2 If the key exist, but the value (no. of times the letter is in the string) is different, then return false
        if(freqStr2[key] !== freqStr1[key]){
            seeOutput(false);
            return false;
        }

    }
    //5. If the objects could pass step 4, then return true
    seeOutput(true);
    return true;
}

validAnagram('', '');//true
validAnagram('', ' ');//false
validAnagram(' ', ' ');//true
validAnagram('aaz', 'zza');//false
validAnagram('anagram', 'nagaram');//true
validAnagram('rat', 'car');//false
validAnagram('rat', 'rats');//false
validAnagram('awesome', 'awesom');//false
validAnagram('text twist time', 'time twist text');//true
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');//false
validAnagram('qwerty', 'qeywrt');//true
validAnagram('texttwisttime', 'timetwisttext');//true
validAnagram('undefined', undefined);//false
validAnagram('null', null);//false
validAnagram(undefined, null);//false
validAnagram('undefined', 35456485);//false
