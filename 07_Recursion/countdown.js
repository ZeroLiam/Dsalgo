//Do a recursive function that counts down from a number to 0.
//1. The number input should be a positive integer
//2. The function should be recursive
//3. The function should be O(n)
//4. Look for edge cases

function countdown(num){
    //Check for edge cases!!!
    if(typeof num !== 'number'){
        console.log('----------------------------------');
        console.log('Your input was not a number. Bye!');
        console.log('----------------------------------\n');
        return;
    }
    if(num < 0){
        console.log('----------------------------------');
        console.log('Sorry, only positive numbers allowed.');
        console.log('----------------------------------\n');
        return;
    }
    //1. make base case
    if(num === 0){
        console.log('----------------------------------');
        console.log('DONE! You reached zero.');
        console.log('----------------------------------\n');
        return;
    }
    //2. log it
    console.log('countdown! ', num);
    num--;
    //3. recursively call it again
    countdown(num);
}

countdown(5);
countdown(3);
countdown(-8);
countdown('lol');
countdown('');
countdown(0);
countdown([]);
countdown({});