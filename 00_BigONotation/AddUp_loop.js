const { performance } = require('perf_hooks');

function addUp(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        count += i;
    }

    return count;
}

function addUpSimple(n){
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpSimple(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds.`)