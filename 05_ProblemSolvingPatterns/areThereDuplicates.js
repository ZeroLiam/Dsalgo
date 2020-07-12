//Create a function called areThereDuplicates, which tries to find if there's a duplicate in the arguments we're passing.

//1. The function will have an array of arguments, so use 'args' or 'options' as the solely argument
//2. Use the frequency algo or the multiple indicators algo to find out the duplicates
//3. Try to keep time and space in O(n), for better bonus try to keep time O(n log n) and space in O(1)
//4. The arguments can be characters or integers

function areThereDuplicates(...args){
    console.log('args: ', args);
    //just for the output
    const seeOutput = (res) => {
        console.log('-------------------------------------------------------------');
        console.log('TESTING... ');
        console.log('-------------------------------------------------------------');
        console.log('args: ', args);
        console.log('are there duplicates? ', res);
        console.log('-------------------------------------------------------------');
        console.log('\n');
    }
      //1. Get a holder for the index in the left side, and another for the index right next to it
      let freqChar = {};
        for(let ch of args){
            freqChar[ch] = ++freqChar[ch] || 0;
        }
        for(let key in freqChar){
            if(freqChar[key] > 0){
                seeOutput(true)
                return true;
            }
        }
        seeOutput(false);
        return false;
}

areThereDuplicates(1,2,3);
areThereDuplicates(1,2,2);
areThereDuplicates('a', 'b', 'c', 'a');
areThereDuplicates('a', 'a', 'b', 'c');