'use strict';


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const suSet = [];


function search1(k, n) {
    if(k === n + 1){
        console.log(...suSet);
    }else{
        suSet.push(k);
        search1(k + 1, n);
        suSet.pop()
        search1(k + 1, n);
    }
}


function main(){
    rl.on('line', (input) => {
        const n = parseInt(input, 10);

        search1(1, n);
        process.exit(0);
    });
}

main();
